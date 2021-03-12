<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdvertisementRequest extends FormRequest
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
            'title' => ['required'],
            'publication_date' => ['sometimes', 'required', 'date'],
            'is_published' => ['nullable'],
            'is_featured' => ['nullable'],
            'block_comments' => ['nullable'],
            'massive_mail' => ['nullable'],
            'description' => ['sometimes', 'required'],
            'file' => ['required', 'sometimes', 'image', 'mimes:jpg,jpeg,png'],
            'blocks_id' => ['sometimes', 'required'],
            'advertisement_category_id' => ['required', 'exists:App\Models\AdvertisementCategory,id'],
        ];
    }
}
