<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use App\Http\Requests\TodoRequest;
use App\Http\Resources\TodoResource;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return TodoResource::collection(Todo::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TodoRequest $request)
    {
        Todo::create([
            "what_to_do" => $request->what_to_do,
            "prior_level" => $request->prior_level,
            "deadline" => $request->deadline,
        ]);
        return redirect(env('FRONTEND_URL')."/fullStack");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $todo = Todo::find($request->deleted_id);
        $todo->delete();
        return redirect(env('FRONTEND_URL')."/fullStack");
    }
}
