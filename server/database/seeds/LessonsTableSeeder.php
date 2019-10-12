<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LessonsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('lessons')->insert([
            'topic_id' => "1",
            'name' => "PHP Lesson 1",
            'description' => 'Basics',
            'link' => 'lesson1.example.com',
            'schedule' => '2020-11-02 20:10:10',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' =>\Carbon\Carbon::now()->toDateTimeString()
        ]);
        DB::table('lessons')->insert([
            'topic_id' => "1",
            'name' => "PHP Lesson 2",
            'description' => 'Syntax and Execution',
            'link' => 'lesson2.example.com',
            'schedule' => '2020-11-20 20:10:10',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' =>\Carbon\Carbon::now()->toDateTimeString()
        ]);
    }
}
