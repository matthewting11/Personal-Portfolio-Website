
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1000);

    // Completely remove loader after fade
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 1500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100dvh",
        backgroundColor: "#080808",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s ease",
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      {/* Animated moose logo */}
      <div className="moose-loader">
        <Image
          src="/images/moose_logo_truly_transparent.png"
          alt="MOOOSE logo"
          width={150}
          height={150}
          priority
          style={{
            width: "150px",
            height: "150px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Loading text */}
      <div
        style={{
          marginTop: "25px",
          color: "#EFFF00",
          fontSize: "13px",
          fontWeight: 900,
          letterSpacing: "5px",
        }}
      >
        LOADING...
      </div>

      <style jsx>{`
        .moose-loader {
          animation: mooseBounceSpin 0.5s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes mooseBounceSpin {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-35px) rotate(180deg);
          }
          100% {
            transform: translateY(0) rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .moose-loader {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
