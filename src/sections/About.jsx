import useWindowSize from "../hooks/useWindowSize";
import profilePic from "../assets/profile.jpg";

function About() {
  const width = useWindowSize();
  const isMobile = width < 768;

  return (
    <section
      id="about"
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
          About <span style={{ color: "var(--accent-cyan)" }}>Me</span>
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

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          gap: "2.5rem",
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border-color)",
          borderRadius: "12px",
          padding: isMobile ? "1.5rem" : "2.5rem",
        }}
      >
        {/* Picture */}
        <div style={{ flexShrink: 0 }}>
          <img
            src={profilePic}
            alt="Sawfiyah Bagudu"
            style={{
              width: isMobile ? "200px" : "300px",
              height: isMobile ? "200px" : "300px",
              borderRadius: "5%",
              objectFit: "cover",
              border: "2px solid var(--accent-pink)",
            }}
          />
        </div>

        {/* Text */}
        <div
          style={{
            color: "var(--text-muted)",
            fontSize: "1rem",
            lineHeight: 1.9,
          }}
        >
          <p style={{ marginBottom: "1.2rem" }}>
            Hi! I'm{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: "600" }}>
              Sawfiyah Bagudu
            </span>
            , a Fullstack Developer with a background in Biochemistry and a
            passion for building things that make sense.
          </p>
          <p style={{ marginBottom: "1.2rem" }}>
            I'm drawn to{" "}
            <span style={{ color: "var(--accent-cyan)" }}>
              Python and logic-heavy problems
            </span>
            . What excites me most about programming is the challenge of
            understanding how systems work and figuring out how to bring ideas
            to life through code.
          </p>
          <p>
            When I'm not coding, I'm usually reading, experimenting with new
            technologies, or exploring different areas of tech that spark my
            curiosity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
