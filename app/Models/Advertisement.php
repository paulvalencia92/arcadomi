<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Advertisement extends Model
{
    protected $guarded = [];

    protected $casts = [
        'is_published' => 'boolean',
        'is_featured' => 'boolean',
        'block_comments' => 'boolean',
        'massive_mail' => 'boolean',
        'blocks_id' => 'array'
    ];

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

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }


    public function setBlocksIdAttribute($value)
    {
        $this->attributes['blocks_id'] = json_encode(explode(",", $value));
    }
}
