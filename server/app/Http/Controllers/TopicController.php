<?php

namespace App\Http\Controllers;

use App\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TopicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        return Topic::all();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [

            'name' => 'required|string|max:100',
            'description' => 'required|string|max:500',
            'schedule' => 'required|date|date_format:Y-m-d H:i:s'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'status' => 'failed',
                'errors' => $validator->errors()
            ], 422);
        }
        Topic::create($request->all());

        return response()->json([
            'message' => 'Topic Saved Successfully',
            'status' => 'success',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model
     */
    public function show($id)
    {
        $model = Topic::query()->find($id);
        if (!$model) {
            return response()->json([
                'message' => 'Topic does not exist',
                'status' => 'fail',
            ]);
        }
        return $model;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $model = Topic::query()->find($id);
        if (!$model) {
            return response()->json([
                'message' => 'Topic does not exist',
                'status' => 'fail',
            ]);
        }

        $validator = Validator::make($request->all(), [

            'name' => 'required|string|max:100',
            'description' => 'required|string|max 500',
            'schedule' => 'required|date_format:Y/m/d H:i:s'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'status' => 'failed',
                'errors' => $validator->errors()
            ],422);
        }

        $model->update($request->all());

        return response()->json([
            'message' => 'Topic Updated Successfully',
            'status' => 'success',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy($id)
    {
        $model = Topic::query()->find($id);
        if (!$model) {
            return response()->json([
                'message' => 'Topic does not exist',
                'status' => 'fail',
            ]);
        }
        $model->delete();

        return response()->json([
            'message' => 'Topic deleted Successfully',
            'status' => 'success',
        ]);
    }
}
