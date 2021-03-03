<?php

namespace App\Models;


use App\Traits\Hashidable;
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

    protected $appends = ['role', 'fullname'];


    public function getRoleAttribute()
    {
        return $this->roles->first()->name;
    }

    public function getFullnameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }


}
