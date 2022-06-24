<?php

use App\Http\Controllers\Person\PersonController as PersonController;
use App\Http\Controllers\User\UserController as UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [\App\Http\Controllers\AuthController::class, 'login']);
    Route::post('logout', [\App\Http\Controllers\AuthController::class, 'logout']);
    Route::post('refresh', [\App\Http\Controllers\AuthController::class, 'refresh']);
    Route::post('me', [\App\Http\Controllers\AuthController::class, 'me']);

    Route::group(['middleware' => 'jwt.auth'], function () {
        Route::group([
            'namespace' => 'Person',
            'prefix' => 'people',
        ], function () {
            Route::get('/', [PersonController::class, 'index']);
            Route::post('/', [PersonController::class, 'store']);
            Route::get('/{person}', [PersonController::class, 'show']);
            Route::patch('/{person}', [PersonController::class, 'update']);
            Route::delete('/{person}', [PersonController::class, 'destroy']);
        });
    });

});



Route::group([
    'namespace' => 'User',
    'prefix' => 'users',
], function () {
    Route::post('/', [UserController::class, 'register']);
});

