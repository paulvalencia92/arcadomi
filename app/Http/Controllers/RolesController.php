<?php

namespace App\Http\Controllers;

use Silber\Bouncer\Database\Role;

class RolesController extends Controller
{
    public function index()
    {
        $roles = Role::orderBy('title', 'ASC')->get();
        return response()->json($roles, 200);
    }
}
