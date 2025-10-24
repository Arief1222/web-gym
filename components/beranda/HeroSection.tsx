const HeroSection : React.FC = () => {
    return (
        <section className="flex flex-col items-center h-screen justify-center text-center px-4 py-24 bg-[url('/assets/bg-beranda.png')] bg-cover bg-center bg-no-repeat w-full">
            <h1 className="text-4xl md:text-5xl font-extrabold md:w-[42rem] md:text-start leading-tight">
            “TRANSFORM YOUR BODY, <br /> EMPOWER YOUR LIFE”
            </h1>
            <p className="mt-4 text-lg md:text-start md:w-[42rem]">
            Bergabunglah dengan komunitas 
            kebugaran yang berdedikasi untuk membangun kekuatan, 
            disiplin, dan gaya hidup sehat.
            </p>
            <div className="md:w-[42rem] flex justify-center md:justify-start">
            <button className="mt-6 btn-red px-6 py-3 font-semibold">
                Gabung Sekarang
            </button>
            </div>
      </section>
    )
}

export default HeroSection;