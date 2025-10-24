interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  bonuses: string[];
  featureName: string;
}

export default function PriceCard({
  title,
  price,
  description,
  features,
  bonuses,
  featureName,
}: PriceCardProps) {
  return (
    <div className="flex flex-col items-center justify-between border-1 border-red-700 w-[302px] py-12 px-8 gap-8 rounded-2xl h-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col text-center gap-1">
          <h2 className="text-xl font-outfit font-normal">{title}</h2>
          <h1 className="text-7xl font-anton">{price}</h1>
          <p className="font-outfit text-text-grey">{description}</p>
        </div>

        <div className="w-full font-outfit text-text-grey">
          <span className="font-bold">{featureName}</span>
          <ul className="list-disc ml-8">
            {features.map((item, i) => (
              <li className="leading-tight" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full font-outfit text-text-grey">
          <span className="font-bold">Bonus</span>
          <ul className="list-disc ml-8">
            {bonuses.map((item, i) => (
              <li className="leading-tight" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="btn-red">Gabung Sekarang</button>
    </div>
  );
}
