<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   //user related permissions
        DB::table('permissions')->insert([
            'name' => "Get users",
            'slug' => "get_users",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        DB::table('permissions')->insert([
            'name' => "Get user",
            'slug' => "get_user",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        DB::table('permissions')->insert([
            'name' => "Delete user",
            'slug' => "delete_user",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        DB::table('permissions')->insert([
            'name' => "Add user",
            'slug' => "add_user",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        DB::table('permissions')->insert([
            'name' => "Update user",
            'slug' => "update_user",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);

        //Topic related permissions
        DB::table('permissions')->insert([
            'name' => "Get topics",
            'slug' => "get_topics",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        DB::table('permissions')->insert([
            'name' => "Get topic",
            'slug' => "get_topic",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        DB::table('permissions')->insert([
            'name' => "Delete topic",
            'slug' => "delete_topic",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        DB::table('permissions')->insert([
            'name' => "Add topic",
            'slug' => "add_topic",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        DB::table('permissions')->insert([
            'name' => "Update topic",
            'slug' => "update_topic",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);


        //Lesson related permissions
        DB::table('permissions')->insert([
            'name' => "Get lessons",
            'slug' => "get_lessons",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        DB::table('permissions')->insert([
            'name' => "Get lesson",
            'slug' => "get_lesson",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        DB::table('permissions')->insert([
            'name' => "Delete lesson",
            'slug' => "delete_lesson",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        DB::table('permissions')->insert([
            'name' => "Add lesson",
            'slug' => "add_lesson",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
        DB::table('permissions')->insert([
            'name' => "Update lesson",
            'slug' => "update_lesson",
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
    }
}
