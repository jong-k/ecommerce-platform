import Section from "./components/common/Section";

function App() {
  return (
    <main className="main-board">
      <Section category="할 일" />
      <Section category="진행 중" />
      <Section category="완료" />
    </main>
  );
}

export default App;
