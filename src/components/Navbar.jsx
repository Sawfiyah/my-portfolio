import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

const navLinks = ["About", "Skills", "Education", "Projects", "Contact"];

function Navbar() {
  const width = useWindowSize();
  const isMobile = width < 768;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.2rem 2rem",
        backgroundColor: "var(--bg-primary)",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: "1.4rem",
          fontWeight: "700",
          color: "var(--accent-pink)",
        }}
      >
        &lt;Sawfiyah /&gt;
      </div>

      {/* Desktop links */}
      {!isMobile && (
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "var(--accent-cyan)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "var(--text-muted)")
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Hamburger button */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "var(--accent-cyan)",
              transition: "transform 0.3s",
              transform: menuOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "var(--accent-cyan)",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "var(--accent-cyan)",
              transition: "transform 0.3s",
              transform: menuOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
            }}
          />
        </button>
      )}

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            backgroundColor: "var(--bg-secondary)",
            borderBottom: "1px solid var(--border-color)",
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            padding: "1rem 0",
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "var(--accent-cyan)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "var(--text-muted)")
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
