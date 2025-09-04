import React from "react";

export default function Picture({ image }) {
  return (
    <div
      className="picture"
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${image})`,
      }}
    ></div>
  );
}
