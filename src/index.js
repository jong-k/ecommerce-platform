import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./assets/styles/index.scss";
import Layout from "./components/layout/Layout";
import App from "./App";
import Testing from "./Testing";
import Dnd from "./Dnd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="test" element={<Testing />} />
        <Route path="dnd" element={<Dnd />} />
      </Routes>
    </Layout>
  </BrowserRouter>,
);
