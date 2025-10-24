import Image from "next/image";

import { imageClasses } from "@/app/data/berandaData";


const ClassSection : React.FC = () => {
    return (
    <section className="flex flex-col w-4/5 md:w-3/5 justify-center text-center gap-y-4 mt-36 items-center">
        <h2 className="text-3xl font-extrabold">IKUTI VARIASI KELAS SEPUASNYA</h2>
        <p className="text-sm text-[#909090] px-2 md:px-0">Dibimbing oleh Instruktur Berpengalaman dan Bersetifikasi Internasional</p>
        <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-4 text-small font-bold px-1 md:px-0 pb-8 border-b border-b-red-500">
            <div className="h-fit">Mind & Body Class</div>
            <div className="h-fit">Cardio Class</div>
            <div className="h-fit">Strength Class</div>
            <div className="h-fit">Dance Class</div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-2 w-full">
           {imageClasses.map((image, index) => (
                <Image 
                    key={index}
                    height={300}
                    width={200}
                    
                    src={image.link}
                    alt={image.data}
                />
           ))}
        </div>
        <button className="mt-6 btn-red md:text-start px-6 py-3 font-semibold">
            Gabung Sekarang
        </button>
    </section>
    )
}

export default ClassSection;