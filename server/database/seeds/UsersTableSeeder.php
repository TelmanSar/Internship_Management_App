<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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
            'email' => "TelmanSaroyan".'@gmail.com',
            'password' => Hash::make('password1'),
        ]);
        DB::table('users')->insert([
            'name' => "Levon",
            'email' => "LevonAyvazyan".'@gmail.com',
            'password' => Hash::make('password2'),
        ]);
    }
}
