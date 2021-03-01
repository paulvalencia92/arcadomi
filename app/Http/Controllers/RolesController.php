<?php

namespace App\Http\Controllers;

use Silber\Bouncer\Database\Role;

class RolesController extends Controller
{
    public function index()
    {
        $roles = Role::all();
        return response()->json($roles, 200);
    }
}
