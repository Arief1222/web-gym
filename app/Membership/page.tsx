import PriceCard from "@/components/membership/PriceCard";
import Image from "next/image";

export default function MembershipPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col bg-[url('/assets/membership/bg-membership.png')] justify-center bg-cover bg-center bg-no-repeat w-full h-screen">
        <div className="flex flex-col space-y-16 px-[11rem]">
          <h1 className="text-5xl md:text-7xl max-w-2xl leading-none w-[900px] font-anton uppercase">
            Mulai Perjalanan Transformasimu!
          </h1>
          <p className="text-lg md:text-2xl w-[900px] font-outfit">
            Pilih Rencana Keanggotaan yang Sesuai dengan Gaya Hidupmu. Mulai
            dari pemula hingga atlet profesional, kami menyediakan paket
            membership fleksibel yang disesuaikan dengan tujuan, waktu, dan
            anggaranmu
          </p>
        </div>
      </section>

      <section className="flex justify-center mt-24">
        <div className="flex flex-col items-center gap-32 max-w-[1136px]">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-4xl text-center md:text-5xl font-anton leading-none uppercase">
              Gabung Sekarang & Mulai <br /> Transformasi dirimu!
            </h1>
            <p className="text-lg md:text-2xl text-center font-outfit text-text-grey">
              Kami menawarkan berbagai paket membership yang fleksibel,
              terjangkau, dan disesuaikan dengan kebutuhan serta gaya hidupmu.
              Dapatkan akses tak terbatas ke fasilitas premium, pelatih
              profesional, dan komunitas yang suportif.
            </p>
          </div>
          <div className="flex items-center gap-16 h-auto">
            <PriceCard
              title="Basic"
              price="399K"
              description="Monthly Membership"
              featureName="Fitur"
              features={[
                "Akses ke seluruh area gym (cardio & angkat beban)",
                "Akses kelas reguler: Zumba, Yoga, Circuit Training",
                "Loker pribadi & kamar mandi air hangat",
                "Free WiFi & area istirahat",
              ]}
              bonuses={["Gratis konsultasi awal", "E-book panduan diet sehat"]}
            />
            <PriceCard
              title="Gold"
              price="599K"
              description="Monthly Membership"
              featureName="Semua fitur Basic +"
              features={[
                "2 sesi Personal Training per bulan",
                "Akses kelas eksklusif (HIIT, TRX, Muay Thai)",
                "Konsultasi gizi 1x / bulan",
                "Akses ruang sauna & kolam renang",
              ]}
              bonuses={[
                "Merchandise eksklusif (kaos, botol minum)",
                "Prioritas booking kelas",
              ]}
            />
            <PriceCard
              title="Premium"
              price="899K"
              description="Monthly Membership"
              featureName="Semua fitur Gold +"
              features={[
                "8 sesi Personal Training per bulan",
                "Konsultasi nutrisi mingguan & meal planning",
                "Akses tak terbatas ke semua kelas dan fasilitas",
                "Program fitness evaluasi tiap bulan",
                "Monitoring komposisi tubuh (InBody Scan)",
              ]}
              bonuses={[
                "Akses undangan event komunitas eksklusif",
                "Diskon 15% untuk program fitness lanjutan",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center mt-48">
        <div className="max-w-[1136px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="columns-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Image
                key={i}
                src={`/assets/membership/why-img-${i}.png`}
                alt={`Why ${i}`}
                width={300}
                height={150}
                className="object-cover mb-5"
              />
            ))}
          </div>

          <div className="flex flex-col gap-12">
            <h2 className="text-6xl font-anton leading-tight">
              KENAPA HARUS JADI MEMBER KAMI?
            </h2>
            <ul className="list-disc list-outside ml-5 space-y-6 text-text-grey text-2xl font-outfit max-w-[500px]">
              <li>
                Tanpa Kontrak Panjang – Bisa bulanan, bebas berhenti kapan saja.
              </li>
              <li>Support 24/7 – Melalui aplikasi dan pelatih.</li>
              <li>Fasilitas Premium – Setara dengan standar internasional.</li>
              <li>Komunitas Positif – Ikut tantangan bulanan & workshop.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 overflow-hidden mt-48">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/membership/cta.png')",
          }}
        />
        <div className="relative max-w-[1136px] mx-auto flex items-center justify-between z-10">
          <div className="text-left">
            <h3 className="text-4xl md:text-6xl text-white uppercase leading-tight font-anton">
              MULAI FREE TRIAL ANDA
              <br />
              SEKARANG JUGA!
            </h3>
          </div>
          <div>
            <button className="btn-white px-10 py-5 font-outfit font-bold text-2xl">
              Gabung Sekarang
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
