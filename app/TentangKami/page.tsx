import { aboutData } from './AboutData';
export default function AboutPage() {
  return (
    
    <main className="text-white bg-zinc-900">
      {/* HERO */}
      <section className="relative flex flex-col justify-center w-full h-screen bg-center bg-no-repeat bg-cover">
        <img
          src="/assets/tentangkami/bg-tentangkami.png"
          alt=""
          className="absolute inset-0 object-cover w-full h-full opacity-50"
        />
        <div className="relative flex flex-col px-4 space-y-8 sm:px-6 md:px-12 lg:px-24 xl:px-48 md:ml-12 lg:ml-24">
          <h1 className="max-w-4xl text-3xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-anton">
            SELAMAT DATANG DI <br /> WEBSITE GYMS
          </h1>
          <p className="max-w-4xl text-base text-white sm:text-lg md:text-xl lg:text-2xl font-outfit">
            Di sinilah transformasi dimulai – bukan hanya fisik, tetapi juga mental dan emosional.
            Kami percaya bahwa setiap orang memiliki potensi luar biasa untuk menjadi versi
            terbaik dari dirinya. Dengan pendekatan ilmiah, teknologi modern, dan sentuhan
            personal, kami hadir untuk menemani perjalanan Anda menuju gaya hidup sehat
            dan seimbang.
          </p>
        </div>
      </section>
      
      {/* VISI */}
      <section className="py-36">
        <div className="container flex flex-col items-center gap-6 px-6 mx-auto lg:flex-row">
          <div className="relative flex-1 w-fit">
            <img
              src="/assets/tentangkami/couple-training.png"
              alt=""
              height={300}
              className="rounded-lg pointer-events-none select-none"
            />
            <div className="absolute inset-0 rounded-lg">
              <div className="w-full h-full bg-gradient-to-t from-zinc-900 to-transparent" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="mb-6 text-4xl font-anton md:text-6xl">VISI KAMI</h2>
            <p className="text-lg leading-relaxed font-outfit sm:text-lg md:text-xl lg:text-2xl">
              "Menjadi pusat kebugaran terdepan yang membentuk komunitas sehat, berdaya, dan
              berkelanjutan di Indonesia."
            </p>
          </div>
        </div>
      </section>

      {/* MISI */}
      <section className="py-24">
        <div className="container flex flex-col-reverse items-center gap-6 px-6 mx-auto lg:flex-row">
          <div className="flex-[2]">
            <h2 className="mb-6 text-4xl font-anton md:text-6xl">MISI KAMI</h2>
            <ul className="space-y-4 text-lg leading-relaxed list-disc list-inside font-outfit sm:text-lg md:text-xl lg:text-2xl">
              <li>
                Menyediakan fasilitas dan layanan kebugaran berkualitas tinggi yang mudah diakses
                oleh semua kalangan.
              </li>
              <li>
                Menawarkan program pelatihan yang personalized, berbasis bukti ilmiah, dan
                didukung oleh pelatih bersertifikasi internasional.
              </li>
              <li>
                Membangun komunitas aktif yang saling mendukung, menyemangati, dan tumbuh
                bersama.
              </li>
            </ul>
          </div>
          <div className="relative flex-1 ml-8 w-fit">
            <img
              src="/assets/tentangkami/couple-training-1.png"
              alt=""
              height={300}
              className="rounded-lg pointer-events-none select-none"
            />
            <div className="absolute inset-0 rounded-lg">
              <div className="w-full h-full bg-gradient-to-t from-zinc-900 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="py-24">
        <div className="container px-6 mx-auto">
          <h2 className="text-3xl text-center font-anton md:text-4xl">
            MARI BERTUMBUH BERSAMA KAMI
          </h2>
          <p className="mt-4 mb-12 text-lg text-center font-outfit">
            Kami Menjunjung Nilai ‑ nilai yang Mendukung Perubahan.
          </p>

          <div className="grid max-w-5xl grid-cols-2 gap-6 mx-auto md:grid-cols-4">
            {aboutData.map((val) => (
              <div
                key={val.title}
                className="p-6 text-center transition border border-red-600 rounded-lg hover:bg-red-600/10"
              >
                <h3 className="mb-4 text-xl font-anton">{val.title}</h3>
                <p className="text-sm leading-relaxed font-outfit">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
          {/* CONTACT */}
          <section className="py-24">
            <div className="container px-6 mx-auto">
              <h2 className="text-3xl text-center font-anton md:text-4xl">
                LANGKAH AWAL MENUJU GAYA HIDUP SEHAT
              </h2>
              <p className="max-w-3xl mx-auto mt-4 mb-12 text-lg text-center font-outfit">
                Tim Kami Siap Membantu Semua Pertanyaan Anda Tentang Membership, Program Latihan,
                Hingga Konsultasi Personal Training.
              </p>

              {/* Form */}
              <div className="grid items-stretch grid-cols-1 gap-10 p-6 border border-red-600 shadow-xl md:grid-cols-2 rounded-xl bg-zinc-900">
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-red-600"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-red-600"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-red-600"
                  />
                  <textarea
                    rows={4}
                    placeholder="Masukkan Pesan Anda"
                    className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-red-600"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 font-semibold tracking-wide uppercase bg-red-600 rounded-lg hover:bg-red-700"
                  >
                    Kirim
                  </button>
                </form>

                {/* Map */}
                <div className="w-full h-full overflow-hidden rounded-lg">
                  <iframe
                    title="Gym Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.49778482152!2d106.68943165!3d-6.229728250000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f49def317c7f%3A0x6221e8caf9c86220!2sJakarta%20Fitness!5e0!3m2!1sen!2sid!4v1591234567890!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            </div>
          </section>
    </main>
  );
}