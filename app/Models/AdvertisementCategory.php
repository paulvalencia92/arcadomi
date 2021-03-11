<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdvertisementCategory extends Model
{
    const FREE = 1;
    const MUST_BE_APPROVED = 2;
    const ONLY_ADMIN = 3;

    protected $guarded = [];


    public function advertisements()
    {
        return $this->hasMany(Advertisement::class);
    }

    public static function advertisementCategoryTypes()
    {
        return [
            self::FREE,
            self::MUST_BE_APPROVED,
            self::ONLY_ADMIN
        ];
    }
}
