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

Route::get('/users/import', 'Users@import');
Route::get('/posts/import', 'Posts@import');

Route::get('/users', 'Users@all');
Route::get('/users/{id}', 'Users@search');
Route::get('/users/{id}/posts', 'Posts@search');