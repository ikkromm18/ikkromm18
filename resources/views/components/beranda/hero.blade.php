<section id="beranda" class="dark:bg-gray-900 pt-4 md:pt-12">
    <div class="mx-auto max-w-screen-xl flex flex-col md:flex-row md:justify-between">

        <div class=" w-full md:w-3/5  flex flex-col justify-center mx-auto md:p-0 p-4 items-center md:items-baseline">
            <div class="mb-4">
                {{-- <img src="./images/santrijurnalis.png" class="h-8 md:h-10" alt=""> --}}
            </div>
            <div class="mb-4 text-center md:text-left text-3xl md:text-7xl font-extrabold">
                <h1 class="mb-2 md:mb-4">Hi I Am</h1>
                <h1 class="mb-2 md:mb-4">Muhammad <span class="text-[#FD7E41]">Ikrom</span></h1>
                <h1 id="typing" class="mb-2 md:mb-4 text-[#7959D6]"></h1>
            </div>


            <p
                class="mb-8 text-center md:text-left leading-10 text-lg md:text-2xl font-semibold text-gray-500  dark:text-gray-400">
                Lulusan S1 Teknik Informatika dengan minat tinggi di bidang IT, khususnya analisis data dan pengembangan
                website.</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 gap-4">

                <a href="#kontak"
                    class="bg-[#7959D6] text-white text-center px-4 py-3 font-medium text-xl rounded-md">Hubungi
                    Saya</a>

                <a href="#"
                    class="bg-[#FD7E41] text-white text-center px-4 py-3 font-medium text-xl rounded-md">Curriculum
                    Vitae
                </a>
            </div>
        </div>

        <div class="md:w-2/5 w-full md:p-0 px-4 pt-4 md:pt-0 flex justify-center mx-auto md:mx-0">
            <div class="w-[30rem] mx-auto">
                <img src="./images/Ikrom.png" alt="gambar iktom">
            </div>

        </div>
    </div>

</section>

<script>
    const texts = [
        "Coding",
        "Programming",
        "Analytical",
        "Design"
    ];

    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type() {
        if (count === texts.length) {
            count = 0;
        }

        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.getElementById('typing').textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 1500); // jeda setelah selesai mengetik
        } else {
            setTimeout(type, 100); // kecepatan mengetik
        }
    }

    type();
</script>
