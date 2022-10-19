// index.js
import React from "react";
import { ColorProvider } from "./components/ColorProvider";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ColorProvider>
    <App />
  </ColorProvider>
);
// 이제 App의 자식 컴포넌트는 useColors 훅으로부터 colors를 얻을 수 있다
