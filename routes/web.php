<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!

    https://remixicon.com/
|
*/


use App\Models\Block;

Route::get('/tests', function () {
    $blocks = Block::withCount('units')->get();
    return $blocks;
});



Route::get('/{any}', 'VitoController')->where('any', '.*');
