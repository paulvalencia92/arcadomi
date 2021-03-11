<?php

namespace App\Http\Requests;

use App\Models\AdvertisementCategory;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AdvertisementCategoryRequest extends FormRequest
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
            'name' => ['required'],
            'permission' => ['required', Rule::in(AdvertisementCategory::advertisementCategoryTypes())],
            'description' => ['required', 'sometimes'],
            'file' => ['required', 'sometimes', 'image', 'mimes:jpg,jpeg,png'],
        ];
    }
}
