
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "HPVDT Drivetrain",
    category: "MECHANICAL ENGINEERING",
    description:
      "Designing drivetrain components for a human-powered watercraft, including propeller assemblies, shaft sealing, and mechanical power transmission.",
    technologies: ["SolidWorks", "CAD", "Mechanical Design"],
  },
  {
    number: "02",
    title: "UTWind Website",
    category: "WEB DEVELOPMENT",
    description:
      "Developing a responsive website for the University of Toronto Wind Turbine Design Team using modern frontend technologies.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "UTRA SUMO Robot",
    category: "ROBOTICS",
    description:
      "Collaborating on an autonomous sumo robot using sensors, an Arduino microcontroller, and a custom-designed chassis.",
    technologies: ["Arduino", "SolidWorks", "Robotics"],
  },
  {
    number: "04",
    title: "Music Recommendation System",
    category: "MACHINE LEARNING",
    description:
      "Building a personalized song recommendation system using machine learning and music similarity analysis.",
    technologies: ["Python", "Machine Learning", "Next.js"],
  },
];

export default function ProjectsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080808",
        color: "#FFFFFF",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* NAVBAR */}
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
      
                <a href="/" aria-label="Go to homepage">
                  <Image
                    src="/images/moose_logo_truly_transparent.png"
                    className="moose-logo-link"
                    alt="Moose logo"
                    width={60}
                    height={60}
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
                  href={
                    item === "PROJECTS"
                      ? "/projects"
                      : `/#${item.toLowerCase()}`
                  }
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
      

      {/* PAGE HEADER */}
      <section
        style={{
          padding: "110px 10% 70px",
          background:
            "linear-gradient(115deg, #EFFF00 0%, #FFC94A 45%, #FF2D8D 100%)",
          color: "#080808",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            fontWeight: 800,
            letterSpacing: "4px",
            marginBottom: "20px",
          }}
        >
          ENGINEERING / SOFTWARE / CREATIVE
        </p>

        <h1
          style={{
            fontSize: "clamp(60px, 10vw, 150px)",
            fontWeight: 900,
            letterSpacing: "-0.07em",
            lineHeight: 1,
            margin: 0,
          }}
        >
          MY PROJECTS.
        </h1>

        <p
          style={{
            maxWidth: "650px",
            fontSize: "18px",
            lineHeight: 1.7,
            marginTop: "30px",
          }}
        >
          A collection of projects exploring engineering,
          programming, robotics, and creative problem-solving.
        </p>
      </section>

      {/* PROJECT CARDS */}
      <section
        style={{
          padding: "90px 10% 130px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "25px",
          }}
        >
          {projects.map((project) => (
            <article
              key={project.number}
              style={{
                padding: "35px",
                border: "1px solid #333333",
                background: "#121212",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                minHeight: "350px",
              }}
            >
              <span
                style={{
                  color: "#FF2D8D",
                  fontSize: "14px",
                  fontWeight: 800,
                }}
              >
                {project.number} / {project.category}
              </span>

              <h2
                style={{
                  color: "#EFFF00",
                  fontSize: "clamp(26px, 3vw, 38px)",
                  marginTop: "30px",
                  lineHeight: 1.15,
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  color: "#BBBBBB",
                  marginTop: "20px",
                  lineHeight: 1.8,
                  fontSize: "15px",
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "auto",
                  paddingTop: "30px",
                }}
              >
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      border: "1px solid #444444",
                      padding: "7px 12px",
                      borderRadius: "20px",
                      fontSize: "11px",
                      color: "#DDDDDD",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "30px 10%",
          borderTop: "1px solid #333333",
          color: "#999999",
          fontSize: "12px",
        }}
      >
        © 2026 Personal Portfolio
      </footer>
    </main>
  );
}
