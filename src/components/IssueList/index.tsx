import styles from "./index.module.scss";
import IssueCard from "../IssueCard";

const IssueList = ({ phase, label, items }) => {
  return (
    <div>
      <h2>{label}</h2>
      <div>사이즈: {items.length}</div>
      {items.map((item, idx) => {
        const { title, description, state, assignee, dueDate } = item;
        return (
          <IssueCard
            key={idx}
            title={title}
            description={description}
            state={state}
            assignee={assignee}
            dueDate={dueDate}
          />
        );
      })}
    </div>
  );
};

export default IssueList;
