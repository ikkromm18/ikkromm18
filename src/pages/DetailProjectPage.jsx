import React from "react";
import DetailProject from "../components/DetailProject";
import { Link } from "react-router-dom";

// Import semua gambar dari assets
import rb1 from "../assets/images/rb1.png";
import rb2 from "../assets/images/rb2.png";
import rb3 from "../assets/images/rb3.png";

import alton1 from "../assets/images/alton1.png";
import alton2 from "../assets/images/alton2.png";
import alton3 from "../assets/images/alton3.png";

import pemdes1 from "../assets/images/pemdes1.png";
import pemdes2 from "../assets/images/pemdes2.png";
import pemdes3 from "../assets/images/pemdes3.png";

import r1 from "../assets/images/r1.png";
import r2 from "../assets/images/r2.png";
import r3 from "../assets/images/r3.png";

import fiifa1 from "../assets/images/fiifa1.png";
import fiifa2 from "../assets/images/fiifa2.png";
import fiifa3 from "../assets/images/fiifa3.png";

const DetailProjectPage = () => {
  return (
    <section className="dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl">
        {/* Tombol Kembali */}
        <div className="mb-6">
          <Link
            to="/"
            className="mt-4 inline-block px-4 py-2 bg-[#7959D6] text-white rounded-lg shadow hover:bg-[#3b2f5f] transition"
          >
            Kembali ke Beranda
          </Link>
        </div>

        <DetailProject
          title="Website Rumah BUMN Telkom Pekalongan"
          url="http://rbpekalongan.id"
          images={[rb1, rb2, rb3]}
          techs={["Laravel", "TailwindCSS", "Flowbite"]}
          description="Website Rumah BUMN merupakan proyek website bersama AGSA Dev. saya berkolaborasi dengan tim dalam merealisasikan permintaan khusus dari Rumah BUMN Telkom Kota Pekalongan. Web ini mengcover keperluan operasional seperti Booking Ruangan, Pendaftaran Event, dan Pendaftaran UMKM Binaan."
        />

        <DetailProject
          title="Sistem Kasir Fiifa Print & Fotocopy"
          url="https://github.com/ikkromm18/fiifa-print-app"
          images={[fiifa1, fiifa2, fiifa3]}
          techs={["Laravel", "TailwindCSS", "Flowbite"]}
          description="Sistem Kasir Fiifa Print & Fotocopy merupakan aplikasi berbasis web yang saya buat menggunakan Laravel. Sistem ini dirancang untuk membantu pengelolaan operasional percetakan, mulai dari kelola kategori produk, kelola produk, pencatatan transaksi dengan detail dan cetak struk, hingga laporan penjualan. Selain itu terdapat fitur dashboard interaktif dan manajemen akun untuk admin maupun kasir."
        />

        <DetailProject
          title="Website ALTON Online Shop"
          url="#"
          images={[alton1, alton2, alton3]}
          techs={["Laravel", "TailwindCSS", "Livewire", "Flowbite"]}
          description="Website ALTON merupakan website yang saya buat bersama AGSA Dev. Alton adalah sebuah brand pakaian jadi dibawah PT Dakota Mitra Tama, Kabupaten Pekalongan. Alton Online Shop dibuat untuk menghandle penjualan produk-produk mereka."
        />

        <DetailProject
          title="Website Pelayanan Administrasi Di PEMDES Wonoyoso"
          url="https://github.com/ikkromm18/pemdes-wonoyoso"
          images={[pemdes1, pemdes2, pemdes3]}
          techs={["Laravel", "TailwindCSS", "PWA", "Flowbite"]}
          description="Website ini merupakan tugas akhir saya. website ini berguna untuk membantu warga di Desa Wonoyoso untuk melakukan pengajuan administrasi dimana saja. serta membantu perangkat desa untuk mengelola keadministrasian surat-menyurat."
        />

        <DetailProject
          title="Katalog Restaurant"
          url="https://github.com/ikkromm18/restaurant-apps-m18"
          images={[r1, r2, r3]}
          techs={["HTML", "JavaScript", "CSS", "Webpack"]}
          description="Website ini dibuat saat saya mengikuti program Studi Independen Bersertifikat di Dicoding. Proyek ini merupakan tugas akhir dari salah satu kelas yang saya ikuti, dengan konten berupa daftar restoran, Menu, dan Testimoni yang datanya diambil dari API."
        />
      </div>
    </section>
  );
};

export default DetailProjectPage;
