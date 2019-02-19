<?php

namespace App\Http\Controllers;

use App\Team;
use Illuminate\Http\Request;
use Response;
use Illuminate\Support\Facades\Storage;

class Teams extends Controller
{
    public function List()
    {
        $inter = Team::orderBy('id', 'asc')
        ->limit(10)
        ->Paginate(10);
        $inter->withPath('');
       return $inter;
    }

    public function Create(Request $request)
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
    public function Read($id)
    {
        $inter = Team::find($id);
        return $inter;
    }

    public function Update(Request $request)
    {
        $id = $request->id;
        $dt = Team::where('id', $id)
        ->update([
            'name' => $request->name,
            'css' => $request->css,
            'tag_line' => $request->tag_line,
            'description' => $request->description
            ]);
        if ($request->hasFile('image')) {
            ///////// old photo remove ///////
            $dbt = Team::where('id', 'like', $id)->first();
            if (Storage::exists($dbt->image)) {
                /// Delete Stored image 
                Storage::delete($dbt->image);
            }
            ///////////////////
            $path = $request->file('image')->store('public');
            $dt = Team::where('id', 'like', $id);
            $dt->update(['image' => $path]);
        } 
    }

    public function Delete($id)
    {
       
        /// get image url for delete
        $dbt = Team::where('id','like', $id)->first();
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
