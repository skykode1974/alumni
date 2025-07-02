'use client';

export default function AnimatedWave() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
      <svg
        className="w-[200%] h-64 sm:h-72 md:h-80 animate-[moveRadioWave_12s_linear_infinite]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {/* Layer 1 - Main radio wave */}
        <path
          d="M0,60 Q150,0 300,60 T600,60 T900,60 T1200,60"
          stroke="#007BFF"
          strokeWidth="3"
          fill="none"
          opacity="0.4"
        />

        {/* Layer 2 - Softer wave */}
        <path
          d="M0,60 Q200,100 400,60 T800,60 T1200,60"
          stroke="#00C2FF"
          strokeWidth="2"
          fill="none"
          opacity="0.25"
        />

        {/* Layer 3 - Deeper low-frequency wave */}
        <path
          d="M0,60 Q100,30 300,60 T600,60 T900,60 T1200,60"
          stroke="#00AEEF"
          strokeWidth="1.5"
          fill="none"
          opacity="0.2"
        />
      </svg>

      <style jsx>{`
        @keyframes moveRadioWave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
