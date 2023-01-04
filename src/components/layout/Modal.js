import { useState } from "react";

const STATUS_LIST = [
  { name: "할 일", value: "todo" },
  { name: "진행 중", value: "progress" },
  { name: "완료", value: "done" },
];

const PERSON_LIST = ["손흥민", "김민재"];

const Modal = ({ open, onClose }) => {
  if (!open) return;
  console.log(PERSON_LIST);

  const [issueContent, setIssueContent] = useState({
    id: Date.now(),
    title: "",
    person: "",
    description: "",
    status: "todo",
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

    if (!localStorage.getItem(issueContent.status)) {
      localStorage.setItem(issueContent.status, JSON.stringify([]));
    }
    const arr = JSON.parse(localStorage.getItem(issueContent.status));
    arr.push(issueContent);
    console.log(arr);
    localStorage.setItem(issueContent.status, JSON.stringify(arr));
    onClose();
  };

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
