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

Route::get('/', function () {
    return view('welcome');
});

//////// Home CRUD //////////
Route::get('api/team', 'teams@teamApi');
// Route::get('api/team/{id}', 'teams@teamApiId');
// Route::post('api/team.html', 'teams@teamCreate');
// Route::post('api/team/edit', 'teams@teamUpdate');
// Route::get('api/team/delete/{id}','teams@teamDelete');