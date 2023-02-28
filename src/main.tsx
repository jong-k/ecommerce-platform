import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import IssueProvider from "./components/context/IssueProvider";
import ToastProvider from "./components/context/ToastProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IssueProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </IssueProvider>
  </React.StrictMode>,
);
