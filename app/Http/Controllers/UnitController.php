<?php

namespace App\Http\Controllers;

use App\Http\Requests\UnitRequest;
use App\Models\Unit;
use App\Models\User;
use App\Traits\Unit\ManageContact;
use Illuminate\Support\Facades\DB;


class UnitController extends Controller
{
    use ManageContact;

    public function index()
    {
        $units = Unit::with('type_unit', 'block')->withCount('users')->get();
        return response()->json($units, 200);
    }


    public function store(UnitRequest $request)
    {

        DB::beginTransaction();
        $unit = Unit::create([
            'type_unit_id' => $request->type_unit_id,
            'number' => $request->number,
            'name' => $request->number,
            'block_id' => $request->block_id
        ]);

        $propietario = User::find($request->user_id)->roles()->where('name', 'propietario')->first();

        $unit->users()->sync([
            $request->user_id => [
                'primary_contact' => true,
                'bouncer_assigned_role_id' => $propietario->id
            ]
        ]);

        DB::commit();
        return response()->json($unit->load('type_unit', 'block')->loadCount('users'), 201);
    }


    public function update(UnitRequest $request, Unit $unit)
    {
        $unit->type_unit_id = $request->type_unit_id;
        $unit->number = $request->number;
        $unit->name = $request->name;
        $unit->block_id = $request->block_id;
        $unit->update();
        return response()->json($unit->load('type_unit', 'block')->loadCount('users'), 201);

    }


    public function destroy(Unit $unit)
    {
        $unit->delete();
        return response()->json('Unit deleted success', 200);

    }
}
