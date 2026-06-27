import { useState } from "react";

export default function FanPollWidget({ poll }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="card poll-card">
      <div className="poll-head">📊 Live Poll</div>
      <div className="poll-question">{poll.question}</div>
      {poll.options.map((opt) => (
        <div
          key={opt.name}
          className={`poll-option ${selected === opt.name ? "selected" : ""}`}
          onClick={() => setSelected(opt.name)}
          role="button"
          tabIndex={0}
        >
          <div className="poll-option-row">
            <span>{opt.name}</span>
            <span>{opt.pct}%</span>
          </div>
          <div className="poll-bar-track">
            <div className="poll-bar-fill" style={{ width: `${opt.pct}%` }} />
          </div>
        </div>
      ))}
      <div className="poll-total">{poll.totalVotes} total votes{selected ? " · Thanks for voting!" : ""}</div>
    </div>
  );
}
