<?php

namespace App\Http\Controllers;

use App\Http\Requests\UnitRequest;
use App\Models\Unit;
use Illuminate\Http\Request;

class UnitController extends Controller
{

    public function index()
    {
        //
    }


    public function store(UnitRequest $request)
    {
        $unit = Unit::create([
            'type_unit_id' => $request->type_unit_id,
            'number' => $request->number,
            'user_id' => $request->user_id,
        ]);

        return response()->json($unit, 201);
    }


    public function show(Unit $unit)
    {
        //
    }


    public function update(Request $request, Unit $unit)
    {
        //
    }


    public function destroy(Unit $unit)
    {
        //
    }
}
