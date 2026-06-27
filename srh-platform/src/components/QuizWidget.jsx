export default function QuizWidget({ quiz }) {
  return (
    <div className="card quiz-card">
      <div className="quiz-card-top">
        <span className={`tag ${quiz.difficulty === "Hard" ? "" : "tag-gold"}`}>{quiz.difficulty.toUpperCase()}</span>
        <span className="quiz-meta">{quiz.questions} Qs</span>
      </div>
      <div className="quiz-card-title">{quiz.title}</div>
      <div className="quiz-card-desc">{quiz.desc}</div>
      <button className="btn btn-outline btn-sm">Start Quiz →</button>
    </div>
  );
}
