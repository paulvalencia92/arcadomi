<?php

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'username' => 'paulvalencia92',
            'first_name' => 'Paul',
            'last_name' => 'Valencia',
            'name' => 'Paul Valencia',
            'email' => 'admin@arcadomi.com',
            'password' => Hash::make('password')
        ]);
    }
}
