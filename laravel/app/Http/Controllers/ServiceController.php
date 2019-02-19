<?php

namespace App\Http\Controllers;

use App\Service;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Response;
use Illuminate\Support\Facades\Storage;

class ServiceController extends Controller
{
    public function List()
    {
        $inter = Service::orderBy('id', 'asc')
        ->limit(10)
        ->Paginate(10);
        $inter->withPath('');
       return $inter;
    }
    public function Create(Request $request)
    {
        $data = Service::create($request->all());
        $insertedId = $data->id;
        if ($request->hasFile('image')) {
        $path = $request->file('image')->store('public');
        $dt = Service::where('id', 'like', $insertedId);
        $dt->update(['image' => $path]);
        return response()->json('Successfully added');
        } 
    }
    public function Read($id)
    {
        $inter = Service::find($id);
        return $inter;
    }
    public function Update(Request $request)
    {
        $id = $request->id;
        $dt = Service::where('id', 'like', $id);
        $dt->update(['title' => $request->title,
                    'css' => $request->css,
                    'description' => $request->description]);

        if ($request->hasFile('image')) {
            ///////// old image remove ///////
            $dbt = Service::where('id', 'like', $id)->first();
            if (Storage::exists($dbt->image)) {
                /// Delete Stored image 
                Storage::delete($dbt->image);
            }
            ///////////////////
            $path = $request->file('image')->store('public');
            $dt = Service::where('id', 'like', $id);
            $dt->update(['image' => $path]);
            } 
    }
    public function Delete($id)
    {
        $dbt = Service::where('id','like', $id)->first();
        if (Storage::exists($dbt->image)) {
            Storage::delete($dbt->image);
        }
        $dt = Service::find($id);
        $dt->delete();
    }
}
