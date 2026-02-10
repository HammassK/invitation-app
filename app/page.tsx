"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [hearts, setHearts] = useState<{ left: string; top: string; size: string }[]>([]);

  useEffect(() => {
    const generatedHearts = Array.from({ length: 10 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 20 + 14}px`,
    }));

    setHearts(generatedHearts);
  }, []);

  const moveNoButton = () => {
    setNoPos({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    });
  };

  const resetNoButton = () => {
    setNoPos({ x: 0, y: 0 });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-300 via-pink-200 to-purple-200 flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((heart, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-60"
            style={{
              left: heart.left,
              top: heart.top,
              fontSize: heart.size,
            }}
          >
            💗
          </div>
        ))}
      </div>

      {/* Card */}
      <div
        onMouseLeave={resetNoButton}
        className="relative z-10 w-[320px] rounded-3xl bg-white/80 backdrop-blur-md shadow-2xl p-6 text-center"
      >
        {!accepted ? (
          <>
            <p className="mb-2 text-md font-semibold text-gray-900">Will you be my valentine?</p>

            <div className="rounded-2xl bg-white p-4 shadow-inner">
              <img
                src="/valentine-yes.gif"
                alt="Celebration"
                className="mx-auto w-[240px] h-auto"
              />
            </div>

            <div className="relative mt-6 flex items-center justify-center gap-6 h-[56px]">
              <button
                onClick={() => setAccepted(true)}
                className="px-6 py-2 rounded-full bg-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                YES
              </button>

              <button
                onMouseEnter={moveNoButton}
                onMouseMove={moveNoButton}
                style={{
                  transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                }}
                className="px-6 py-2 rounded-full bg-white text-gray-700 font-semibold shadow-md
             transition-transform duration-300 ease-out"
              >
                NO
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-pink-500 mb-2">YAYY 💕</h2>

            <div className="rounded-2xl bg-white p-4 shadow-inner">
              <img
                src="/valentine-yes.gif"
                alt="Celebration"
                className="mx-auto w-[240px] h-auto"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
