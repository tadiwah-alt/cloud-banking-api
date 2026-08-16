import pyramids from "../assets/pyramids.jpg";
import tunisia from "../assets/tunisia.jpg";
import lakeRetba from "../assets/lake-retba.jpg";
import kilimanjaro from "../assets/kilimanjaro.jpg";

const reserves = [
  { image: pyramids, label: "Cairo", region: "North" },
  { image: tunisia, label: "El Djem", region: "North" },
  { image: lakeRetba, label: "Lac Rose", region: "West" },
  { image: kilimanjaro, label: "Kilimanjaro", region: "East" },
];

export default function ReservesGallery() {
  return (
    <section className="mb-10">
      <h2 className="font-display text-xl text-silver-light mb-4">
        Reserves across the continent
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {reserves.map((r) => (
          <div
            key={r.label}
            className="relative h-24 sm:h-32 rounded-lg overflow-hidden border border-gold/20 bg-cover bg-center"
            style={{ backgroundImage: `url(${r.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-mblack via-mblack/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 sm:px-3 sm:py-2">
              <p className="text-[10px] sm:text-xs text-gold-light tracking-widest">
                {r.region.toUpperCase()}
              </p>
              <p className="text-xs sm:text-sm text-silver-light font-body truncate">
                {r.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}