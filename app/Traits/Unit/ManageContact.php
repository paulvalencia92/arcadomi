<?php


namespace App\Traits\Unit;


use App\Http\Requests\UnitContactRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

trait ManageContact
{
    public function createContact(UnitContactRequest $request)
    {
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'username' => $request->username,
            'email' => $request->email,
            'movil_number' => $request->movil_number,
            'date_of_birth' => $request->date_of_birth,
            'gender' => $request->gender,
            'password' => Hash::make('arcadomi'),
        ]);

        $user->assign($request->role);

        $user->units()->sync($request->unit_id);

        return $user;

    }

}
