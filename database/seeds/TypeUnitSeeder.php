<?php

use App\Models\TypeUnit;
use Illuminate\Database\Seeder;

class TypeUnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $typeUnits = ['Apartamento', 'Casa', 'Unidad', 'Interior', 'Local'];
        foreach ($typeUnits as $item) {
            TypeUnit::create([
                'name' => $item
            ]);
        }
    }
}
