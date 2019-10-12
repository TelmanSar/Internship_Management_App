<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @method static create(array $all)
 */
class Topic extends Model
{
    protected $fillable = [
        'name', 'description', 'schedule',
    ];

    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }
}
