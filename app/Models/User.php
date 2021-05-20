<?php

namespace App\Models;


use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Silber\Bouncer\Database\HasRolesAndAbilities;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, HasRolesAndAbilities;


    protected $guarded = [];


    protected $hidden = [
        'password',
        'remember_token',
    ];


    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = ['role', 'fullname', 'image_profile'];


    public function getRoleAttribute()
    {
        return $this->roles->first()->name;
    }

    public function getFullnameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }

    public function getImageProfileAttribute()
    {
        $ruta = "/storage/users/user-default.png";
        if ($this->image) {
            $ruta = "/storage/users/{$this->image}";
        }
        return $ruta;
    }

    public function units()
    {
        return $this->belongsToMany(Unit::class);
    }


}
