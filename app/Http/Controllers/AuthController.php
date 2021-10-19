<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login()
    {
        try {
            $this->validate(request(), [
                'email' => 'required|email',
                'password' => 'required|string'
            ]);

            $credentials = request(['email', 'password']);

            if (!Auth::attempt($credentials)) {
                return response()->json(['errors' => ['Usuario y Contraseña no coinciden']], 401);
            }

            $user = request()->user();

//            $role = $user->roles->pluck('name')->first();
            $abilities = $user->getAbilities()->pluck('name')->push('404')->push('403')->push('500')->push('dashboard');
            $token = $user->createToken('Personal Access Client');

            return response()->json([
                'user' => $user,
//                'role' => $role,
                'abilities' => $abilities,
                'access_token' => $token->accessToken,
            ]);

        } catch (ValidationException $e) {
            return response()->json($e->validator->errors());
        }

    }


    public function logout()
    {
        auth()->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json('Logged out successfully', 200);

    }
}
