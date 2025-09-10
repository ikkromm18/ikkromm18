import { useState } from "react";

const Pengalaman = () => {
  const [activeTab, setActiveTab] = useState("organisasi");

  return (
    <section id="pengalaman" className="dark:bg-gray-900">
      <div
        className="mx-auto max-w-screen-xl"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <h1 className="p-3 font-bold text-4xl">Pengalaman</h1>

        {/* Tabs */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            <li className="me-2">
              <button
                onClick={() => setActiveTab("organisasi")}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "organisasi"
                    ? "border-blue-500 text-blue-600"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                Organisasi
              </button>
            </li>
            <li className="me-2">
              <button
                onClick={() => setActiveTab("kerja")}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "kerja"
                    ? "border-blue-500 text-blue-600"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                Kerja
              </button>
            </li>
            <li className="me-2">
              <button
                onClick={() => setActiveTab("lainnya")}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "lainnya"
                    ? "border-blue-500 text-blue-600"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                Lainnya
              </button>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div id="default-tab-content">
          {/* Organisasi */}
          {activeTab === "organisasi" && (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Sekretaris OKP NU Wonoyoso (2022-2024)
              </h2>
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>Mengatur Administrasi Organisasi</li>
                <li>Membuat dan Mengelola Surat Menyurat</li>
                <li>Mengelola Data-Data yang ada di organisasi</li>
              </ul>

              <h2 className="mb-2 mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Wakil Sekretaris OKP NU Kecamatan Buaran (2024-2026)
              </h2>
              <ul className="max-w-xl space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>
                  Membantu Sekretaris Utama untuk mengelola Administrasi
                  Organisasi
                </li>
                <li>Mengelola Pengarsipan Surat Masuk</li>
              </ul>

              <h2 className="mb-2 mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                MENKOMINFO I BEM IWIMA (2022 - 2023)
              </h2>
              <ul className="max-w-xl space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>Mengelola Informasi dan Publikasi</li>
                <li>Membuat dan Mendesain Konten Digital</li>
                <li>Mengelola Media Sosial</li>
              </ul>
            </div>
          )}

          {/* Kerja */}
          {activeTab === "kerja" && (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Percetakan Queen FC (2021 - 2022)
              </h2>
              <ul className="max-w-4xl space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>
                  Melayani pelanggan dalam pemesanan dan konsultasi desain cetak
                  (undangan, banner, brosur, stiker, dll).
                </li>
                <li>
                  Melakukan setting dan editing desain menggunakan software
                  seperti CorelDRAW, Photoshop, dan Microsoft Office.
                </li>
              </ul>

              <h2 className="mb-2 pt-4 text-lg font-semibold text-gray-900 dark:text-white">
                FL Event Organizer (2024 - 2025)
              </h2>
              <ul className="max-w-xl space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>
                  Crew Event, Berkolaborasi dengan Tim untuk mensukseskan suatu
                  acara
                </li>
              </ul>
            </div>
          )}

          {/* Lainnya */}
          {activeTab === "lainnya" && (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Studi Independen Dicoding Cycle 5 (2023)
              </h2>
              <ul className="max-w-4xl space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>
                  Belajar Pengembangan Website dari sisi Front-End dan Back-End
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pengalaman;
