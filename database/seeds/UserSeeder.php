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
        $superadmin = User::create([
            'username' => 'paulvalencia92',
            'first_name' => 'Paul',
            'last_name' => 'Valencia',
            'email' => 'admin@arcadomi.com',
            'password' => Hash::make('password'),
            'date_of_birth' => '2000-02-01',
            'gender' => 'male',
        ]);

        $superadmin->assign('super-admin');


        $admin = User::create([
            'username' => 'alejandroaroca',
            'first_name' => 'Alejandro',
            'last_name' => 'Aroca',
            'email' => 'alejandroaroca@arcadomi.com',
            'password' => Hash::make('password'),
            'date_of_birth' => '2000-02-01',
            'gender' => 'male',
        ]);

        $admin->assign('admin');


        $propietario1 = User::create([
            'username' => 'carlosaroca',
            'first_name' => 'Carlos',
            'last_name' => 'Aroca',
            'email' => 'carlosaroca@arcadomi.com',
            'password' => Hash::make('password'),
            'date_of_birth' => '2000-02-01',
            'gender' => 'male',
        ]);

        $propietario1->assign('propietario');


        $propietario2 = User::create([
            'username' => 'silviagonzalez24',
            'first_name' => 'Silvia',
            'last_name' => 'Gonzalez',
            'email' => 'silviagonzalez24@arcadomi.com',
            'password' => Hash::make('password'),
            'date_of_birth' => '2000-02-01',
            'gender' => 'female',
        ]);

        $propietario2->assign('propietario');

    }
}
