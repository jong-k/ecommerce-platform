import PhaseSection from "./components/common/PhaseSection";

const Dnd = () => {
  return (
    <main className="main-board">
      <PhaseSection header="할 일" category="todo" />
      <PhaseSection header="진행 중" category="pending" />
      <PhaseSection header="완료" category="done" />
    </main>
  );
};

export default Dnd;
