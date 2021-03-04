<?php

use App\Http\Controllers\{AuthController, RolesController, UnitController};
use Illuminate\Support\Facades\Route;

Auth::routes();


Route::group(['middleware' => 'auth:api'], function () {

    Route::get('/roles', [RolesController::class, 'index']);


    /**=================================
     *    User
     *================================**/
    Route::apiResource('/users', 'UserController');

    /**=================================
     *    Block
     *================================**/
    Route::apiResource('/blocks', 'BlockController');

    /**=================================
     *    Type Units
     *================================**/
    Route::apiResource('/type-units', 'TypeUnitController');


    /**=================================
     *    Units
     *================================**/
    Route::apiResource('/units', 'UnitController');
    Route::get('/units/contact/{unit}', [UnitController::class,'getUnitContacts']);
    Route::post('/units/contact', [UnitController::class,'createContact']);

    /**=================================
     *    Auth
     *================================**/
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

});

Route::post('/login', [AuthController::class, 'login']);
