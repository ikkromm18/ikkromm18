<section id="portfolio" class="dark:bg-gray-900 py-16">
    <div class="mx-auto max-w-screen-xl" data-aos="zoom-in" data-aos-duration="1500">

        <h1 class="p-3 font-bold text-4xl">My Projects</h1>


        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab"
                data-tabs-toggle="#default-tab-content" role="tablist">
                <li class="me-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab"
                        data-tabs-target="#profile" type="button" role="tab" aria-controls="profile"
                        aria-selected="false">Website</button>
                </li>
                <li class="me-2" role="presentation">
                    <button
                        class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab"
                        aria-controls="dashboard" aria-selected="false">Data</button>
                </li>

            </ul>
        </div>

        <div id="default-tab-content">
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel"
                aria-labelledby="profile-tab">
                <div class="flex flex-wrap mt-8 justify-center gap-8 p-4 md:p-0">

                    <div
                        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
                            src="./images/rb1.png" alt="">

                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Website
                                Rumah BUMN
                                Pekalongan
                            </h5>

                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Website Operasional Rumah BUMN
                                Telkom
                                Pekalongan</p>

                            <p class="text-gray-400 text-sm">25 November 2024</p>
                        </div>
                    </div>

                    <div
                        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
                            src="./images/alton1.png" alt="">

                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Website
                                Alton
                            </h5>

                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Alton adalah sebuah brand
                                pakaian jadi
                                dibawah PT Dakota Mitra Tama, Kabupaten Pekalongan, Alton Online Shop dibuat untuk
                                menghandle
                                penjualan produk-produk mereka.</p>

                            <p class="text-gray-400 text-sm">01 Juni 2024</p>
                        </div>
                    </div>

                    <div
                        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
                            src="./images/pemdes1.png" alt="">

                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Website
                                Pelayanan
                                Administrasi Pemdes Wonoyoso
                            </h5>

                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Website untuk membantu proses
                                pelayanan
                                administrasi di Desa Wonoyoso</p>

                            <p class="text-gray-400 text-sm">14 Februari 2025</p>
                        </div>
                    </div>

                    <div
                        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
                            src="./images/r1.png" alt="">

                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">M-18
                                Restaurant
                            </h5>

                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Website untuk melihat Katalog
                                Restaurant</p>

                            <p class="text-gray-400 text-sm">20 Desember 2023</p>
                        </div>
                    </div>

                </div>

            </div>

            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel"
                aria-labelledby="dashboard-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">Belum Ada</p>
            </div>

        </div>


        <div class="text-center mt-8">
            <a href="{{ route('detail') }}"
                class="bg-[#7959D6] text-white text-center px-4 py-3 font-medium text-xl rounded-md  hover:bg-[#6c57aa]">Detail
                Project</a>
        </div>

    </div>
</section>
