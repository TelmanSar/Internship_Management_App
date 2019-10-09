<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class PermissionRoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Super Admin's permissions
        //User related
        //Get users
        DB::table('permission_role')->insert([
            'role_id' => '1',
            'permission_id' => "1",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Get user
        DB::table('permission_role')->insert([
            'role_id' => '1',
            'permission_id' => "2",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Delete user
        DB::table('permission_role')->insert([
            'role_id' => '1',
            'permission_id' => "3",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Add user
        DB::table('permission_role')->insert([
            'role_id' => '1',
            'permission_id' => "4",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Update user
        DB::table('permission_role')->insert([
            'role_id' => '1',
            'permission_id' => "5",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Topic related
        // Get topics
        DB::table('permission_role')->insert([
            'role_id' => '1',
            'permission_id' => "6",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Get topic
        DB::table('permission_role')->insert([
            'role_id' => '1',
            'permission_id' => "7",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Delete topic
        DB::table('permission_role')->insert([
            'role_id' => '1',
            'permission_id' => "8",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Add topic
        DB::table('permission_role')->insert([
            'role_id' => '1',
            'permission_id' => "9",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Update topic
        DB::table('permission_role')->insert([
            'role_id' => '1',
            'permission_id' => "10",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Lesson related
        //Get lessons
        DB::table('permission_role')->insert([
            'role_id' => '1',
            'permission_id' => "11",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Get lesson
        DB::table('permission_role')->insert([
            'role_id' => '1',
            'permission_id' => "12",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Delete lesson
        DB::table('permission_role')->insert([
            'role_id' => '1',
            'permission_id' => "13",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Add lesson
        DB::table('permission_role')->insert([
            'role_id' => '1',
            'permission_id' => "14",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Update lesson
        DB::table('permission_role')->insert([
            'role_id' => '1',
            'permission_id' => "15",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);

        //Admin's permissions
        //User related
        //Get users
        DB::table('permission_role')->insert([
            'role_id' => '2',
            'permission_id' => "1",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Get user
        DB::table('permission_role')->insert([
            'role_id' => '2',
            'permission_id' => "2",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Add user
        DB::table('permission_role')->insert([
            'role_id' => '2',
            'permission_id' => "4",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Update user
        DB::table('permission_role')->insert([
            'role_id' => '2',
            'permission_id' => "5",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);

        //Topic Related
        //Get topics
        DB::table('permission_role')->insert([
            'role_id' => '2',
            'permission_id' => "6",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Get topic
        DB::table('permission_role')->insert([
            'role_id' => '2',
            'permission_id' => "7",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Add topic
        DB::table('permission_role')->insert([
            'role_id' => '2',
            'permission_id' => "9",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Update topic
        DB::table('permission_role')->insert([
            'role_id' => '2',
            'permission_id' => "10",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Lesson related
        //Get lessons
        DB::table('permission_role')->insert([
            'role_id' => '2',
            'permission_id' => "11",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Get lesson
        DB::table('permission_role')->insert([
            'role_id' => '2',
            'permission_id' => "12",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Add Lesson
        DB::table('permission_role')->insert([
            'role_id' => '2',
            'permission_id' => "14",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Update lesson
        DB::table('permission_role')->insert([
            'role_id' => '2',
            'permission_id' => "15",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);

        //Intern's permissions
        //Topic related
        //Get topics
        DB::table('permission_role')->insert([
            'role_id' => '3',
            'permission_id' => "6",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Get topic
        DB::table('permission_role')->insert([
            'role_id' => '3',
            'permission_id' => "7",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Lesson related
        //Get Lessons
        DB::table('permission_role')->insert([
            'role_id' => '3',
            'permission_id' => "11",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        //Get Lesson
        DB::table('permission_role')->insert([
            'role_id' => '3',
            'permission_id' => "12",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
    }
}
