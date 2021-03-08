<?php

use Illuminate\Database\Seeder;

class BouncerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createAbilities();
        $this->createRoles();
    }


    protected function createRoles()
    {
        $superadmin = Bouncer::role()->create([
            'name' => 'super-admin',
            'title' => 'Super administrador',
        ]);

        $superadmin->allow()->everything();

        Bouncer::role()->create([
            'name' => 'admin',
            'title' => 'Administrador',
        ]);

        Bouncer::role()->create([
            'name' => 'propietario',
            'title' => 'Propietario',
        ]);

        Bouncer::role()->create([
            'name' => 'arrendatario',
            'title' => 'Arrendatario',
        ]);

        Bouncer::role()->create([
            'name' => 'inmobiliaria',
            'title' => 'Inmobiliaria',
        ]);

        Bouncer::role()->create([
            'name' => 'empleada-domestica',
            'title' => 'Empleada domestica',
        ]);
    }


    protected function createAbilities()
    {

    }
}
