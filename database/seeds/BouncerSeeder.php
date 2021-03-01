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
        $this->createRoles();
    }


    protected function createRoles()
    {
        Bouncer::role()->create([
            'name' => 'super-admin',
            'title' => 'Super administrador',
        ]);

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
    }
}
