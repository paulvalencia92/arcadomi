<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;

//Auth::routes();

Route::group(['middleware' => 'auth:api'], function () {

    Route::apiResource('/users', 'UserController');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

});

Route::post('/login', [AuthController::class, 'login']);
