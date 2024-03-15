<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class TodoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'what_to_do' => 'required|max:30',
            'prior_level' => 'required',
            'deadline' => 'required'
        ];
    }

    public function messages(): array
    {
        return [
            'what_to_do.required' => "Todoを入力してください",
            'what_to_do.max' => "Todoは30字以下で入力してください",
            'prior_level.required' => '優先度を選択してください',
            'deadline.required' => "期限を入力してください"
        ];
    }
}
