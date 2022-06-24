<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Requests\Person\StoreRequest;
use App\Http\Requests\Person\UpdateRequest;
use App\Http\Resources\Person\PersonResource;
use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index()
    {
        $people = Person::all();

        return PersonResource::collection($people);
    }

    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        $person = Person::create($data);

        return response([]);
    }

    public function show(Person $person)
    {
        return new PersonResource($person);
    }

    public function update(UpdateRequest $request, Person $person)
    {
        $data = $request->validated();

        $person->update($data);

        return response([]);
    }

    public function destroy(Person $person)
    {
        $person->delete();

        return [];
    }
}
