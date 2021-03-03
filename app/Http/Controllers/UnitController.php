<?php

namespace App\Http\Controllers;

use App\Http\Requests\UnitRequest;
use App\Models\Unit;
use App\Traits\Unit\ManageContact;


class UnitController extends Controller
{
    use ManageContact;

    public function index()
    {
        $units = Unit::with('user', 'type_unit', 'block')->get();
        return response()->json($units, 200);
    }


    public function store(UnitRequest $request)
    {
        $unit = Unit::create([
            'type_unit_id' => $request->type_unit_id,
            'number' => $request->number,
            'user_id' => $request->user_id,
            'block_id' => $request->block_id
        ]);

        return response()->json($unit->load('user', 'type_unit', 'block'), 201);
    }


    public function update(UnitRequest $request, Unit $unit)
    {
        $unit->type_unit_id = $request->type_unit_id;
        $unit->number = $request->number;
        $unit->user_id = $request->user_id;
        $unit->block_id = $request->block_id;

        $unit->update();

        return response()->json($unit->load('user', 'type_unit', 'block'), 201);

    }


    public function destroy(Unit $unit)
    {
        $unit->delete();
        return response()->json('Unit deleted success', 200);

    }
}
