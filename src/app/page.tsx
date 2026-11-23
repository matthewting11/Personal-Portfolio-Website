
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const YELLOW = "#EFFF00";
const PINK = "#FF2D8D";
const BLACK = "#080808";

const rectangles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  top: 5 + i * 4.7,
  left: -20 + ((i * 17) % 45),
  width: 65 + ((i * 13) % 45),
  height: i % 4 === 0 ? 4 : 2,
  delay: i * 0.07,
  duration: 5 + (i % 5),
}));

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: "linear-gradient(90deg, #EFFF00 0%, #FFC94A 35%, #FF875D 65%, #FF2D8D 100%)",
        color: "#FFFFFF",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* Animated rectangles */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          height: "100vh",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {rectangles.map((rect) => (
          <div
            key={rect.id}
            style={{
              position: "absolute",
              top: `${rect.top}%`,
              left: `${rect.left}%`,
              width: `${rect.width}%`,
              height: `${rect.height}px`,
              background: `linear-gradient(
                90deg,
                ${YELLOW} 0%,
                #FFC94A 30%,
                #FF875D 60%,
                ${PINK} 100%
              )`,
              boxShadow:
                "0 0 12px rgba(239,255,0,0.3), 0 0 16px rgba(255,45,141,0.2)",
              opacity: mounted ? 0.85 : 0,
              transform: mounted
                ? "scaleX(1)"
                : "scaleX(0)",
              transformOrigin: "left center",
              transition: `transform 1.2s ease-out ${rect.delay}s, opacity 1.2s ease-out ${rect.delay}s`,
              animation: mounted
                ? `drift ${rect.duration}s ease-in-out ${rect.delay}s infinite alternate`
                : "none",
            }}
          />
        ))}
      </div>


          {/* Navigation */}
          <nav
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
              padding: "15px 7%",
              backgroundColor: "rgba(8, 8, 8, 0.85)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              boxSizing: "border-box",
              backgroundImage: "linear-gradient(90deg, rgba(239,255,0,0.9), rgba(255,45,141,0.9))",
            }}
          >

          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Image
              src="/images/moose_logo_truly_transparent.png"
              alt="MT Moose Logo"
              width={65}
              height={65}
              priority
              style={{
                width: "65px",
                height: "65px",
                objectFit: "contain",
              }}
            />
          </a>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(12px, 3vw, 35px)",
          }}
        >
          {["ABOUT", "PROJECTS", "CONTACT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "#080808",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2px",
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>


       
{/* ==========================
    MAIN HERO SECTION
========================== */}
<section
  style={{
    position: "relative",
    zIndex: 2,
    minHeight: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "40px 10% 30px",
    boxSizing: "border-box",
  }}
>
  {/* ==========================
      SCROLLING TITLES
  ========================== */}
  <div
    style={{
      width: "100vw",
      marginLeft: "-12.5%",
      overflow: "hidden",
      whiteSpace: "nowrap",
      marginBottom: "35px",
      transform: "translateY(120px)",
    }}
  >
    <div className="scrolling-titles">
      {Array.from({ length: 4 }).map((_, index) => (
        <span
          key={index}
          style={{
            flexShrink: 0,
            color: "#080808",
            fontWeight: 800,
            fontSize: "clamp(10px, 1.3vw, 14px)",
            letterSpacing: "3px",
            
          }}
        >
          ENGINEER / SINGER / SONGWRITER / PRODUCER /
          DEVELOPER / ARTIST / CREATOR /{"\u00A0"}
        </span>
      ))}
    </div>
  </div>

  {/* ==========================
      LEFT + RIGHT LAYOUT
  ========================== */}
  
      <div
        className="hero-layout"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.3fr)",
          alignItems: "center",
          columnGap: "30px",
          width: "100%",
          maxWidth: "1500px",
          margin: "0 auto",
          transform: "translateY(-60px)",
        }}
      >
    {/* ==========================
        LEFT SIDE - TEXT
    ========================== */}
    <div
      className="hero-text"
      style={{
        width: "100%",
        minWidth: 0,
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Main heading */}
      <h1
        style={{
          fontSize: "clamp(45px, 6vw, 100px)",
          fontWeight: 900,
          lineHeight: 0.98,
          letterSpacing: "-0.065em",
          margin: 0,
          color: "#080808",

          opacity: mounted ? 1 : 0,
          transform: mounted
            ? "translateY(0)"
            : "translateY(40px)",
          transition:
            "opacity 1.5s ease-out 0.3s, transform 1.5s ease-out 0.3s",
        }}
      >
        TURNING
        <br />

        <span
          style={{
            display: "inline-block",
            paddingRight: "20px",
            backgroundImage:
              "linear-gradient(90deg, #080808 0%, #EFFF00 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          IDEAS INTO
        </span>

        <br />
        REALITY.
      </h1>

      {/* Description */}
      <p
        style={{
          color: "#000000",
          fontSize: "clamp(16px, 1.5vw, 24px)",
          lineHeight: 1.8,
          maxWidth: "520px",
          marginTop: "32px",
        }}
      >
        Exploring the intersection of engineering,
        technology, and creative design through projects
        that turn ideas into reality.
      </p>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          marginTop: "36px",
        }}
      >
        <a
          href="/projects"
          style={{
            display: "inline-block",
            backgroundColor: YELLOW,
            color: BLACK,
            fontSize: "12px",
            fontWeight: 900,
            letterSpacing: "1.5px",
            textDecoration: "none",
            padding: "18px 28px",
          }}
        >
          EXPLORE MY WORK ↗
        </a>

        <a
          href="#about"
          style={{
            display: "inline-block",
            backgroundColor: "rgba(8,8,8,0.7)",
            border: `1px solid ${PINK}`,
            color: PINK,
            fontSize: "12px",
            fontWeight: 900,
            letterSpacing: "1.5px",
            textDecoration: "none",
            padding: "17px 28px",
          }}
        >
          ABOUT ME
        </a>
      </div>
    </div>

    {/* ==========================
        RIGHT SIDE - IMAGE
    ========================== */}
    
{/* RIGHT SIDE - HERO IMAGE */}
<div
  className="hero-image"
  style={{
    position: "relative",
    left: "50px",
    width: "100%",
    height: "min(100vh, 500px)",
    minHeight: "1000px",

    // Keep image away from right edge
    paddingRight: "10px",
    boxSizing: "border-box",

    opacity: mounted ? 1 : 0,
    transform: mounted
      ? "translateX(0)"
      : "translateX(50px)",
    transition:
      "opacity 1.5s ease-out 0.5s, transform 1.5s ease-out 0.5s",
  }}
>
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "100%",
    }}
  >

      <Image
        src="/images/website photo mask(1).png"
        alt="Personal portfolio hero"
        fill
        priority
        sizes="(max-width: 900px) 90vw, 100vw"
        style={{
          objectFit: "contain",
          objectPosition: "center center",
          transform: "none",
        }}
      />

  </div>
