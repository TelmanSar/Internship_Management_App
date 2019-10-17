<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TopicsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('topics')->insert([
            'name' => "PHP basics",
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at cum eum excepturi exercitationem expedita harum illum inventore itaque molestias nam neque officiis pariatur praesentium, qui quo sequi veritatis voluptatem.',
            'schedule' => '2020-11-02 20:10:10',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' =>\Carbon\Carbon::now()->toDateTimeString()
        ]);
        DB::table('topics')->insert([
            'name' => "MYSQL",
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at cum eum excepturi exercitationem expedita harum illum inventore itaque molestias nam neque officiis pariatur praesentium, qui quo sequi veritatis voluptatem.',
            'schedule' => '2021-11-02 20:10:10',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' =>\Carbon\Carbon::now()->toDateTimeString()
        ]);
    }
}
