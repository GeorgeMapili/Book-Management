<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\ApiController;
use Illuminate\Http\Request;
use App\Http\Requests\CreateUserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Service\UserService;

class RegisterController extends ApiController
{
    public function store(CreateUserRequest $request, UserService $userService)
    {
        $user = $userService->create($request);

        if($user){
            return $this->respondCreated('Successfully register user');
        }
        return $this->respondInternalServerError();
    }
}
