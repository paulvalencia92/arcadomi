<?php

namespace App\Http\Controllers;

use App\Helpers\Uploader;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{


    public function index()
    {
        $user = User::get();
        return response()->json($user, 200);
    }

    public function show(User $user)
    {
        return $user->id;
    }



    public function store(UserRequest $request)
    {

        $file = null;
        if ($request->hasFile("file")) {
            $file = Uploader::uploadFile("file", "users");
        }

        $user = User::create($this->userInput($file));

        $user->assign(request('role'));

        return response()->json($user, 201);

    }


    public function update(UserRequest $request, User $user)
    {
        $file = $user->image;
        if ($request->hasFile("image")) {
            if ($user->image) {
                Uploader::removeFile('users', $user->image);
            }
            $file = Uploader::uploadFile('image', 'users');
        }

        if ($user->role != request('role')) {
            $user->retract($user->role);
            $user->assign(request('role'));
        }

        $user->fill($this->userInputUpdate($file))->save();

        return response()->json($user, 201);
    }


    public function destroy(User $user)
    {
        if ($user->image) {
            Uploader::removeFile('users', $user->image);
        }
        $user->delete();
        return response()->json('Success deleted', 200);
    }


    protected function userInput(string $file = null): array
    {
        return [
            'first_name' => request('first_name'),
            'last_name' => request('last_name'),
            'username' => request('username'),
            'email' => request('email'),
            'movil_number' => request('movil_number'),
            'date_of_birth' => request('date_of_birth'),
            'gender' => request('gender'),
            'password' => Hash::make(request('password')),
            'image' => $file,
        ];
    }


    protected function userInputUpdate(string $file = null): array
    {
        return [
            'first_name' => request('first_name'),
            'last_name' => request('last_name'),
            'username' => request('username'),
            'email' => request('email'),
            'movil_number' => request('movil_number'),
            'date_of_birth' => request('date_of_birth'),
            'gender' => request('gender'),
            'image' => $file,
        ];
    }
}
