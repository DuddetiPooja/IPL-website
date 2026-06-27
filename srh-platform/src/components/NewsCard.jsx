import { Link } from "react-router-dom";

export default function NewsCard({ item, featured }) {
  return (
    <Link to={`/news/${item.id}`} className={`card news-card ${featured ? "news-card-featured" : ""}`}>
      <div className="news-card-img">
        <img src={item.image} alt={item.title} loading="lazy" />
        <span className="tag">{item.tag}</span>
      </div>
      <div className="news-card-body">
        <div className="news-card-cat">{item.category}</div>
        <h3 className="news-card-title">{item.title}</h3>
        {featured && <p className="text-muted" style={{ fontSize: 14, marginBottom: 12 }}>{item.excerpt}</p>}
        <div className="news-card-meta">
          <span>{item.date}</span>
          <span style={{ color: "var(--orange)", fontWeight: 700 }}>Read →</span>
        </div>
      </div>
    </Link>
  );
}