</div>
  </div>

  {/* ==========================
      SCROLL INDICATOR
  ========================== */}
  <div
    style={{
      position: "absolute",
      bottom: "30px",
      left: "10%",
      color: "#080808",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "2px",
    }}
  >
    SCROLL TO EXPLORE ↓
  </div>
</section>


      {/* About section */}
      <section
        id="about"
        style={{
          position: "relative",
          zIndex: 2,
          background: BLACK,
          padding: "120px 10%",
          minHeight: "55vh",
          scrollMarginTop: "30px",
        }}
      >
        <p style={{ color: PINK, letterSpacing: "3px" }}>
          01 / ABOUT
        </p>
        <h2
          style={{
            color: YELLOW,
            fontSize: "clamp(40px, 6vw, 80px)",
            marginTop: "24px",
          }}
        >
          DESIGN. BUILD. CREATE.
        </h2>
        <p
          style={{
            color: "#BBBBBB",
            maxWidth: "650px",
            lineHeight: 1.8,
            marginTop: "24px",
          }}
        >
          I am a Materials Science and Engineering student
          passionate about mechanical design, software
          development, and creative problem-solving.
        </p>
      </section>

      {/* Contact section */}
      <section
        id="contact"
        style={{
          position: "relative",
          zIndex: 2,
          background: BLACK,
          padding: "120px 10%",
          minHeight: "45vh",
          scrollMarginTop: "30px",
        }}
      >
        <p style={{ color: PINK, letterSpacing: "3px" }}>
          03 / CONTACT
        </p>
        <h2
          style={{
            color: YELLOW,
            fontSize: "clamp(40px, 6vw, 80px)",
            marginTop: "24px",
          }}
        >
          LET&apos;S CONNECT.
        </h2>
      </section>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: ${BLACK};
        }

        @keyframes drift {
          0% {
            translate: -15px 0;
          }
          100% {
            translate: 25px 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </main>
  );
}
