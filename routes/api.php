<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\BookController;

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

Route::prefix('v1')->group(function () {
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('book', [BookController::class, 'index']);
        Route::delete('logout', [LoginController::class, 'logout']);
        Route::post('addbook', [BookController::class, 'create']);
        Route::delete('deletebook/{id}', [BookController::class, 'destroy']);
        Route::get('editbook/{id}', [BookController::class, 'edit']);
        Route::post('updatebook/{id}', [BookController::class, 'update']);
    });
});

Route::post('register_user', [RegisterController::class, 'store']);
Route::post('login_user', [LoginController::class, 'login']);