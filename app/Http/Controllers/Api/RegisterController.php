<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\ApiController;
use Illuminate\Http\Request;
use App\Http\Requests\CreateUserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends ApiController
{
    public function store(CreateUserRequest $request)
    {
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        return $this->respondCreated('Successfully register user');
    }
}
