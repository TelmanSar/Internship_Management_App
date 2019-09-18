<?php

use App\Http\Controllers\TopicController;
use Illuminate\Http\Request;

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

Route::group(['prefix' => 'topics'], function () {
    Route::get('/','TopicController@index');
    Route::get('{id}', 'TopicController@show');
    Route::post('/', 'TopicController@store');
    Route::put('{id}', 'TopicController@update');
    Route::delete('{id}', 'TopicController@destroy');
});

Route::group(['prefix' => 'lessons'], function () {
    Route::get('/{topic_id}','LessonController@index');
    Route::get('{id}', 'LessonController@show');
    Route::post('/', 'LessonController@store');
    Route::put('{id}', 'LessonController@update');
    Route::delete('{id}', 'LessonController@destroy');
});
