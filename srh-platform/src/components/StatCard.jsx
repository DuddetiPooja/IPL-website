import { useEffect, useRef, useState } from "react";

function useCountUp(target, start) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const duration = 1200;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      setValue(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);
  return value;
}

export default function StatCard({ stat, start }) {
  const value = useCountUp(stat.value, start);
  return (
    <div className="card stat-card">
      <div className="stat-card-icon">{stat.icon}</div>
      <div className="stat-card-value">{value}{stat.suffix}</div>
      <div className="stat-card-label">{stat.label}</div>
      <div className="stat-card-sub">{stat.sub}</div>
    </div>
  );
}
