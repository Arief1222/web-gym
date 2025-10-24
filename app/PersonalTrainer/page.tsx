export default function TrainerPage() {
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/personalTrainer/hero.png"
            alt="Personal Trainer Hero"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 "></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-32 lg:ml-10 max-w-6xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 uppercase tracking-wide">
            TEMUI PARA PELATIH PROFESIONAL KAMI
          </h1>
          <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl opacity-90">
            Kami percaya bahwa transformasi sejati dimulai dari bimbingan yang
            tepat. Itulah mengapa kami menghadirkan personal trainer
            tersertifikasi dan berpengalaman untuk membantumu mencapai versi
            terbaik dirimu.
          </p>
        </div>
      </section>

      <section className="w-full min-h-screen py-16">
        {/* Title and Description */}
        <div className="flex flex-col items-center justify-center mb-16 px-8">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Personal Trainer
          </h1>
          <p className="text-center max-w-4xl text-lg leading-relaxed">
            Kami Melakukan Pendekatan Berbasis Data & Ilmu dengan Evaluasi
            komposisi tubuh dengan teknologi InBody Scan, Tes Mobilitas &
            Flesibilitas, Program Latihan Disesuaikan dengan Gaya Hidup, Usia,
            Riwayat Cidera dan Tujuan Spesifik
          </p>
        </div>

        {/* Trainer Cards */}
        <div className="grid grid-cols-3 gap-12 px-56 ">
          {" "}
          <div className="w-72 h-[470px]  border-red-600 border-2 rounded-lg  shadow-lg">
            <div className="h-80 p-5">
              <img
                src="/assets/personalTrainer/dany.png"
                className="h-full w-full object-cover rounded-lg"
                alt="Noah"
              />
            </div>
            <div className="h-16 gap-6 mt-6 bg-black bg-opacity-75 flex flex-col items-center justify-center">
              <h2 className="text-white text-3xl font-semibold text-center">
                Dany
              </h2>
              <p className="text-center w-52">
                Spesialisasi: Hypertrophy, Powerlifting, Sports Performance
              </p>
            </div>
          </div>
          <div className="w-72 h-[470px]  border-red-600 border-2 rounded-lg  shadow-lg">
            <div className="h-80 p-5">
              <img
                src="\assets\personalTrainer\joe.png"
                className="h-full w-full object-cover rounded-lg"
                alt="Joe"
              />
            </div>
            <div className="h-16 gap-6 mt-6 bg-black bg-opacity-75 flex flex-col items-center justify-center">
              <h2 className="text-white text-3xl font-semibold text-center">
                Joe
              </h2>
              <p className="text-center w-52">
                Spesialisasi: Strength & Powerlifting{" "}
              </p>
            </div>
          </div>
          <div className="w-72 h-[470px]  border-red-600 border-2 rounded-lg  shadow-lg">
            <div className="h-80 p-5">
              <img
                src="/assets/personalTrainer/joy.png"
                className="h-full w-full object-cover rounded-lg"
                alt="Joy"
              />
            </div>
            <div className="h-16 gap-6 mt-6 bg-black bg-opacity-75 flex flex-col items-center justify-center">
              <h2 className="text-white text-3xl font-semibold text-center">
                Joy
              </h2>
              <p className="text-center w-52">
                Spesialisasi: Endurance Training & Nutrition Coaching{" "}
              </p>
            </div>
          </div>
          <div className="w-72 h-[470px]  border-red-600 border-2 rounded-lg  shadow-lg">
            <div className="h-80 p-5">
              <img
                src="/assets/personalTrainer/luca.png"
                className="h-full w-full object-cover rounded-lg"
                alt="luca"
              />
            </div>
            <div className="h-16 gap-6 mt-6 bg-black bg-opacity-75 flex flex-col items-center justify-center">
              <h2 className="text-white text-3xl font-semibold text-center">
                Luca
              </h2>
              <p className="text-center w-52">
                Spesialisasi: Posture Correction & Core Strength{" "}
              </p>
            </div>
          </div>
          <div className="w-72 h-[470px]  border-red-600 border-2 rounded-lg  shadow-lg">
            <div className="h-80 p-5">
              <img
                src="/assets/personalTrainer/noah.png"
                className="h-full w-full object-cover rounded-lg"
                alt="Noah"
              />
            </div>
            <div className="h-16 gap-6 mt-6 bg-black bg-opacity-75 flex flex-col items-center justify-center">
              <h2 className="text-white text-3xl font-semibold text-center">
                Noah
              </h2>
              <p className="text-center w-52">
                Spesialisasi: Hypertrophy, Powerlifting, Sports Performance
              </p>
            </div>
          </div>
          <div className="w-72 h-[470px]  border-red-600 border-2 rounded-lg  shadow-lg">
            <div className="h-80 p-5">
              <img
                src="/assets/personalTrainer/john.png"
                className="h-full w-full object-cover rounded-lg"
                alt="Noah"
              />
            </div>
            <div className="h-16 gap-6 mt-6 bg-black bg-opacity-75 flex flex-col items-center justify-center">
              <h2 className="text-white text-3xl font-semibold text-center">
                John
              </h2>
              <p className="text-center w-52">
                Spesialisasi: Hypertrophy, Powerlifting, Sports Performance
              </p>
            </div>
          </div>
          <div className="w-72 h-[470px]  border-red-600 border-2 rounded-lg  shadow-lg">
            <div className="h-80 p-5">
              <img
                src="/assets/personalTrainer/aisah.png"
                className="h-full w-full object-cover rounded-lg"
                alt="Noah"
              />
            </div>
            <div className="h-16 gap-6 mt-6 bg-black bg-opacity-75 flex flex-col items-center justify-center">
              <h2 className="text-white text-3xl font-semibold text-center">
                Aisah
              </h2>
              <p className="text-center w-52">
                Spesialisasi: Body Sculpting & Pilates{" "}
              </p>
            </div>
          </div>
          <div className="w-72 h-[470px]  border-red-600 border-2 rounded-lg  shadow-lg">
            <div className="h-80 p-5">
              <img
                src="/assets/personalTrainer/emma.png"
                className="h-full w-full object-cover rounded-lg"
                alt="Noah"
              />
            </div>
            <div className="h-16 gap-6 mt-6 bg-black bg-opacity-75 flex flex-col items-center justify-center">
              <h2 className="text-white text-3xl font-semibold text-center">
                Emma
              </h2>
              <p className="text-center w-52">
                Spesialisasi: Dance Fitness & Cardio Burn{" "}
              </p>
            </div>
          </div>
          <div className="w-72 h-[470px]  border-red-600 border-2 rounded-lg  shadow-lg">
            <div className="h-80 p-5">
              <img
                src="/assets/personalTrainer/hana.png"
                className="h-full w-full object-cover rounded-lg"
                alt="Noah"
              />
            </div>
            <div className="h-16 gap-6 mt-6 bg-black bg-opacity-75 flex flex-col items-center justify-center">
              <h2 className="text-white text-3xl font-semibold text-center">
                Hana
              </h2>
              <p className="text-center w-52">
                Spesialisasi: Flexibility & Mobility Training{" "}
              </p>
            </div>
          </div>
          <div className="w-72 h-[470px]  border-red-600 border-2 rounded-lg  shadow-lg">
            <div className="h-80 p-5">
              <img
                src="/assets/personalTrainer/maria.png"
                className="h-full w-full object-cover rounded-lg"
                alt="Noah"
              />
            </div>
            <div className="h-16 gap-6 mt-6 bg-black bg-opacity-75 flex flex-col items-center justify-center">
              <h2 className="text-white text-3xl font-semibold text-center">
                Maria
              </h2>
              <p className="text-center w-52">
                Spesialisasi: Weight Loss & Women’s Fitness{" "}
              </p>
            </div>
          </div>
          <div className="w-72 h-[470px]  border-red-600 border-2 rounded-lg  shadow-lg">
            <div className="h-80 p-5">
              <img
                src="/assets/personalTrainer/sofia.png"
                className="h-full w-full object-cover rounded-lg"
                alt="Sofia"
              />
            </div>
            <div className="h-16 gap-6 mt-6 bg-black bg-opacity-75 flex flex-col items-center justify-center">
              <h2 className="text-white text-3xl font-semibold text-center">
                Sofia
              </h2>
              <p className="text-center w-52">
                Spesialisasi: Strength & Athletic Conditioning{" "}
              </p>
            </div>
          </div>
          <div className="w-72 h-[470px]  border-red-600 border-2 rounded-lg  shadow-lg">
            <div className="h-80 p-5">
              <img
                src="/assets/personalTrainer/lena.png"
                className="h-full w-full object-cover rounded-lg"
                alt="Lena"
              />
            </div>
            <div className="h-16 gap-6 mt-6 bg-black bg-opacity-75 flex flex-col items-center justify-center">
              <h2 className="text-white text-3xl font-semibold text-center">
                Lena
              </h2>
              <p className="text-center w-52">
                Spesialisasi: Pre/Post-Natal Fitness & Wellness{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
