<?php

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

Route::get('eletrodomesticos', [App\Http\Controllers\EletrodomesticoController::class, 'index'])->name('api.eletrodomesticos');
Route::get('eletrodomesticos/{eletrodomestico}', [App\Http\Controllers\EletrodomesticoController::class, 'show'])->name('api.eletrodomesticos.show');
Route::post('eletrodomesticos', [App\Http\Controllers\EletrodomesticoController::class, 'store'])->name('api.eletrodomesticos.store');
Route::put('eletrodomesticos/{eletrodomestico}', [App\Http\Controllers\EletrodomesticoController::class, 'update'])->name('api.eletrodomesticos.update');
Route::delete('eletrodomesticos/{eletrodomestico}', [App\Http\Controllers\EletrodomesticoController::class, 'delete'])->name('api.eletrodomesticos.delete');
