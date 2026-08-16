export default function LandmarkBanner({ image, eyebrow, title, Icon }) {
  return (
    <div
      className="relative overflow-hidden rounded-lg border border-gold/20 mb-10 h-48 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-mblack via-mblack/80 to-transparent" />
      <div className="relative h-full flex items-center gap-4 px-8">
        {Icon && <Icon size={44} className="text-gold shrink-0 drop-shadow-gold" />}
        <div>
          <p className="text-sm text-silver-light tracking-wide mb-1">
            {eyebrow}
          </p>
          <h1 className="font-display text-3xl text-silver-light drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}