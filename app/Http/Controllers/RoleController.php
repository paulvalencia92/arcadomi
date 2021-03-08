<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleRequest;
use Bouncer;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Silber\Bouncer\Database\{Ability, Role};


class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::with([
            'abilities' => function ($query) {
                $query->orderBy('title', 'ASC');
            }
        ])->orderBy('name', 'ASC')->get();
        return response()->json($roles, 200);
    }


    public function store(RoleRequest $request)
    {
        $role = $request->title;
        $roleLower = Str::lower($role);
        $name = Str::slug($roleLower, '-');

        $role = Bouncer::role()->create([
            'name' => $name,
            'title' => $request->title,
        ]);

        return response()->json($role, 201);

    }


    public function update(RoleRequest $request, Role $role)
    {

        DB::beginTransaction();
        $title = $request->title;
        $name_lower = Str::lower($title);
        $name = Str::slug($name_lower, '-');

        $role->update([
            'title' => $request->title,
            'name' => $name
        ]);

        Bouncer::disallow($role->name)->everything();


        foreach ($role->abilities as $ability) {
            Bouncer::disallow($role->name)->to($ability->name);

        }

        if (isset($request->abilities)) {
            foreach ($request->abilities as $abilitie) {
                Bouncer::allow($role->name)->to($abilitie);
            }
        }


        $data = $role->load([
            'abilities' => function ($query) {
                $query->orderBy('title', 'ASC');
            }
        ]);

        DB::commit();
        return response()->json($data, 200);
    }


    public function getAbilities()
    {
        $abilities = Ability::orderBy('title', 'ASC')->get();
        return response()->json($abilities, 200);
    }
}
