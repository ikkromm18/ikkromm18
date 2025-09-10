import { useState } from "react";
import { Link } from "react-router-dom";

// Import semua gambar dari assets
import rb1 from "../assets/images/rb1.png";
import alton1 from "../assets/images/alton1.png";
import pemdes1 from "../assets/images/pemdes1.png";
import r1 from "../assets/images/r1.png";
import fiifa1 from "../assets/images/fiifa1.png";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("website");

  const projects = [
    {
      title: "Website Rumah BUMN Pekalongan",
      desc: "Website Operasional Rumah BUMN Telkom Pekalongan",
      date: "25 November 2024",
      img: rb1,
    },
    {
      title: "Website Alton",
      desc: "Alton adalah sebuah brand pakaian jadi dibawah PT Dakota Mitra Tama, Kabupaten Pekalongan, Alton Online Shop dibuat untuk menghandle penjualan produk-produk mereka.",
      date: "01 Juni 2024",
      img: alton1,
    },
    {
      title: "Website Pelayanan Administrasi Pemdes Wonoyoso",
      desc: "Website untuk membantu proses pelayanan administrasi di Desa Wonoyoso",
      date: "14 Februari 2025",
      img: pemdes1,
    },
    {
      title: "M-18 Restaurant",
      desc: "Website untuk melihat Katalog Restaurant",
      date: "20 Desember 2023",
      img: r1,
    },

    {
      title: "FiiFa Print & Fotocopy",
      desc: "Sistem Pengelolaan Percetakan ",
      date: "16 Aguatus 2025",
      img: fiifa1,
    },
  ];

  return (
    <section id="portfolio" className="dark:bg-gray-900 py-16">
      <div
        className="mx-auto max-w-screen-xl"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <h1 className="p-3 font-bold text-4xl">My Projects</h1>

        {/* Tabs */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            <li className="me-2">
              <button
                onClick={() => setActiveTab("website")}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "website"
                    ? "border-blue-500 text-blue-600"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                Website
              </button>
            </li>
            {/* <li className="me-2">
              <button
                onClick={() => setActiveTab("data")}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "data"
                    ? "border-blue-500 text-blue-600"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                Data
              </button>
            </li> */}
          </ul>
        </div>

        {/* Tab Content */}
        <div id="default-tab-content">
          {activeTab === "website" && (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="flex flex-wrap mt-8 justify-center gap-8 p-4 md:p-0">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <img
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
                      src={project.img}
                      alt={project.title}
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {project.title}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {project.desc}
                      </p>
                      <p className="text-gray-400 text-sm">{project.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "data" && (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Belum Ada
              </p>
            </div>
          )}
        </div>

        {/* Button Detail */}
        <div className="text-center mt-8">
          <Link
            to="/detail"
            className="bg-[#7959D6] text-white text-center px-4 py-3 font-medium text-xl rounded-md hover:bg-[#6c57aa]"
          >
            Detail Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
