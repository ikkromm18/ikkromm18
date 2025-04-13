<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('frontend.beranda');
})->name('beranda');

Route::get('/detail-project', function () {
    return view('frontend.detail-project');
})->name('detail');
