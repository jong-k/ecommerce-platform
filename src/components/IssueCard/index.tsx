import { useState, useEffect } from "react";
import Modal from "../common/Modal";
import styles from "./index.module.scss";

const IssueCard = ({ title, description, state, assignee, dueDate }) => {
  const [onEdit, setOnEdit] = useState(false);

  const toggleOnEdit = () => {
    setOnEdit(!onEdit);
  };

  return (
    <>
      <div className={styles.card} onClick={toggleOnEdit}>
        <p>{title}</p>
        <div className={styles.cover}>담당자: {assignee}</div>
        <div className={styles.content}>기한: {dueDate}</div>
      </div>
      {onEdit && <Modal closeModal={setOnEdit} />}
    </>
  );
};

export default IssueCard;
