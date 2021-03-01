<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Silber\Bouncer\Database\Role;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch ($this->method()) {
            case 'POST':
            {
                return [
                    'first_name' => ['required'],
                    'last_name' => ['required'],
                    'username' => ['required', Rule::unique('users')],
                    'email' => ['required', 'email', 'unique:users,email'],
                    'password' => ['required', 'min:8'],
                    'movil_number' => ['nullable'],
                    'role' => Rule::in(Role::all()->pluck('name')),
                    'file' => ['required', 'sometimes', 'image', 'mimes:jpg,jpeg,png'],
                    'date_of_birth' => ['required', 'date'],
                    'gender' => ['required', Rule::in('male', 'female')],
                ];
            }
            case 'PUT':
            {
                return [
                    'first_name' => ['required'],
                    'last_name' => ['required'],
                    'username' => ['required', Rule::unique('users')->ignore($this->user)],
                    'email' => ['required', 'email', Rule::unique('users')->ignore($this->user)],
                    'movil_number' => ['nullable'],
                    'role' => Rule::in(Role::all()->pluck('name')),
                    'file' => ['required', 'sometimes', 'image', 'mimes:jpg,jpeg,png'],
                    'date_of_birth' => ['required', 'date'],
                    'gender' => ['required', Rule::in('male', 'female')],
                ];
            }

        }

    }
}
