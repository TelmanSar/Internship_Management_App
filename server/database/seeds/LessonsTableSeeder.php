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
            'lesson_name' => "PHP Lesson 1",
            'lesson_description' => 'Basics',
            'lesson_link' => 'lesson1.example.com',
            'available_at' => '2020-11-02 20:10:10',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' =>\Carbon\Carbon::now()->toDateTimeString()
        ]);
        DB::table('lessons')->insert([
            'topic_id' => "1",
            'lesson_name' => "PHP Lesson 2",
            'lesson_description' => 'Syntax and Execution',
            'lesson_link' => 'lesson2.example.com',
            'available_at' => '2020-11-20 20:10:10',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' =>\Carbon\Carbon::now()->toDateTimeString()
        ]);
    }
}
