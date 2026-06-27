export default function GalleryCard({ item, tall, onClick }) {
  return (
    <div className={`gallery-item ${tall ? "gallery-item-tall" : ""}`} onClick={onClick}>
      <img src={item.image} alt={item.category} loading="lazy" />
      <div className="gallery-item-overlay"><span>{item.category}</span></div>
    </div>
  );
}
