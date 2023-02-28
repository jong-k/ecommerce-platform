import { createContext, useState } from "react";
import { testIssueList } from "../../data";

interface PropType {
  children: JSX.Element;
}

export const IssueContext = createContext(null);

const IssueProvider = ({ children }: PropType) => {
  const [issue, setIssue] = useState(testIssueList);

  return (
    <IssueContext.Provider value={{ issue, setIssue }}>
      {children}
    </IssueContext.Provider>
  );
};

export default IssueProvider;
