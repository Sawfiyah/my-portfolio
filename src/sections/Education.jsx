import useWindowSize from "../hooks/useWindowSize";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "BSc Biochemistry & Molecular Biology",
    school: "Usman DanFodiyo University Sokoto",
    year: "2021 - 2025",
    description:
      "Developed a strong analytical and scientific mindset that directly shapes how I approach problem-solving in software development.",
  },
  {
    degree: "Fullstack Web Development",
    school: "Torbita Computer Training School",
    year: "2026",
    description:
      "Learned frontend and backend development covering HTML, CSS, JavaScript, React, Python and Django. Built real-world projects across the full stack.",
  },
];

function Education() {
  const width = useWindowSize();
  const isMobile = width < 768;

  return (
    <section
      id="education"
      style={{
        padding: isMobile ? "4rem 1.5rem" : "6rem 4rem",
        maxWidth: "900px",
        margin: "0 auto",
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
          My <span style={{ color: "var(--accent-cyan)" }}>Education</span>
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

      {/* Timeline */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {education.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "12px",
              padding: isMobile ? "1.5rem" : "2rem",
              display: "flex",
              gap: "1.5rem",
              alignItems: "flex-start",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent-cyan)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border-color)")
            }
          >
            {/* Icon */}
            <div
              style={{
                flexShrink: 0,
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <GraduationCap size={22} color="var(--accent-cyan)" />
            </div>

            {/* Text */}
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "0.4rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    color: "var(--text-primary)",
                  }}
                >
                  {item.degree}
                </h3>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--accent-pink)",
                    backgroundColor: "rgba(255, 45, 120, 0.1)",
                    padding: "0.2rem 0.7rem",
                    borderRadius: "20px",
                    border: "1px solid rgba(255, 45, 120, 0.3)",
                  }}
                >
                  {item.year}
                </span>
              </div>
              <p
                style={{
                  color: "var(--accent-cyan)",
                  fontSize: "0.9rem",
                  marginBottom: "0.6rem",
                }}
              >
                {item.school}
              </p>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
