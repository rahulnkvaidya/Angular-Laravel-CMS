<?php

namespace App\Http\Controllers;

use App\Album;
use App\AlbumImage;
use Illuminate\Http\Request;
use Response;
use Illuminate\Support\Facades\Storage;

class Albums extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function List()
    {
        $inter = Album::orderBy('id', 'asc')
        ->limit(10)
        ->Paginate(10);
        $inter->withPath('');
       return $inter;
    }

    public function Create(Request $request)
    {
        $data = Album::create($request->all());
        $insertedId = $data->id;
        if ($request->hasFile('photo')) {
        $path = $request->file('photo')->store('public');
        $dt = Album::where('id', 'like', $insertedId);
        $dt->update(['image' => $path]);
        } 
    }
    public function Read($id)
    {
        $inter = Album::find($id);
        return $inter;
    }
    public function update(Request $request)
    {
        $id = $request->id;
        $dt = Album::where('id', 'like', $id);
        $dt->update(['title' => $request->title]);
        if ($request->hasFile('image')) {
            $dbt = Album::where('id','like', $id)->first();
            if (Storage::exists($dbt->image)) {
                Storage::delete($dbt->image);
            }
            $path = $request->file('image')->store('public');
            $dt = Album::where('id', 'like', $id);
            $dt->update(['image' => $path]);
            } 
    }
    public function Delete($id)
    {
        $dbt = Album::where('id','like', $id)->first();
        $ct = AlbumImage::where('album','like', $dbt->id)->count();
        if($ct < "1"){
            Storage::delete($dbt->image);
            $dt = Album::find($id);
            $dt->delete();
            return response()->json(['data' => 'Successfully Deleted'])->header('Content-Type', 'application/json');
        }
        else {
            $returnData = array('status' => 'error',
            'message' => 'Please Delete all images form this album, then try again'
            );
            return response()->json($returnData, 500)->header('Content-Type', 'application/json');
        }
        
    }
}
