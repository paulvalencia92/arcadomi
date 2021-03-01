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
        $admin = User::create([
            'username' => 'paulvalencia92',
            'first_name' => 'Paul',
            'last_name' => 'Valencia',
            'email' => 'admin@arcadomi.com',
            'password' => Hash::make('password'),
            'email' => 'admin@arcadomi.com',
            'date_of_birth' => '2000-02-01',
            'gender' => 'male',
        ]);

        $admin->assign('super-admin');

    }
}
