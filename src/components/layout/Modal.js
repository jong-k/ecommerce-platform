import { useEffect, useState } from "react";

import { addItem, readItem } from "../../utils/jsonLocalStorage";

const STATUS_LIST = [
  { name: "할 일", value: "todo" },
  { name: "진행 중", value: "progress" },
  { name: "완료", value: "done" },
];

const Modal = ({ open, onClose, phase }) => {
  if (!open) return;

  const [issueList, setIssueList] = useState([]);
  console.log(issueList);

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
  };

  // 첫 렌더링 시 로컬스토리지에서 각각 단계별 이슈 데이터 받아와서 저장
  useEffect(() => {
    if (!readItem("issueList")) addItem("issueList", []);
    else setIssueList(readItem("issueList"));
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
