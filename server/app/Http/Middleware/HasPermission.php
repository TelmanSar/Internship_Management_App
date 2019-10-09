<?php

namespace App\Http\Middleware;
use App\User;


use Closure;

class HasPermission
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @param $permission
     * @return mixed
     */
    public function handle($request, Closure $next, $permission)
    {
        if(!auth()->user()->checkPermission($permission)){
            return response()->json([
                'message' => 'You don\'t have such permission' ,
                'status' => 'Unauthorized',
            ],401);
        }

        return $next($request);
    }
}
