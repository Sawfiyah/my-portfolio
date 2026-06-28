import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Minus, Square, X } from "lucide-react";
import useWindowSize from "../hooks/useWindowSize";

const codeContent = `const developer = {
  name: 'Sawfiyah Bagudu',
  skills: [
    'HTML', 'CSS', 'JavaScript',
    'React', 'Python', 'Django'
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 1
    );
  }
};`;

function Hero() {
  const width = useWindowSize();
  const isMobile = width < 768;

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        padding: isMobile ? "6rem 1.5rem 3rem" : "0 4rem",
        paddingTop: isMobile ? "6rem" : "80px",
        gap: "3rem",
      }}
    >
      {/* Left side */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            color: "var(--accent-cyan)",
            fontSize: "1rem",
            marginBottom: "0.5rem",
            letterSpacing: "0.1em",
          }}
        >
          Hello, World! 👋
        </p>

        <h1
          style={{
            fontSize: isMobile ? "2rem" : "3rem",
            fontWeight: "800",
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}
        >
          I'm{" "}
          <span style={{ color: "var(--accent-pink)" }}>Sawfiyah Bagudu</span>
        </h1>

        <h2
          style={{
            fontSize: isMobile ? "1.3rem" : "1.8rem",
            fontWeight: "600",
            color: "var(--accent-cyan)",
            marginBottom: "1.5rem",
          }}
        >
          A Fullstack Developer
        </h2>

        <p
          style={{
            color: "var(--text-muted)",
            maxWidth: "480px",
            fontSize: "1rem",
            marginBottom: "2rem",
          }}
        >
          Analytical by nature, curious by choice. I build fullstack web
          applications and enjoy the logic behind every line of code.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              padding: "0.8rem 1.8rem",
              border: "2px solid var(--accent-cyan)",
              color: "var(--accent-cyan)",
              borderRadius: "8px",
              fontWeight: "600",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent-cyan)";
              e.currentTarget.style.color = "var(--bg-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--accent-cyan)";
            }}
          >
            Contact Me
          </a>

          <a
            href="https://github.com/sawfiyah"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "0.8rem 1.8rem",
              backgroundColor: "var(--accent-pink)",
              color: "white",
              borderRadius: "8px",
              fontWeight: "600",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Right side - code block */}
      <div
        style={{
          flex: 1,
          width: isMobile ? "100%" : "auto",
          backgroundColor: "var(--bg-card)",
          borderRadius: "12px",
          border: "1px solid var(--border-color)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0.5rem 0.8rem",
            borderBottom: "1px solid var(--border-color)",
            backgroundColor: "var(--bg-primary)",
          }}
        >
          <div>User\developer\sawfiyah</div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Minus
              size={14}
              color="var(--text-muted)"
              style={{ cursor: "pointer" }}
            />
            <Square
              size={10}
              color="var(--text-muted)"
              style={{ cursor: "pointer" }}
            />
            <X
              size={14}
              color="var(--text-muted)"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "1.5rem",
            fontSize: isMobile ? "0.75rem" : "0.85rem",
            backgroundColor: "#0c0306",
            lineHeight: 1.7,
          }}
        >
          {codeContent}
        </SyntaxHighlighter>
      </div>
    </section>
  );
}

export default Hero;
