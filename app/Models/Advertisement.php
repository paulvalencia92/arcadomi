<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Advertisement extends Model
{
    protected $guarded = [];

    protected static function boot()
    {
        parent::boot();
        self::saving(function ($table) {
            $table->user_id = auth()->id();
        });
    }

    public function advertisement_category()
    {
        return $this->belongsTo(AdvertisementCategory::class);
    }
}
