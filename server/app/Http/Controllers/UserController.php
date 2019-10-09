<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return User[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        return User::all();
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
            'lastname' => 'required|string|max:100',
            'email' => 'required|email|unique:users|string|max:100',
            'role' => 'required|integer|between:1,3',
            'password' => 'required|string|max:30',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'status' => 'failed',
                'errors' => $validator->errors()
            ]);
        }

        $model = new User();
        $model->name = $request->get('name');
        $model->lastname = $request->get('lastname');
        $model->email = $request->get('email');
        $model->role_id = $request->get('role_id');
        $model->password = Hash::make($request->get('password'));
        $model->save();



        return response()->json([
            'message' => 'User Saved Successfully',
            'status' => 'success',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $model = User::query()->find($id);
        if (!$model) {
            return response()->json([
                'message' => 'User does not exist',
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
        $model = User::query()->find($id);
        if (!$model) {
            return response()->json([
                'message' => 'User does not exist',
                'status' => 'fail',
            ]);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'lastname' => 'required|string|max:100',
            'email' => 'required|email|string|max:100',
            'role' => 'required|string|max:50',
            'password' => 'required|string|max:30',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'status' => 'failed',
                'errors' => $validator->errors()
            ]);
        }
        $model->name = $request->get('name');
        $model->lastname = $request->get('lastname');
        $model->email = $request->get('email');
        $model->role_id = $request->get('role_id');
        $model->password = Hash::make($request->get('password'));
        $model->save();

        return response()->json([
            'message' => 'User Updated Successfully',
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
        $model = User::query()->find($id);
        if (!$model) {
            return response()->json([
                'message' => 'User does not exist',
                'status' => 'fail',
            ]);
        }
        $model->delete();

        return response()->json([
            'message' => 'User deleted Successfully',
            'status' => 'success',
        ]);
    }
}
