import Image from "next/image";

import { imageHomeData, keterangan } from "@/app/data/berandaData";

const Statistic: React.FC = () => {
  return (
    <section className="flex justify-around flex-col md:flex-row p-4 md:p-0 items-center md:w-2/3 w-4/5 mt-36">
      <div className="columns-2 gap-3 max-w-md">
        {imageHomeData.map((img, i) => (
          <div key={i} className="mb-2 rounded overflow-hidden">
            <Image
              src={img.link}
              alt={img.data}
              width={300}
              height={Math.floor(Math.random() * 100 + 150)}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col space-y-12 w-full md:w-1/2">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold mb-4">KENAPA HARUS WEBSITE GYM?</h2>
          <p className="text-lg max-w-2xl mx-auto md:mx-0 text-[#909090]">
            Fasilitas modern, pelatih profesional, dan program pelatihan personal – semua dalam satu tempat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {keterangan.map((ket, index) => (
            <div className="text-center border-[#909090] border p-2 md:p-4 rounded-lg" key={index}>
              <h3 className="md:text-2xl text-4xl font-bold text-primary">{ket.jumlah}</h3>
              <p className="text-sm text-[#909090]">{ket.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistic;
