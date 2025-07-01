import React, { useState } from "react";

function BlurImage({ src, alt, className = "" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`position-relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-100 h-100 img-fluid position-relative transition-opacity ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{ transition: 'opacity 0.6s ease-in-out' }}
      />
      {!loaded && (
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-secondary bg-opacity-25 animate-pulse" />
      )}
    </div>
  );
}

export default BlurImage;
