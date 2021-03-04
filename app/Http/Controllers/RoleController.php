<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Silber\Bouncer\Database\Role;

class RoleController extends Controller
{

    public function index()
    {
        Role::with([
            'abilities' => function ($query) {
                $query->orderBy('title', 'ASC');
            }
        ])->orderBy('name', 'ASC')->get();
    }


    public function store(Request $request)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
