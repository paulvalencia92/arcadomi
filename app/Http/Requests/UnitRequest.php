<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
        switch ($this->method) {
            case 'POST':
            {

            }
            case 'PUT':
            {

            }
        }


        switch ($this->method()) {
            case 'POST':
            {
                return [
                    'type_unit_id' => ['required', 'exists:App\Models\TypeUnit,id'],
                    'number' => ['required', Rule::unique('units')],
                    'user_id' => ['required', 'exists:App\Models\User,id'],
                    'block_id' => ['nullable', 'sometimes', 'exists:App\Models\Block,id'],
                ];
            }
            case 'PUT':
            {
                return [
                    'type_unit_id' => ['required', 'exists:App\Models\TypeUnit,id'],
                    'number' => ['required', Rule::unique('units')->ignore($this->unit)],
                    'name' => ['required'],
                    'block_id' => ['nullable', 'sometimes', 'exists:App\Models\Block,id'],
                ];
            }

        }

    }
}
