import { useState } from "react";

/**
 * Click the text to cycle through greetings.
 * Accepts either strings or objects: { text, lang }.
 * Shows the language as a native tooltip via the `title` attribute.
 */
export default function ClickChange({ arr = [] }) {
  const [i, setI] = useState(0);
  const cur = arr[i] || {};

  const text = typeof cur === "string" ? cur : cur.text;
  const lang = typeof cur === "string" ? undefined : cur.lang;

  const next = () => {
    if (!arr.length) return;
    setI((prev) => (prev + 1) % arr.length);
  };

  return (
    <span
      onClick={next}
      title={lang}
      aria-label={lang ? `${text} — ${lang}` : text}
      className="cursor-help select-none"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && next()}
    >
      {text}
    </span>
  );
}