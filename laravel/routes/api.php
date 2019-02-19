<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResources([
    'service'=> 'ServiceController',
    'pageimage' => 'PageImageController'
]);
//////// Team CRUD //////////
Route::get('team', 'Teams@List');
Route::get('team/{id}', 'Teams@Read');
Route::post('team', 'Teams@Create');
Route::post('team/update', 'Teams@Update');
Route::get('team/delete/{id}','Teams@Delete');
//////// Album CRUD //////////
Route::get('album', 'Albums@List');
Route::get('album/{id}', 'Albums@Read');
Route::post('album', 'Albums@Create');
Route::post('album/update', 'Albums@Update');
Route::get('album/delete/{id}','Albums@Delete');
//////// Album Images CRUD //////////
Route::get('album-images/{id}', 'AlbumImages@List');
Route::post('album-images', 'AlbumImages@Create');
Route::post('album-images/update', 'AlbumImages@Update');
Route::get('album-images/delete/{id}','AlbumImages@Delete');