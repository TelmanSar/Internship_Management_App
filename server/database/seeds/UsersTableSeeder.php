<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => "Telman",
            'lastname' => "Saroyan",
            'email' => "telman.saroyan@gmail.com",
            'password' => Hash::make('123456qwerty'),
            'role_id' => '3',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' =>\Carbon\Carbon::now()->toDateTimeString()
        ]);
        DB::table('users')->insert([
            'name' => "Levon",
            'lastname' => "Ayvazyan",
            'email' => "levon.ayvazyan@gmail.com",
            'password' => Hash::make('qwerty1234'),
            'role_id' => '3',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' =>\Carbon\Carbon::now()->toDateTimeString()
        ]);
        DB::table('users')->insert([
            'name' => "Armen",
            'lastname' => "Mshetsyan",
            'email' => "armen.mshetsyan@gmail.com",
            'password' => Hash::make('qwerty111111'),
            'role_id' => '1',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' =>\Carbon\Carbon::now()->toDateTimeString()
        ]);
    }
}
