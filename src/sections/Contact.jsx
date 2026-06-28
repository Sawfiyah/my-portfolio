import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

function Contact() {
  const width = useWindowSize();
  const isMobile = width < 768;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // We'll hook this up to a real service later
    setSent(true);
  };

  return (
    <section
      id="contact"
      style={{
        padding: isMobile ? "4rem 1.5rem" : "6rem 4rem",
        maxWidth: "800px",
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
          Get In <span style={{ color: "var(--accent-cyan)" }}>Touch</span>
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
            color: "var(--text-muted)",
            marginTop: "1rem",
            fontSize: "0.95rem",
          }}
        >
          I'm open to opportunities, collaborations or just a good conversation.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "2rem",
        }}
      >
        {/* Left - social links */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <a
            href="mailto:sawfiyabh@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "12px",
              padding: "1.2rem",
              color: "var(--text-muted)",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent-cyan)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border-color)")
            }
          >
            <Mail size={22} color="var(--accent-cyan)" />
            <span>sawfiyabh@gmail.com</span>
          </a>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "12px",
              padding: "1.2rem",
              color: "var(--text-muted)",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent-cyan)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border-color)")
            }
          >
            <Phone size={22} color="var(--accent-cyan)" />
            <span>+234 &#40;0&#41;70 610 70007</span>
          </div>

          <a
            href="https://github.com/sawfiyah"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "12px",
              padding: "1.2rem",
              color: "var(--text-muted)",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent-cyan)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border-color)")
            }
          >
            <FaGithub size={22} color="var(--accent-cyan)" />
            <span>github.com/sawfiyah</span>
          </a>

          <a
            href="https://ng.linkedin.com/in/sawfiyah-bagudu-06a714417"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "12px",
              padding: "1.2rem",
              color: "var(--text-muted)",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent-cyan)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border-color)")
            }
          >
            <FaLinkedin size={22} color="var(--accent-cyan)" />
            <span>Sawfiyah Bagudu</span>
          </a>
        </div>

        {/* Right - contact form */}
        <div
          style={{
            flex: 1,
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-color)",
            borderRadius: "12px",
            padding: "1.8rem",
          }}
        >
          {sent ? (
            <div
              style={{
                textAlign: "center",
                color: "var(--accent-cyan)",
                padding: "2rem 0",
              }}
            >
              <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                Message sent! ✓
              </p>
              <p
                style={{
                  color: "var(--text-muted)",
                  marginTop: "0.5rem",
                  fontSize: "0.9rem",
                }}
              >
                I'll get back to you soon.
              </p>
            </div>
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "8px",
                  padding: "0.8rem 1rem",
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  outline: "none",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--accent-cyan)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--border-color)")
                }
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "8px",
                  padding: "0.8rem 1rem",
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  outline: "none",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--accent-cyan)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--border-color)")
                }
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "8px",
                  padding: "0.8rem 1rem",
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--accent-cyan)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--border-color)")
                }
              />
              <button
                onClick={handleSubmit}
                style={{
                  backgroundColor: "var(--accent-cyan)",
                  color: "var(--bg-primary)",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.9rem",
                  fontWeight: "700",
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Send Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
