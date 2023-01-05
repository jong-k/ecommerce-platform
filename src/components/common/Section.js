import { useEffect, useState } from "react";

import Card from "./Card";
import Modal from "../layout/Modal";

const Section = ({ header, category }) => {
  const [issueList, setIssueList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  console.log(setIssueList);
  // category별 초기 배열을 로컬 스토리지에 저장
  useEffect(() => {
    if (!issueList.length)
      localStorage.setItem(category, JSON.stringify(issueList));
  }, []);

  return (
    <main className="status-section">
      <h2 className="section-header">{header}</h2>
      <Card status={category} />
      <button className="add-btn" onClick={() => setOpenModal(true)}>
        <span className="add-btn-text">+ 새로 만들기</span>
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </main>
  );
};

export default Section;
