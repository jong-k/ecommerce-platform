import Section from "./components/common/Section";

function App() {
  return (
    <main className="main-board">
      <Section header="할 일" category="todo" />
      <Section header="진행 중" category="pending" />
      <Section header="완료" category="done" />
    </main>
  );
}

export default App;
