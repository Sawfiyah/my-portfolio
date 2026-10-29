import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import useWindowSize from "../hooks/useWindowSize";
import MediaBetweenText from "../components/fancy/blocks/media-between-text";
import Typewriter from "../components/fancy/text/typewriter";
import sawfyImage from "../assets/sawfy.jpg";

const codeSnippets = {
  about: `const developer = {
  name: "Sawfiyah Bagudu",
  role: "Junior Full-Stack Developer",
  curiousByChoice: true,
  favoritePart: "solving problems",
};`,
  stack: `const toolkit = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Svelte", "TypeScript", "Tailwind CSS"],
  backend: ["Python", "Django", "FastAPI", "Flask"],
  currentlyLearning: "always",
};`,
};

function Hero() {
  const width = useWindowSize();
  const isMobile = width < 768;
  const [activePanel, setActivePanel] = useState("about");

  return (
    <section
      id="home"
      className="hero-section"
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
      <div className="hero-copy">
        <p
          style={{
            color: "var(--accent-cyan)",
            fontSize: isMobile ? "1.15rem" : "1.3rem",
            marginBottom: "0.5rem",
            letterSpacing: "0.1em",
          }}
        >
          <Typewriter
            as="span"
            text={[
              "Hello",
              "Sannu",
              "Bonjour",
              "\u2067مرحبا\u2069",
              "こんにちは",
            ]}
            speed={100}
            deleteSpeed={45}
            waitTime={1200}
            initialDelay={250}
            showCursor={false}
            className="text-[var(--accent-cyan)]"
          />{" "}
          🙋‍♀️
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
          <MediaBetweenText
            firstText="Sawfiyah"
            secondText="Bagudu"
            mediaUrl={sawfyImage}
            mediaType="image"
            alt="Sawfiyah"
            as="span"
            triggerType="hover"
            className="inline-flex items-center gap-[0.12em] align-middle"
            leftTextClassName="text-[var(--accent-cyan)]"
            rightTextClassName="text-[var(--accent-cyan)]"
            mediaContainerClassName="mx-[0.16em] inline-flex h-[1.5em] aspect-square shrink-0 overflow-hidden"
          />
        </h1>

        <h2
          style={{
            fontSize: isMobile ? "1.3rem" : "1.8rem",
            fontWeight: "600",
            color: "var(--accent-cyan)",
            marginBottom: "1.5rem",
          }}
        >
          Junior Full-Stack Developer
        </h2>

        <p
          style={{
            color: "var(--text-muted)",
            maxWidth: "480px",
            fontSize: "1rem",
            marginBottom: "2rem",
          }}
        >
          I love bringing ideas to life with software, untangling problems,
          following my curiosity, and seeing what becomes possible.
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
            onMouseEnter={(event) => {
              event.currentTarget.style.backgroundColor = "var(--accent-cyan)";
              event.currentTarget.style.color = "var(--bg-primary)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.backgroundColor = "transparent";
              event.currentTarget.style.color = "var(--accent-cyan)";
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
              color: "var(--text-primary)",
              borderRadius: "8px",
              fontWeight: "600",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(event) =>
              (event.currentTarget.style.opacity = "0.85")
            }
            onMouseLeave={(event) => (event.currentTarget.style.opacity = "1")}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-portrait-frame">
          <img
            src={sawfyImage}
            alt="Sawfiyah smiling outdoors"
            className="hero-portrait"
          />
          <span className="hero-portrait-sticker">curious by choice ✳</span>
          <span className="hero-portrait-caption">code / crochet / journal</span>
        </div>
        <div
          className="hero-code-window"
          style={{ width: "100%", maxWidth: "460px" }}
        >
          <div className="hero-window-bar">
            <span className="hero-window-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="hero-window-path">sawfiyah / portfolio</span>
            <span className="hero-window-spacer" aria-hidden="true" />
          </div>

          <div className="hero-tabs" aria-label="Explore the code window">
            <button
              type="button"
              className={`hero-tab${activePanel === "about" ? " is-active" : ""}`}
              aria-pressed={activePanel === "about"}
              onClick={() => setActivePanel("about")}
            >
              about.js
            </button>
            <button
              type="button"
              className={`hero-tab${activePanel === "stack" ? " is-active" : ""}`}
              aria-pressed={activePanel === "stack"}
              onClick={() => setActivePanel("stack")}
            >
              stack.js
            </button>
          </div>

          <SyntaxHighlighter
            key={activePanel}
            language="javascript"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: "0.85rem",
              fontSize: isMobile ? "0.65rem" : "0.72rem",
              backgroundColor: "#21171b",
              lineHeight: 1.5,
              minHeight: "150px",
            }}
          >
            {codeSnippets[activePanel]}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
}

export default Hero;
