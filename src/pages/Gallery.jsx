function Gallery() {
  const images = [
     "https://eklavya-tech-fest.vercel.app/img/event_photos/hackathon3.jpg",
     "https://mec.edu.in/storage/2025/03/2.3.HackIndia-scaled.jpg",
     "https://ss-images.saostar.vn/2025/2/24/pc/1740380637978/i49475prq41-azmq7khf332-y8hlab4hct3.jpg"
  ];

  return (
    <div className="page">
      <h1>Gallery</h1>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="TechFest"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;