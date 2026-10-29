import useWindowSize from "../hooks/useWindowSize";
import StackingCards, {
  StackingCardItem,
} from "../components/fancy/blocks/stacking-cards";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import aeroFindImage from "../assets/aerofind.png";
import githubImage from "../assets/github.png";
import lawFirmImage from "../assets/lawfirm.png";
import puraSkinImage from "../assets/puraskin.png";

const projects = [
  {
    title: "Pura Skin",
    description:
      "A responsive full-stack skincare e-commerce application built with React and Django, featuring product browsing, dynamic product pages, shopping cart functionality, and a user-friendly interface. Designed with an emphasis on responsive design, usability, and modern web development practices.",
    tags: ["React", "Django", "Python"],
    github: "https://github.com/Sawfiyah",
    live: "https://puraskin.vercel.app",
    image: puraSkinImage,
    imageAlt: "Pura Skin skincare e-commerce homepage",
    imageFit: "cover",
    surface: "linear-gradient(135deg, #fff0f2 0%, #fffaf6 78%)",
    borderColor: "#e7bec8",
    accentColor: "#9b3d59",
  },
  {
    title: "AeroFind",
    description:
      "Built end-to-end with React and Django, AeroFind is a responsive domestic flight booking platform with flight search, booking workflows, dynamic listings, and a modern interface. Dummy flight data simulates a real-world booking experience.",
    tags: ["Python", "Django", "React"],
    github: "https://github.com/Sawfiyah/AeroFind",
    live: "https://fly-aero-find.vercel.app",
    image: aeroFindImage,
    imageAlt: "AeroFind flight search and booking page",
    imageFit: "cover",
    surface: "linear-gradient(135deg, #edf2fb 0%, #fffaf6 78%)",
    borderColor: "#c5d3e8",
    accentColor: "#3d5f8e",
  },
  {
    title: "Law Firm Website",
    description:
      "A professional, responsive website for a law firm, designed to present legal services, establish credibility, and make it easy for potential clients to get in touch.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Sawfiyah",
    live: "https://www.bhbaguduandco.ng/",
    image: lawFirmImage,
    imageAlt: "B H Bagudu & Co. law firm website",
    imageFit: "cover",
    surface: "linear-gradient(135deg, #f8f0e2 0%, #fffaf6 78%)",
    borderColor: "#ddc7a6",
    accentColor: "#795b32",
  },
  {
    title: "Currently Building",
    description:
      "I'm continuously expanding my portfolio with projects that explore full-stack web development and user-centered design. My current focus is on building scalable applications with React and Django while exploring opportunities to work on more creative and immersive digital experiences.",
    tags: ["Python", "Django", "React", "TypeScript", "svelte"],
    github: "https://github.com/Sawfiyah",
    live: "https://github.com/Sawfiyah",
    image: githubImage,
    imageAlt: "Sawfiyah's GitHub profile",
    imageFit: "cover",
    surface: "linear-gradient(135deg, #edf5f0 0%, #fffaf6 78%)",
    borderColor: "#c2d8ca",
    accentColor: "#426f58",
  },
];

function Projects() {
  const width = useWindowSize();
  const isMobile = width < 768;
  const featuredProjects = [projects[1], projects[0], projects[2], projects[3]];

  return (
    <section
      id="projects"
      style={{
        padding: isMobile ? "4rem 1.5rem" : "6rem 4rem",
      }}
    >
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

      <StackingCards
        totalCards={featuredProjects.length}
        scaleMultiplier={0.025}
        className="relative mx-auto flex max-w-275 flex-col"
      >
        {featuredProjects.map((project, index) => (
          <StackingCardItem
            key={project.title}
            index={index}
            topPosition={isMobile ? `${4 + index * 1.5}%` : undefined}
            style={{
              height: isMobile ? "min(520px, 72svh)" : "min(540px, 76svh)",
              minHeight: isMobile ? "480px" : "500px",
            }}
          >
            <article
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                height: "100%",
                overflow: "hidden",
                border: `1px solid ${project.borderColor}`,
                borderRadius: "16px",
                background: project.surface,
                boxShadow: "0 18px 48px rgba(0, 0, 0, 0.35)",
              }}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  style={{
                    display: "block",
                    width: isMobile ? "100%" : "45%",
                    height: isMobile ? "34%" : "100%",
                    flexShrink: 0,
                    objectFit: project.imageFit,
                    objectPosition: "top",
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                    borderBottom: isMobile
                      ? `1px solid ${project.borderColor}`
                      : "none",
                    borderRight: isMobile
                      ? "none"
                      : `1px solid ${project.borderColor}`,
                  }}
                />
              ) : (
                <div
                  aria-hidden="true"
                  style={{
                    display: "flex",
                    width: isMobile ? "100%" : "45%",
                    height: isMobile ? "34%" : "100%",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(217, 117, 147, 0.32), transparent 55%), var(--bg-secondary)",
                    borderBottom: isMobile
                      ? "1px solid var(--border-color)"
                      : "none",
                    borderRight: isMobile
                      ? "none"
                      : "1px solid var(--border-color)",
                    color: "var(--accent-cyan)",
                    fontSize: "0.8rem",
                    fontWeight: "700",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  In progress
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  minWidth: 0,
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: isMobile ? "0.75rem" : "1.2rem",
                  padding: isMobile ? "1.25rem" : "2.25rem",
                }}
              >
                <h3
                  style={{
                    color: "var(--text-primary)",
                    fontSize: isMobile ? "1.15rem" : "1.5rem",
                    fontWeight: "700",
                    lineHeight: 1.25,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: isMobile ? "0.82rem" : "0.95rem",
                    lineHeight: 1.65,
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        border: `1px solid color-mix(in srgb, ${project.accentColor} 36%, transparent)`,
                        borderRadius: "20px",
                        backgroundColor: `color-mix(in srgb, ${project.accentColor} 12%, transparent)`,
                        color: project.accentColor,
                        fontSize: "0.75rem",
                        padding: "0.2rem 0.7rem",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
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
                    }}
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
                    }}
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          </StackingCardItem>
        ))}
      </StackingCards>
    </section>
  );
}

export default Projects;
