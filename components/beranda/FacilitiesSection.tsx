import Image from "next/image";
import SLIDEGROUND from '@/public/assets/unsplash_rbSNsoXk-3A.png'

const FacilitesSection : React.FC = () => {
    return (
    <section className="flex flex-col justify-center text-center gap-y-4 mt-36 items-center w-4/5 md:w-3/5">
        <h2 className="text-3xl font-extrabold px-2">FASILITAS WEBSITE GYM</h2>
        <p className="text-sm text-[#909090]">Salah satu Gym dengan Fasilitas Terlengkap</p>
        <div className="w-full flex justify-between gap-x-4 flex-col md:flex-row border border-red-600 rounded-lg">
            <Image
                width={400}
                height={50}
                src={SLIDEGROUND}
                className="md:hidden block border-t rounded-t-lg border-red-600"
                alt="slide-show-1" 
            />
            <div className="flex gap-y-4 justify-between items-center w-full">
                <div className="text-left w-4/5 p-4 pr-0">
                    <h2 className="text-3xl font-extrabold mb-4">GYM AREA</h2>
                    <p className="text-md text-[#909090] ">
                        Di pusat kebugaran kami, kami menghadirkan peralatan berkualitas tinggi dari Technogym dan Life Fitness, dua brand global yang dikenal akan inovasi dan kenyamanan dalam dunia kebugaran profesional. 
                    </p>
                </div>
            </div>   
            <Image
                width={240}
                height={300}
                src={SLIDEGROUND}
                className="hidden md:block"
                alt="slide-show-1" 
            />         
        </div>
    </section>
    )
}

export default FacilitesSection;