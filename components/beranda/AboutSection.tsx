import { imageHomeData } from "@/app/data/berandaData";

import Image from "next/image";

const AboutSection : React.FC = () => {
    return (
     <section className="flex justify-around flex-col md:flex-row p-4 md:p-0 w-4/5 md:w-2/3 mt-36">
        <div className="flex flex-col space-y-12 w-full md:w-1/2 items-center md:items-start">
          <h2 className="text-3xl font-extrabold mb-4 text-center md:text-left">KENAPA MEMILIH KAMI?</h2>
          <p className="text-lg max-w-2xl text-center md:text-left mx-auto md:mx-0 text-[#909090]">
           Semua trainer tersertifikasi internasional dengan pendekatan berbasis data dan evaluasi progresif juga program personalisasi dengan coaching mental & lifestyle.
          </p>
          <button className="mt-6 btn-red md:text-start px-6 py-3 font-semibold w-fit">
            Pesonal Trainer
        </button>
        </div>
        <div className="columns-2 gap-3 max-w-md hidden md:block">
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
         
    </section>
    )
}

export default AboutSection;