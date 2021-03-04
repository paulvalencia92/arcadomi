<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->truncate();
        Artisan::call('passport:install --force');
        $this->call([BouncerSeeder::class, UserSeeder::class, TypeUnitSeeder::class]);

    }


    public function truncate()
    {
        $this->truncateTables([
            'bouncer_abilities',
            'bouncer_assigned_roles',
            'bouncer_permissions',
            'bouncer_roles',
            'failed_jobs',
            'oauth_access_tokens',
            'oauth_auth_codes',
            'oauth_clients',
            'oauth_personal_access_clients',
            'oauth_refresh_tokens',
            'password_resets',
            'users',
            'blocks',
            'type_units'
        ]);
    }


    protected function truncateTables(array $tables)
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0;');

        foreach ($tables as $table) {
            DB::table($table)->truncate();
        }

        DB::statement('SET FOREIGN_KEY_CHECKS = 1;');
    }
}
