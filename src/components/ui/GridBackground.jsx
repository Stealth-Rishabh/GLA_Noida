import React from "react";

const GridBackground = ({ children, green }) => {
  return (
    <div className={`relative min-h-screen ${green}`}>
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(black 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>
      {children}
    </div>
  );
};

export default GridBackground;
