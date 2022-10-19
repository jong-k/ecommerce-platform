import React from "react";
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";

const App = () => {
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  );
};

export default App;
