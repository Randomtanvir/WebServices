"use client";

import { useEffect, useState } from "react";
const CursorBubble = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e) => {
      const newBubble = { id: Date.now(), x: e.clientX, y: e.clientY };
      setBubbles((prev) => [...prev, newBubble]);

      setTimeout(() => {
        setBubbles((prev) =>
          prev.filter((bubble) => bubble.id !== newBubble.id)
        );
      }, 500); // Remove bubble after 0.5s
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="fixed top-0 left-0 z-50 w-10 h-10 bg-yellow-500 rounded-full
  pointer-events-none transition-transform duration-200 ease-out shadow-xl
  blur-[12px]  transform-gpu"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        }}
      />

      {/* Bubbles on Click */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="fixed w-10 h-10 z-50 bg-[#ffbc2b] blur-[3px] rounded-full opacity-70 animate-pop pointer-events-none"
          style={{
            left: bubble.x - 20,
            top: bubble.y - 20,
          }}
        />
      ))}
    </>
  );
};

export default CursorBubble;
