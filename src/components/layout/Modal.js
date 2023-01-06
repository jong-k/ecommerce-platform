import { useEffect, useState } from "react";

const STATUS_LIST = [
  { name: "할 일", value: "todo" },
  { name: "진행 중", value: "progress" },
  { name: "완료", value: "done" },
];

const Modal = ({ open, onClose, list, phase }) => {
  if (!open) return;

  const [todoList, setTodoList] = useState([]);
  const [pendingList, setPendingList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const [issueContent, setIssueContent] = useState({
    id: Date.now(),
    title: "",
    person: "",
    description: "",
    status: phase,
    dueDate: "",
  });

  const handleChange = (e) => {
    setIssueContent({
      ...issueContent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(issueContent);
    if (issueContent.status === "todo") {
      if (todoList.length) setTodoList([...todoList, issueContent]);
      else setTodoList([issueContent]);
      localStorage.setItem(issueContent.status, JSON.stringify(todoList));
    }
    if (issueContent.status === "pending") {
      setPendingList([...pendingList, issueContent]);
      localStorage.setItem(issueContent.status, JSON.stringify(pendingList));
    }
    if (issueContent.status === "done") {
      setDoneList([...doneList, issueContent]);
      localStorage.setItem(issueContent.status, JSON.stringify(doneList));
    }
    console.log(todoList, pendingList, doneList);
    onClose();
  };

  // 첫 렌더링 시 로컬스토리지에서 각각 단계별 이슈 데이터 받아와서 저장
  useEffect(() => {
    console.log(todoList, pendingList, doneList);
    setTodoList(JSON.parse(localStorage.getItem("todo")));
    setPendingList(JSON.parse(localStorage.getItem("pending")));
    setDoneList(JSON.parse(localStorage.getItem("done")));
    console.log("sucsex!");
  }, []);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-header">이슈 추가</h2>
        <form className="modal-content-form" onSubmit={handleSubmit}>
          <input
            name="title"
            type="text"
            onChange={handleChange}
            value={issueContent.title}
            placeholder="제목 없음"
          />
          <select
            name="status"
            onChange={handleChange}
            value={issueContent.status}
          >
            {STATUS_LIST.map(({ name, value }) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
          <input
            name="person"
            type="text"
            onChange={handleChange}
            value={issueContent.person}
            placeholder="담당자"
          />
          <input
            name="dueDate"
            type="date"
            onChange={handleChange}
            value={issueContent.dueDate}
          />
          <textarea
            name="description"
            onChange={handleChange}
            value={issueContent.description}
            placeholder="상세 내용"
          />
          <button type="submit">등록</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
