import React from 'react';
import { facilitiesData } from './FacilitiesData';
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'], weight: '700' })

const FacilitiesPage = () => {
    return (
        <div className="min-h-screen bg-black text-white">

            <div className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
                style={{
                    backgroundImage: 'url("/assets/facilities/hero-bg.png")',
                }}>

                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/40 to-transparent"></div>


                <div className="relative z-10 max-w-4xl mx-auto px-6 text-left">
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-white " style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 400 }}>
                        "FASILITAS TERBAIK<br />
                        MENDUKUNG SETIAP LANGKAH"
                    </h1>
                    <p className="text-lg md:text-xl text-white max-w-2xl leading-relaxed font-light ">
                        Selamat datang di ruang latihan berstandar tinggi dengan desain ergonomis dan teknologi
                        kebugaran terkini. Kami menghadirkan pengalaman berolahraga yang tak hanya efektif,
                        tapi juga nyaman dan menyenangkan.
                    </p>
                </div>
            </div>


            <div className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    {facilitiesData.map((facility, index) => (
                        <div
                            key={index}
                            className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20 last:mb-0 p-8 border border-red-500 rounded-lg"
                        >

                            <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Oswald, sans-serif ' }}>
                                    {facility.title}
                                </h2>
                                <p className="text-gray-500 text-lg leading-relaxed ">
                                    {facility.description}
                                </p>
                                <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-600 mt-6"></div>
                            </div>

                            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className="relative group overflow-hidden rounded-lg">
                                    <img
                                        src={facility.image}
                                        alt={facility.title}
                                        className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative py-20 px-6 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/assets/facilities/cta.png')"
                    }}
                ></div>
                <div className="relative max-w-6xl mx-auto flex items-center justify-between z-10">
                    <div className="text-left">
                        <h3 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight" style={{ fontFamily: 'Oswald, sans-serif ' }}>
                            MULAI FREE TRIAL ANDA<br />
                            SEKARANG JUGA!
                        </h3>
                    </div>
                    <div>
                        <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg">
                            Gabung Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacilitiesPage;