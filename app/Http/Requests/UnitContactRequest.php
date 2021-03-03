<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Silber\Bouncer\Database\Role;

class UnitContactRequest extends FormRequest
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
        return [
            'first_name' => ['required'],
            'last_name' => ['required'],
            'username' => ['required', Rule::unique('users')],
            'email' => ['required', 'email', 'unique:users,email'],
            'movil_number' => ['nullable'],
            'role' => Rule::in(Role::all()->pluck('name')),
            'date_of_birth' => ['nullable', 'date'],
            'gender' => ['required', Rule::in('male', 'female')],
            'unit_id' => ['required', 'exists:App\Models\Unit,id']
        ];
    }
}
