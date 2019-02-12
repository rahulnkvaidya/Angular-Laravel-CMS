<?php

namespace App\Http\Controllers;

use App\Team;
use Illuminate\Http\Request;

class Teams extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $inter = Team::orderBy('id', 'asc')
        ->limit(10)
        ->Paginate(10);
        $inter->withPath('');
       return $inter;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = Team::create($request->all());
        $insertedId = $data->id;
        if ($request->hasFile('photo')) {
        $path = $request->file('photo')->store('public');
        $dt = Team::where('id', 'like', $insertedId);
        $dt->update(['image' => $path]);
        return response()->json('Successfully added');
        } 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function show(Team $team)
    {
        $inter = Team::find($team);
        return $inter;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function edit(Team $team)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Team $team)
    {
        $id = $team;
        $dt = Team::where('id', 'like', $id);
        $dt->update(['name' => $request->name,
                    'tag_line' => $request->tag_line,
                    'description' => $request->description]);

        if ($request->hasFile('photo')) {
            ///////// old photo remove ///////
            $dbt = Team::where('id', 'like', $id)->first();
            if (Storage::exists($dbt->image)) {
                /// Delete Stored image 
                Storage::delete($dbt->image);
            }
            ///////////////////
            $path = $request->file('photo')->store('public');
            $dt = Team::where('id', 'like', $id);
            $dt->update(['image' => $path]);
            } 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function destroy(Team $team)
    {
        /// get image url for delete
        $dbt = Team::where('id','like', $team)->first();
        /// Delete Stored image 
        if (Storage::exists($dbt->image)) {
            /// Delete Stored image 
            Storage::delete($dbt->image);
        }
        //print_r($dbt[0]->image);
        $dt = Team::find($team);
        $dt->delete();
    }
}
