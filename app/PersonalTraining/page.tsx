"use client";

import trainers from "@/app/data/trainers.json";

import Link from "next/link";

export default function TrainingPage() {
  return (
    <div>
      {" "}
      <div className="relative w-full h-screen">
        <img
          src="/assets/personalTraining/bg-personalTraining.png"
          className="w-full absolute  object-cover h-full inset-0"
          alt=""
        />
        <div className="absolute top-40 left-40 w-[1000px] flex items-start flex-col gap-28 ">
          <p className="text-6xl font-bold">
            CAPAI TUJUAN KEBUGARANMMU LEBIH CEPAT
          </p>
          <p className="text-2xl font-bold">
            Latihan yang dirancang khusus untukmu. Dipandu oleh pelatih
            tersertifikasi, fokus pada hasil nyata dan transformasi menyeluruh.
          </p>

          <Link href={"/Membership"}>
            <button className="btn-red px-7 py-4 rounded-lg">
              Gabung Sekarang
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[100%] h-auto bg-[#1E1E1E] flex flex-col items-center">
        <div className="w-[1136px] flex flex-col justify-center items-center pt-32 gap-5">
          <p className="text-5xl font-bold">PENDEKATAN PERSONALISASI 100%</p>
          <p className="text-[24px] text-center text-[#909090]">
            Setiap Klien Memulai dengan Konsultasi Awal dan Asesmen Menyeluruh
            untuk Membentuk Program paling Efisien untuk Kondisi Unikmu.
          </p>

          <div className="w-full flex flex-col gap-16 mt-32">
            {trainers.map((trainer) => (
              <div key={trainer.id}>
                <div className="w-full flex border-1  border-red-700 rounded-xl overflow-hidden">
                  <div className="w-1/2">
                    <img
                      className="hover:scale-110 transition-transform duration-1000 "
                      src={trainer.image}
                      alt=""
                    />
                  </div>
                  <div className="w-1/2 flex flex-col gap-8 py-16">
                    <div className="pl-2">
                      <p className="text-[42px] font-bold">{trainer.title}</p>
                    </div>
                    <div className="pl-2">
                      <p className="text-[22px]">{trainer.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Membership */}
        <div>
          <div className="w-[1136px] flex flex-col justify-center items-center pt-32 gap-5">
            <p className="text-5xl font-bold">PAKET PERSONAL TRAINING</p>
            <p className="text-[24px] text-center text-[#909090]">
              Mulai Perjalanan Transformasi Tubuhmu
            </p>
          </div>

          <div className="grid grid-cols-3 w-full mt-16 mb-40">
            <div className="flex flex-col items-center border-1 border-red-700 w-[302px] py-8 gap-5 rounded-xl">
              <p>Starter(4 Sesi)</p>
              <p className="text-5xl font-bold">799K</p>
              <p>Monthly Membership</p>
              <div>
                <p>1-on-1 Training</p>
                <p>Assesment Awal</p>
              </div>

              <button className="btn-red">Gabung Sekarang</button>
            </div>
            <div className="flex flex-col items-center border-1 border-red-700 w-[302px] py-8 gap-5 rounded-xl">
              <p>Elite (12 Sesi)</p>
              <p className="text-5xl font-bold">2.999K</p>
              <p>Monthly Membership</p>
              <div className="text-center">
                <p>1-on-1 Training</p>
                <p>Assesment Awal</p>
                <p>konsultasi nutrisi mingguan</p>
                <p> evaluasi & penyesuaian program</p>
              </div>

              <button className="btn-red">Gabung Sekarang</button>
            </div>
            <div className="flex flex-col items-center border-1 border-red-700 w-[302px] py-8 gap-5 rounded-xl">
              <p>Pro (8 Sesi)</p>
              <p className="text-5xl font-bold">1.499K</p>
              <p>Monthly Membership</p>
              <div className="text-center">
                <p>1-on-1 Training</p>
                <p>Assesment Awal</p>
                <p>+ evaluasi & penyesuaian program</p>
              </div>

              <button className="btn-red">Gabung Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
