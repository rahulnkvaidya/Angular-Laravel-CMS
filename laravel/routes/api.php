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
    'album'=> 'Albums',
    'album-image'=>'AlbumImages',
    'service'=> 'ServiceController',
    'pageimage' => 'PageImageController'
]);
//////// Team CRUD //////////
Route::get('team', 'Teams@List');
Route::get('team/{id}', 'Teams@Read');
Route::post('team', 'Teams@Create');
Route::post('team/update', 'Teams@Update');
Route::get('team/delete/{id}','Teams@Delete');