import { useEffect, useState } from "react";
import Portfolio from "../components/Portofolio";
import Pengalaman from "../components/Pengalaman";
import Kontak from "../components/Kontak";
import IkromImg from "../assets/images/Ikrom.png";

export default function Beranda() {
  const texts = ["Coding", "Programming", "Analytical", "Design"];
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout;

    if (index < texts[count].length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[count][index]);
        setIndex(index + 1);
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setCount((prev) => (prev + 1) % texts.length);
        setDisplayedText("");
        setIndex(0);
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [index, count]);

  return (
    <>
      <section id="beranda" className="dark:bg-gray-900 pt-4 md:pt-12">
        <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row md:justify-between">
          {/* Kiri */}
          <div className="w-full md:w-3/5 flex flex-col justify-center mx-auto md:p-0 p-4 items-center md:items-baseline">
            <div className="mb-4">{/* logo jika ada */}</div>

            <div
              className="mb-4 text-center md:text-left text-3xl md:text-7xl font-extrabold"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1 className="mb-2 md:mb-4">Hi I Am</h1>
              <h1 className="mb-2 md:mb-4">
                Muhammad <span className="text-[#FD7E41]">Ikrom</span>
              </h1>
              <h1 className="mb-2 md:mb-4 text-[#7959D6]">{displayedText}</h1>
            </div>

            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              className="mb-8 text-center md:text-left leading-10 text-lg md:text-2xl font-semibold text-gray-500 dark:text-gray-400"
            >
              Lulusan S1 Teknik Informatika dengan minat tinggi di bidang IT,
              khususnya analisis data dan pengembangan website.
            </p>

            <div
              className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 gap-4"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <a
                href="#kontak"
                className="bg-[#7959D6] text-white text-center px-4 py-3 font-medium text-xl rounded-md hover:bg-[#6c57aa]"
              >
                Hubungi Saya
              </a>

              <a
                href="https://drive.google.com/drive/folders/1IskK6iuWbhCDv_pDABaecAd0wVoCjR6j?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FD7E41] text-white text-center px-4 py-3 font-medium text-xl rounded-md hover:bg-[#ce8563]"
              >
                Curriculum Vitae
              </a>
            </div>
          </div>

          {/* Kanan */}
          <div
            className="md:w-2/5 w-full md:p-0 px-4 pt-4 md:pt-0 flex justify-center mx-auto md:mx-0"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="w-[30rem] mx-auto">
              <img src={IkromImg} alt="gambar ikrom" />
            </div>
          </div>
        </div>
      </section>

      <section className="dark:bg-gray-900 py-24">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="flex flex-wrap justify-between items-center gap-6 p-8 md:p-0"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {/* Laravel */}
            <img
              className="h-14 grayscale hover:grayscale-0 transition duration-300"
              src="https://laravel.com/img/logomark.min.svg"
              alt="Laravel"
            />
            {/* CI4 */}
            <img
              className="h-14 grayscale hover:grayscale-0 transition duration-300"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg"
              alt="Code Igneter 4"
            />
            {/* Tailwind CSS */}
            <img
              className="h-14 grayscale hover:grayscale-0 transition duration-300"
              src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
              alt="TailwindCSS"
            />
            {/* Bootstrap */}
            <img
              className="h-14 grayscale hover:grayscale-0 transition duration-300"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg
"
              alt="Bootstrap"
            />

            {/* MySQL */}
            <img
              className="h-14 grayscale hover:grayscale-0 transition duration-300"
              src="https://www.mysql.com/common/logos/logo-mysql-170x115.png"
              alt="MySQL"
            />
            {/* HTML */}
            <img
              className="h-14 grayscale hover:grayscale-0 transition duration-300"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
            />
            {/* CSS */}
            <img
              className="h-14 grayscale hover:grayscale-0 transition duration-300"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
            />
            {/* JavaScript */}
            <img
              className="h-14 grayscale hover:grayscale-0 transition duration-300"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />

            {/* PHP */}
            {/* JavaScript */}
            <img
              className="h-14 grayscale hover:grayscale-0 transition duration-300"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              alt="PHP"
            />

            {/* Node.js */}
            <img
              className="h-14 grayscale hover:grayscale-0 transition duration-300"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
            />
            {/* Vite */}
            <img
              className="h-14 grayscale hover:grayscale-0 transition duration-300"
              src="https://vitejs.dev/logo.svg"
              alt="Vite"
            />
            {/* Git */}
            <img
              className="h-14 grayscale hover:grayscale-0 transition duration-300"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
            />
          </div>
        </div>
      </section>

      <Portfolio />

      <Pengalaman />

      <Kontak />
    </>
  );
}
