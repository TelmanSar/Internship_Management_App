<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    protected $fillable = [
        'lesson_name', 'lesson_description', 'available_at', 'lesson_link'
    ];

    public function topic()
    {
        return $this->belongsTo(Topic::class);
    }
}
