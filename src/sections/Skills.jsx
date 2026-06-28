import useWindowSize from "../hooks/useWindowSize";
import { FaHtml5, FaCss3Alt, FaPython, FaReact } from "react-icons/fa";
import { SiJavascript, SiDjango } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} color="#e34f26" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} color="#1572b6" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} color="#f7df1e" /> },
  { name: "React", icon: <FaReact size={40} color="#61dafb" /> },
  { name: "Python", icon: <FaPython size={40} color="#3776ab" /> },
  { name: "Django", icon: <SiDjango size={40} color="#092e20" /> },
];

function Skills() {
  const width = useWindowSize();
  const isMobile = width < 768;

  return (
    <section
      id="skills"
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
          My <span style={{ color: "var(--accent-cyan)" }}>Skills</span>
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
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
          gap: "1.5rem",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "12px",
              padding: "2rem 1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.8rem",
              transition: "border-color 0.2s, transform 0.2s",
              cursor: "default",
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
            {skill.icon}
            <span
              style={{
                color: "var(--text-primary)",
                fontWeight: "600",
                fontSize: "0.95rem",
              }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
