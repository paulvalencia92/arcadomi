<?php

use App\Models\AdvertisementCategory;
use Illuminate\Database\Seeder;

class AdvertisementCategorySeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        AdvertisementCategory::create([
            'name' => 'Objetos perdidos',
            'permission' => AdvertisementCategory::FREE,
            'image' => 'objetos_perdidos.jpg'
        ]);

        AdvertisementCategory::create([
            'name' => 'Trabajos & reparaciones',
            'permission' => AdvertisementCategory::FREE,
            'image' => 'trabajos_reparaciones.jpg'
        ]);

        AdvertisementCategory::create([
            'name' => 'Información del consejo',
            'permission' => AdvertisementCategory::ONLY_ADMIN,
            'image' => 'informacion_consejo.jpg'
        ]);

        AdvertisementCategory::create([
            'name' => 'Convivencia',
            'permission' => AdvertisementCategory::ONLY_ADMIN,
            'image' => 'convivencia.jpg'
        ]);

        AdvertisementCategory::create([
            'name' => 'Noticias & anuncios',
            'permission' => AdvertisementCategory::ONLY_ADMIN,
            'image' => 'noticias.jpg'
        ]);
    }
}
