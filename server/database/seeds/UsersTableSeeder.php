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
        //

        DB::table('users')->insert([
            'name' => "Telman",
            'lastname' => "Saroyan",
            'email' => "telmans.aroyan@gmail.com",
            'password' => '123456qwerty',
            'role' => 'intern',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' =>\Carbon\Carbon::now()->toDateTimeString()
        ]);
        DB::table('users')->insert([
            'name' => "Levon",
            'lastname' => "Ayvazyan",
            'email' => "levonayvazyan@gmail.com",
            'password' => 'qwerty1234',
            'role' => 'intern',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' =>\Carbon\Carbon::now()->toDateTimeString()
        ]);
        DB::table('users')->insert([
            'name' => "Armen",
            'lastname' => "Mshetsyan",
            'email' => "armen.mshetsyan@gmail.com",
            'password' => 'qwerty',
            'role' => 'admin',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' =>\Carbon\Carbon::now()->toDateTimeString()
        ]);
    }
}
