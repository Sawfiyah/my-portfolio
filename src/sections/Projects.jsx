import useWindowSize from "../hooks/useWindowSize";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Pura Skin",
    description:
      "A responsive full-stack skincare e-commerce application built with React and Django, featuring product browsing, dynamic product pages, shopping cart functionality, and a user-friendly interface. Designed with an emphasis on responsive design, usability, and modern web development practices.",
    tags: ["React", "Django", "Python"],
    github: "https://github.com/Sawfiyah",
    live: "https://puraskin.vercel.app",
  },
  {
    title: "AeroFind",
    description:
      "A responsive full-stack flight booking platform for domestic travel, featuring flight search, booking workflows, dynamic flight listings, and a modern user interface. Developed using React for the frontend and Django for the backend with dummy flight data to simulate a real-world booking system",
    tags: ["Python", "Django", "React"],
    github: "https://github.com/Sawfiyah/AeroFind",
    live: "https://fly-aero-find.vercel.app",
  },
  {
    title: "Currently Building",
    description:
      "I'm continuously expanding my portfolio with projects that explore full-stack web development and user-centered design. My current focus is on building scalable applications with React and Django while exploring opportunities to work on more creative and immersive digital experiences.",
    tags: ["Python", "Django", "React"],
    github: "https://github.com/Sawfiyah",
    live: "#",
  },
];

function Projects() {
  const width = useWindowSize();
  const isMobile = width < 768;

  return (
    <section
      id="projects"
      style={{
        padding: isMobile ? "4rem 1.5rem" : "6rem 4rem",
      }}
    >
      {/* Section title */}
      <div style={{ marginBottom: "3rem", textAlign: "center" }}>
        <h2
          style={{
            fontSize: isMobile ? "1.8rem" : "2.2rem",
            fontWeight: "700",
          }}
        >
          My <span style={{ color: "var(--accent-cyan)" }}>Projects</span>
        </h2>
        <div
          style={{
            width: "60px",
            height: "3px",
            backgroundColor: "var(--accent-pink)",
            margin: "0.8rem auto 0",
          }}
        />
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: "1.5rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "12px",
              padding: "1.8rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-cyan)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Title */}
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                color: "var(--text-primary)",
              }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                flex: 1,
              }}
            >
              {project.description}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.75rem",
                    padding: "0.2rem 0.7rem",
                    borderRadius: "20px",
                    backgroundColor: "rgba(255, 45, 120, 0.1)",
                    color: "var(--accent-cyan)",
                    border: "1px solid rgba(255, 45, 120, 0.3)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--text-muted)",
                  fontSize: "0.85rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent-cyan)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <FaGithub size={16} /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--text-muted)",
                  fontSize: "0.85rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent-pink)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
