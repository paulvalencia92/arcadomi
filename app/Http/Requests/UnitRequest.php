<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UnitRequest extends FormRequest
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
                    'type_unit_id' => ['required', 'exists:App\Models\TypeUnit,id'],
                    'number' => ['required'],
                    'user_id' => ['required', 'exists:App\Models\User,id'],
                ];
            }
        }
    }
}
