<?php

namespace App\Http\Controllers;

use App\Models\TypeUnit;
use Illuminate\Http\Request;

class TypeUnitController extends Controller
{

    public function index()
    {
        $typeUnits = TypeUnit::all();
        return response()->json($typeUnits, 200);
    }


    public function store(Request $request)
    {
        //
    }


    public function show(TypeUnit $typeUnit)
    {
        //
    }


    public function update(Request $request, TypeUnit $typeUnit)
    {
        //
    }


    public function destroy(TypeUnit $typeUnit)
    {
        //
    }
}
