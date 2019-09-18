<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @method static create(array $all)
 */
class Topic extends Model
{
    protected $fillable = [
        'topic_name', 'topic_description', 'available_at',
    ];

    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }
}
