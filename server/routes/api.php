<?php

use App\Http\Controllers\TopicController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('auth/login', 'AuthController@login');
Route::post('auth/logout', 'AuthController@logout');
Route::middleware(['auth:api','jwt.refresh' ])->group(function() {

    Route::get('auth/me', 'AuthController@me');

    Route::group(['prefix' => 'users'], function(){
        Route::get('/','UserController@index')->middleware('checkPermission:get_users');
        Route::get('{id}', 'UserController@show')->middleware('checkPermission:get_user');
        Route::post('/', 'UserController@store')->middleware('checkPermission:add_user');
        Route::put('{id}', 'UserController@update')->middleware('checkPermission:update_user');
        Route::delete('{id}', 'UserController@destroy')->middleware('checkPermission:delete_user');
    });

    Route::group(['prefix' => 'topics'], function () {
        Route::get('/','TopicController@index')->middleware('checkPermission:get_topics');
        Route::get('{id}', 'TopicController@show')->middleware('checkPermission:get_topic');
        Route::post('/', 'TopicController@store')->middleware('checkPermission:add_topic');
        Route::put('{id}', 'TopicController@update')->middleware('checkPermission:update_topic');
        Route::delete('{id}', 'TopicController@destroy')->middleware('checkPermission:delete_topic');
    });

    Route::group(['prefix' => 'lessons'], function () {
        Route::get('/{topic_id}','LessonController@index')->middleware('checkPermission:get_lessons');
        Route::get('{id}', 'LessonController@show')->middleware('checkPermission:get_lesson');
        Route::post('/', 'LessonController@store')->middleware('checkPermission:add_lesson');
        Route::put('{id}', 'LessonController@update')->middleware('checkPermission:update_lesson');
        Route::delete('{id}', 'LessonController@destroy')->middleware('checkPermission:delete_lesson');
    });
});




