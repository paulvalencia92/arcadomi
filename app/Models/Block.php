<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Block extends Model
{
    protected $guarded = [];

    public function units()
    {
        return $this->hasMany(Unit::class);
    }
}
