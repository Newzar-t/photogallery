import React, { useState } from "react";
import PhotoComponent from "./PhotoComponent";

function Gallery({ photos, style }) {
  const [isClicked, setIsClicked] = useState(null); // 

  return (
    <div>
      <div className={style}>
        {photos.map((photo, index) => (
          <div key={index} onClick={() => setIsClicked(photo)}>
            <PhotoComponent credit={photo.credit} url={photo.url} />
          </div>
        ))}
      </div>

      {}
      {isClicked && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setIsClicked(null)} 
        >
          <img
            src={isClicked.url}
            alt={isClicked.credit}
            style={{ maxHeight: "90%", maxWidth: "90%", objectFit: "contain" }}
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
