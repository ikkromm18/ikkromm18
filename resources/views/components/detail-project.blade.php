<div class="flex flex-col py-8">
    {{-- Carousel --}}
    <div id="{{ Str::slug($title) }}-carousel" class="relative w-full" data-carousel="static">
        <div class="relative h-[20rem] md:h-[35rem] rounded-lg bg-gray-200 overflow-hidden">
            @foreach ($images as $index => $img)
                <div class="{{ $index === 0 ? '' : 'hidden' }} duration-700 ease-in-out"
                    data-carousel-item="{{ $index === 0 ? 'active' : '' }}">
                    <img src="{{ $img }}" alt="..." class="absolute top-0 left-0 w-full h-full object-cover">
                </div>
            @endforeach
        </div>

        {{-- Carousel controls --}}
        <button type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev>
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                <svg class="w-4 h-4 text-white rtl:rotate-180" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next>
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>

    {{-- Title --}}
    <h2 class="text-center mx-auto mt-8 font-bold text-4xl">{{ $title }}</h2>

    {{-- Link --}}
    <a href="{{ $url }}" target="_blank" rel="noopener noreferrer" class="mx-auto text-blue-500">
        link website
    </a>

    {{-- Tech Stack --}}
    <div class="flex mt-4 justify-center flex-wrap">
        @foreach ($techs as $tech)
            <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 mb-2 px-2.5 py-0.5 rounded-sm">
                {{ $tech }}
            </span>
        @endforeach
    </div>

    {{-- Description --}}
    <p class="mt-4 text-center">{{ $description }}</p>
</div>
