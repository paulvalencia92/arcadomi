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


use App\Models\Unit;

Route::get('/tests', function () {
    $units = Unit::with('user', 'type_unit', 'block')->get();
    return response()->json($units, 200);
});

Route::get('/{any}', 'VitoController')->where('any', '.*');
