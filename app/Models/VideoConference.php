<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VideoConference extends Model
{
    protected $guarded = [];

    protected static function boot()
    {
        parent::boot();
        // Cuando se este creando un registro o actualizando
        self::saving(function ($table) {
            $table->user_id = auth()->id();
        });
    }

}
