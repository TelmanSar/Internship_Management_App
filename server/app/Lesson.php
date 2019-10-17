<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    protected $fillable = [
        'name', 'description', 'schedule', 'link'
    ];

    public function topic()
    {
        return $this->belongsTo(Topic::class);
    }
}
