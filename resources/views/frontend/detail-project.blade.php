@extends('layouts.frontend')
@section('title', 'Detail Project')
@section('content')



    <section class="dark:bg-gray-900 ">
        <div class="mx-auto max-w-screen-xl">

            {{-- <x-detail-project /> --}}

            <x-detail-project title="Website Rumah BUMN Telkom Pekalongan" url="http://rbpekalongan.id" :images="[asset('images/rb1.png'), asset('images/rb2.png'), asset('images/rb3.png')]"
                :techs="['Laravel', 'TailwindCSS', 'Flowbite']"
                description="Website Rumah BUMN merupakan proyek website bersama AGSA Dev. saya berkolaborasi dengan tim dalam merealisasikan permintaan khusus dari Rumah BUMN Telkom Kota Pekalongan. Web ini mengcover keperluan operasional seperti Booking Ruangan, Pendaftaran Event, dan Pendaftaran UMKM Binaan." />

            <x-detail-project title="Website ALTON Online Shop" url="#" :images="[asset('images/alton1.png'), asset('images/alton2.png'), asset('images/alton3.png')]" :techs="['Laravel', 'TailwindCSS', 'Livewire', 'Flowbite']"
                description="Website ALTON merupakan website yang saya buat bersama AGSA Dev. Alton adalah sebuah brand pakaian jadi dibawah PT Dakota Mitra Tama, Kabupaten Pekalongan.
Alton Online Shop dibuat untuk menghandle penjualan produk-produk mereka." />

            <x-detail-project title="Website Pelayanan Administrasi Di PEMDES Wonoyoso"
                url="https://pemdeswonoyoso.agsa.site/" :images="[asset('images/pemdes1.png'), asset('images/pemdes2.png'), asset('images/pemdes3.png')]" :techs="['Laravel', 'TailwindCSS', 'PWA', 'Flowbite']"
                description="WWebsite ini merupakan tugas akhir saya. website ini berguna untuk membantu warga di Desa Wonoyoso untuk melakukan pengajuan administrasi dimana saja. serta membantu perangkat desa untuk mengelola keadministrasian surat-menyurat." />

            <x-detail-project title="Katalog Restaurant" url="#" :images="[asset('images/r1.png'), asset('images/r2.png'), asset('images/r3.png')]" :techs="['HTML', 'JavaScript', 'CSS', 'Webpack']"
                description="Website ini dibuat saat saya mengikuti program Studi Independen Bersertifikat di Dicoding. Proyek ini merupakan tugas akhir dari salah satu kelas yang saya ikuti, dengan konten berupa daftar restoran, Menu, dan Testimoni yang datanya diambil dari API." />


        </div>
    </section>





@endsection
