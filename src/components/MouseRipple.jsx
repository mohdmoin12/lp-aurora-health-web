import React, { useState, useEffect } from "react";
// import "./MouseRipple.css"; // Create this CSS file

const MouseRipple = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="ripple" style={{ left: position.x, top: position.y }} />;
};

export default MouseRipple;
