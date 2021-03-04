<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    protected $guarded = [];

    public function type_unit()
    {
        return $this->belongsTo(TypeUnit::class);
    }

    public function block()
    {
        return $this->belongsTo(Block::class);
//        return $this->belongsTo(Block::class)->withDefault();
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

}
