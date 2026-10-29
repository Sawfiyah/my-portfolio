import useWindowSize from "../hooks/useWindowSize";
import { FaHtml5, FaCss3Alt, FaPython, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiDjango,
  SiSvelte,
  SiFastapi,
  SiFlask,
} from "react-icons/si";
import Gravity, { MatterBody } from "../components/fancy/physics/gravity";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={28} color="#e34f26" /> },
  { name: "CSS", icon: <FaCss3Alt size={28} color="#1572b6" /> },
  { name: "JavaScript", icon: <SiJavascript size={28} color="#f7df1e" /> },
  { name: "React", icon: <FaReact size={28} color="#61dafb" /> },
  { name: "Python", icon: <FaPython size={28} color="#3776ab" /> },
  { name: "Django", icon: <SiDjango size={28} color="#092e20" /> },
  { name: "FastAPI", icon: <SiFastapi size={28} color="#009688" /> },
  { name: "Flask", icon: <SiFlask size={28} color="#f3d5de" /> },
  { name: "Svelte", icon: <SiSvelte size={28} color="#ff3e00" /> },
];

const skillPositions = [
  { x: "18%", y: "12%" },
  { x: "50%", y: "10%" },
  { x: "82%", y: "12%" },
  { x: "18%", y: "36%" },
  { x: "50%", y: "34%" },
  { x: "82%", y: "36%" },
  { x: "18%", y: "60%" },
  { x: "50%", y: "58%" },
  { x: "82%", y: "60%" },
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
        <p
          style={{
            marginTop: "1rem",
            color: "var(--text-muted)",
            fontSize: "0.85rem",
          }}
        >
          Drag the skill cards to explore
        </p>
      </div>

      <div
        style={{
          position: "relative",
          height: isMobile ? "390px" : "410px",
          maxWidth: "850px",
          margin: "0 auto",
          overflow: "hidden",
          border: "1px solid var(--border-color)",
          borderRadius: "16px",
          background:
            "radial-gradient(ellipse at top, rgba(217, 117, 147, 0.12), transparent 65%), var(--bg-secondary)",
        }}
      >
        <Gravity
          className="relative"
          gravity={{ x: 0, y: 1 }}
          grabCursor
          resetOnResize
          addTopWall
        >
          {skills.map((skill, index) => (
            <MatterBody
              key={skill.name}
              x={skillPositions[index].x}
              y={skillPositions[index].y}
              matterBodyOptions={{
                friction: 0.6,
                restitution: 0.25,
                density: 0.002,
                inertia: Infinity,
              }}
              className="flex items-center justify-center"
              style={{ width: isMobile ? "94px" : "124px" }}
            >
              <div
                style={{
                  width: "100%",
                  minHeight: "76px",
                  padding: "0.8rem 0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.45rem",
                  border: "1px solid var(--border-color)",
                  borderRadius: "12px",
                  backgroundColor: "var(--bg-card)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
                }}
              >
                {skill.icon}
                <span
                  style={{
                    color: "var(--text-primary)",
                    fontWeight: "600",
                    fontSize: "0.85rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {skill.name}
                </span>
              </div>
            </MatterBody>
          ))}
        </Gravity>
      </div>
    </section>
  );
}

export default Skills;
