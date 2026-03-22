import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [dark, setDark] = useState(true);

  const [stats, setStats] = useState({ words: 0, chars: 0 });
  const [calculated, setCalculated] = useState(false);

  const AD_LINK =
    "https://www.profitablecpmratenetwork.com/f6nc22u71i?key=c7a98c4c08489b1332f4bc7a150fd140"; // 🔥 REPLACE THIS

  const generateStyles = (input) => {
    if (!input) return [];

    return [
      input,
      input.toUpperCase(),
      input.toLowerCase(),
      input.split("").join(" "),
      input.replace(/a/gi, "@").replace(/e/gi, "3"),
      "🔥 " + input + " 🔥",
      "✨ " + input + " ✨",
      "👉 " + input,
      "💎 " + input.split("").reverse().join(""),
      "⚡ " + input + " ⚡",
    ];
  };

  const styles = generateStyles(text);

  // ✅ Improved ad handler
  const showAdThen = (callback) => {
    const adWindow = window.open(AD_LINK, "_blank");

    // If blocked
    if (!adWindow) {
      alert("⚠️ Please allow popups to continue.");
      return;
    }

    // Delay reward
    setTimeout(() => {
      callback();
    }, 5000);
  };

  const handleUnlock = () => {
    showAdThen(() => {
      setUnlocked(true);
      alert("Unlocked! 🎉");
    });
  };

  const handleCountWords = () => {
    showAdThen(() => {
      const words = text.trim()
        ? text.trim().split(/\s+/).length
        : 0;

      const chars = text.length;

      setStats({ words, chars });
      setCalculated(true);
    });
  };

  const copyText = (value) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: dark ? "#0f172a" : "#f1f5f9",
        color: dark ? "#fff" : "#000",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>🔥 Daily Tools Hub</h1>
        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </div>

      <div
        style={{
          background: dark ? "#1e293b" : "#fff",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "20px",
        }}
      >
        <textarea
          placeholder="Type your text..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setCalculated(false);
          }}
          style={{
            width: "100%",
            height: "100px",
            borderRadius: "8px",
            padding: "10px",
          }}
        />

        <button
          onClick={handleCountWords}
          style={{
            marginTop: "10px",
            padding: "8px 12px",
            borderRadius: "8px",
            background: "#3b82f6",
            color: "#fff",
          }}
        >
          📊 Count Words (Watch Ad)
        </button>

        {calculated && (
          <div style={{ marginTop: "10px" }}>
            <p>Words: {stats.words}</p>
            <p>Characters: {stats.chars}</p>
          </div>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>✨ Styles</h3>

        {styles
          .slice(0, unlocked ? styles.length : 3)
          .map((style, index) => (
            <div
              key={index}
              style={{
                background: dark ? "#1e293b" : "#fff",
                padding: "12px",
                margin: "8px 0",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{style}</span>
              <button onClick={() => copyText(style)}>📋 Copy</button>
            </div>
          ))}
      </div>

      {!unlocked && text && (
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={handleUnlock}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              background: "#22c55e",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            🔒 Unlock All Styles (Watch Ad)
          </button>
        </div>
      )}
    </div>
  );
}