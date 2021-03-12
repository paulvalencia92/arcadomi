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


Route::get('/tests', function () {

    return \App\Models\Advertisement::all();
});


Route::get('/{any}', 'VitoController')->where('any', '.*');
