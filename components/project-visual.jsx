export function ProjectVisual({ variant = 0, compact = false }) {
  const palettes = [
    "from-[#efe7d9] via-[#ddd0bc] to-[#cbbca2]",
    "from-[#d8dedf] via-[#bec8ca] to-[#9eadb1]",
    "from-[#d9d3eb] via-[#b8b3dc] to-[#8f98c8]"
  ];

  const background = palettes[variant % palettes.length];

  return (
    <div
      className={`relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br ${background} ${
        compact ? "aspect-[4/3]" : "aspect-[5/4]"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.55),transparent_0_35%),radial-gradient(circle_at_80%_75%,rgba(24,24,24,0.08),transparent_0_30%)]" />
      <div className="absolute bottom-[18%] left-[14%] h-[42%] w-[32%] rounded-[1.5rem] bg-white/85 shadow-[0_18px_40px_rgba(24,24,24,0.08)]" />
      <div className="absolute bottom-[18%] left-[38%] h-[28%] w-[20%] rounded-full bg-white/72 shadow-[0_18px_40px_rgba(24,24,24,0.08)]" />
      <div className="absolute right-[15%] top-[22%] h-[34%] w-[24%] rounded-[1.5rem] bg-black/[0.08]" />
      <div className="absolute bottom-[23%] right-[17%] h-[20%] w-[20%] rounded-full border border-white/70 bg-white/35" />
    </div>
  );
}
