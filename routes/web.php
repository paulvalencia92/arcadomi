<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


use App\Models\User;

Route::get('/tests', function (){
   return User::with('profile')->get();
});

Route::get('/{any}', 'VitoController')->where('any', '.*');
