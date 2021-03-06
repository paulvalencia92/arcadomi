<?php

use App\Http\Controllers\{AdvertisementController, AuthController, RoleController, RolesController, UnitController};
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
    Route::get('/units/contact/{unit}', [UnitController::class, 'getUnitContacts']);
    Route::post('/units/contact', [UnitController::class, 'createContact']);


    /**=================================
     *    Roles
     *================================**/
    Route::apiResource('/roles', 'RoleController');
    Route::get('/roles-abilities', [RoleController::class, 'getAbilities']);

    /**=================================
     *   Categorias Anuncios
     *================================**/
    Route::apiResource('/advertisement-categories', 'AdvertisementCategoryController');

    /**=================================
     *   Anuncios
     *================================**/
    Route::apiResource('/advertisements', 'AdvertisementController');
    Route::get('/advertisements-published', [AdvertisementController::class, 'getPublished']);
    Route::post('/advertisements-comments/{advertisement}', [AdvertisementController::class, 'addComment']);
    Route::delete('/advertisements-comments/{advertisement}', [AdvertisementController::class, 'deleteComment']);


    /**=================================
     *    Auth
     *================================**/
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');


});

Route::post('/login', [AuthController::class, 'login']);
