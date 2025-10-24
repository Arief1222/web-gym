interface imageProps {
  link: string;
  data: string;
}

interface membershipProps{
  type : string,
  price : string,
  profit : string
}

interface keteranganProps {
  jumlah : string,
  deskripsi : string 
}
export const imageHomeData: imageProps[] = [
  {
    link: "/assets/beranda/pexels-cesar-galeao-1673528-3253501.png",
    data: "image2",
  },
  {
    link: "/assets/beranda/pexels-cottonbro-4753996.png",
    data: "image1",
  },
  {
    link: "/assets/beranda/pexels-victorfreitas-703012.png",
    data: "image3",
  },
  {
    link: "/assets/beranda/pexels-823sl-2294403.png",
    data: "image4",
  },

];

export const keterangan : keteranganProps[] = [
  {
    jumlah : '2000+',
    deskripsi : "Member Terdaftar"
  },
  {
    jumlah : '10',
    deskripsi : "Pelatih Profesional"
  },
  {
    jumlah : '15',
    deskripsi : "Program Unggulan"
  }

]

export const imageClasses : imageProps[]= [
  {
    link: "/assets/classes/classes-1.png",
    data: "classes-1",
  },
  {
    link: "/assets/classes/classes-2.png",
    data: "classes-2",
  },
  {
    link: "/assets/classes/classes-3.png",
    data: "classes-3",
  },
  {
    link: "/assets/classes/classes-4.png",
    data: "classes-4",
  },
]

export const memberships : membershipProps[] = [
  {
    type : "Basic",
    price : "399K",
    profit : "Akses Gym, Locker dan Kelas Reguler"
  },
  {
    type : "Gold",
    price : "599K",
    profit : "Semua Fasilitas 2x sesi /bulan"
  },
  {
    type : "Premium",
    price : "899K",
    profit : "Semua Fasilitas 8x sesi /bulan + Konsultasi Nutrisi"
  }
]