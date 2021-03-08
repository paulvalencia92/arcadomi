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
use Silber\Bouncer\Database\Ability;
use Silber\Bouncer\Database\Role;

Route::get('/tests', function () {

    $abilities = Ability::orderBy('title', 'ASC')->get();
    return response()->json($abilities, 200);
});



Route::get('/{any}', 'VitoController')->where('any', '.*');
