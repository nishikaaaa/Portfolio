export default function ItalicText({ text }) {
  if (!text) return null;
  return text.split(/\*([^*]+)\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-serif italic text-white/90">{part}</span>
    ) : (
      part
    )
  );
}
