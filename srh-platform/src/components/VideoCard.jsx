export default function VideoCard({ video }) {
  return (
    <div className="card video-card">
      <div className="video-card-thumb">
        <img src={video.thumb} alt={video.title} loading="lazy" />
        <div className="video-play"><span>▶</span></div>
        <span className="video-duration">{video.duration}</span>
      </div>
      <div className="video-card-body">
        <div className="video-card-cat">{video.category}</div>
        <div className="video-card-title">{video.title}</div>
      </div>
    </div>
  );
}
