import { useEffect, useState } from "react";

import Card from "./Card";
import Modal from "../layout/Modal";
import { addItem, readItem } from "../../utils/jsonLocalStorage";

const Section = ({ header, category }) => {
  const [issueList, setIssueList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  // category별 초기 배열을 로컬 스토리지에 저장
  useEffect(() => {
    if (!readItem("issueList")) addItem("issueList", []);
    else setIssueList(readItem("issueList"));
  }, []);

  return (
    <main className="status-section">
      <h2 className="section-header">{header}</h2>
      {issueList.map((issue, idx) => (
        <Card key={idx} status={category} />
      ))}
      <button className="add-btn" onClick={() => setOpenModal(true)}>
        <span className="add-btn-text">+ 새로 만들기</span>
      </button>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        phase={category}
      />
    </main>
  );
};

export default Section;
