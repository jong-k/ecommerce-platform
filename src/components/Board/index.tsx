import { useContext, useState } from "react";
import styles from "./index.module.scss";
import IssueList from "../IssueList";
import { testIssueList } from "../../data";
import { IssueContext } from "../context/IssueProvider";
import { ToastContext, ToastContextType } from "../context/ToastProvider";

const Board = () => {
  const { issue, setIssue } = useContext(IssueContext);
  const [isLoading, setIsLoading] = useState(true);
  // const getIssueList = () => {
  //   const result = localStorage.getItem("issueList") ?? "empty";
  //   if (result !== "empty") {
  //     setIssueList(JSON.parse(result));
  //   }
  //   setTimeout(() => {
  //     try {
  //       setIsLoading(false);
  //     } catch {
  //       setToast("ddd");
  //     }
  //   });
  // };

  const addIssue = () => {
    setIssue();
  };

  return (
    <div className={styles.board}>
      {issue.map((item, idx) => {
        const { phase, label, items } = item;
        return (
          <IssueList phase={phase} label={label} items={items} key={idx} />
        );
      })}
    </div>
  );
};

export default Board;
