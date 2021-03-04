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
use App\Models\Unit;

Route::get('/tests', function () {

    $user = \App\Models\User::find(3);
//    $user = \App\Models\User::find(3);
//    return $user->load('units');
     $propietario = \App\Models\User::find(3)->roles()->where('name','propietario')->first();
    return $propietario;
});



Route::get('/{any}', 'VitoController')->where('any', '.*');
