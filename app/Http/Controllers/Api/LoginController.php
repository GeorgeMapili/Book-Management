<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginUserRequest;

class LoginController extends Controller
{
    public function login(LoginUserRequest $request){
        if(Auth::attempt($request->only('email', 'password'))){
            return response()->json(Auth::user(), 200);
        }
        \abort(401);
    }

    public function logout()
    {
        // Auth::logout();
        Auth::guard('web')->logout();
        return response(null, 200);
    }
}
