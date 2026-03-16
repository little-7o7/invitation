import React, { useState } from "react";
import { Translations, Language } from "./content";

interface RSVPProps {
  t: Translations;
  lang: Language;
  rawName?: string;
  formattedName: string | null;
  pathname: string;
}

export default function RSVP({ t, formattedName, pathname }: RSVPProps) {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [shakeField, setShakeField] = useState<"name" | "attending" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!name.trim()) {
      setShakeField("name");
      setTimeout(() => setShakeField(null), 500);
      return;
    }
    if (!attending) {
      setShakeField("attending");
      setTimeout(() => setShakeField(null), 500);
      return;
    }

    setStatus("sending");

    const botToken = "8539218206:AAGvYIPYnGs5pYXFcvEdxEnoVii7WGg02EA";
    const chatId = "2121067090";

    // Format:
    // pathname (e.g. /no/ru/amir_aka)
    // Formatted Name (e.g. Amir aka) or translated "guest"
    // Name from input
    // yes/no
    // reason (if no)

    const urlName = formattedName || t.guest;
    const message = `${pathname}\n${urlName}\n${name}\n${attending}${attending === "no" ? `\n${reason}` : ""}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setReason("");
        setAttending(null);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending RSVP:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="sec rev in">
        <p className="body-txt">{t.rsvpSuccess}</p>
      </div>
    );
  }

  return (
    <div className="sec rev rsvp-section" style={{ position: "relative", paddingBottom: "40px" }}>
      <p className="eyebrow">{t.rsvpTitle}</p>
      
      <form onSubmit={handleSubmit} noValidate style={{ width: "100%", maxWidth: "400px", marginTop: "20px" }}>
        <div className={shakeField === "name" ? "shake" : ""} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder={t.rsvpNameLabel}
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              background: "transparent",
              border: "none",
              borderBottom: shakeField === "name" ? "1px solid #ff4d4d" : "1px solid var(--ln)",
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "18px",
              textAlign: "center",
              color: "var(--text)",
              outline: "none",
              transition: "border-color 0.3s ease"
            }}
          />
        </div>

        <div className={shakeField === "attending" ? "shake" : ""} style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "20px", 
          marginBottom: "20px",
          padding: "10px",
          borderRadius: "8px",
          border: shakeField === "attending" ? "1px solid rgba(255, 77, 77, 0.3)" : "1px solid transparent",
          transition: "border-color 0.3s ease"
        }}>
          <label style={{ display: "flex", alignItems: "center", cursor: "pointer", gap: "8px" }}>
            <input
              type="radio"
              name="attending"
              value="yes"
              checked={attending === "yes"}
              onChange={() => setAttending("yes")}
              style={{ accentColor: "var(--gold)" }}
            />
            <span style={{ 
              fontFamily: "var(--font-cormorant), serif", 
              fontSize: "18px", 
              color: shakeField === "attending" ? "#ff4d4d" : "var(--text2)" 
            }}>
              {t.rsvpYes}
            </span>
          </label>
          <label style={{ display: "flex", alignItems: "center", cursor: "pointer", gap: "8px" }}>
            <input
              type="radio"
              name="attending"
              value="no"
              checked={attending === "no"}
              onChange={() => setAttending("no")}
              style={{ accentColor: "var(--gold)" }}
            />
            <span style={{ 
              fontFamily: "var(--font-cormorant), serif", 
              fontSize: "18px", 
              color: shakeField === "attending" ? "#ff4d4d" : "var(--text2)" 
            }}>
              {t.rsvpNo}
            </span>
          </label>
        </div>

        {attending === "no" && (
          <div className="rev-s in" style={{ marginBottom: "20px" }}>
            <textarea
              placeholder={t.rsvpReasonLabel}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                background: "transparent",
                border: "1px solid var(--ln)",
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "16px",
                minHeight: "80px",
                color: "var(--text)",
                outline: "none",
                resize: "none"
              }}
            />
          </div>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          style={{
            padding: "12px 40px",
            background: "transparent",
            border: "1px solid var(--gold)",
            color: "var(--gold2)",
            fontFamily: "var(--font-montserrat), sans-serif",
            fontSize: "12px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.3s ease",
            opacity: status === "sending" ? 0.5 : 1
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg2)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          {status === "sending" ? "..." : t.rsvpSubmit}
        </button>

        {status === "error" && (
          <p style={{ marginTop: "10px", color: "red", fontSize: "14px", fontFamily: "var(--font-cormorant), serif" }}>
            {t.rsvpError}
          </p>
        )}
      </form>

      <div className="diag-overlay" aria-hidden="true" style={{ opacity: 0.03 }}>
        <svg width="100%" height="100%" viewBox="0 0 400 380" preserveAspectRatio="none" fill="none">
          <line x1="0" y1="0" x2="400" y2="380" stroke="#c4a882" strokeWidth=".4" />
          <line x1="400" y1="0" x2="0" y2="380" stroke="#c4a882" strokeWidth=".4" />
        </svg>
      </div>
    </div>
  );
}
