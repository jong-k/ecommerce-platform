import ReactDOM from "react-dom/client";

import "./assets/styles/index.scss";
import App from "./App";
import Layout from "./components/layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Layout>
    <App />
  </Layout>,
);
