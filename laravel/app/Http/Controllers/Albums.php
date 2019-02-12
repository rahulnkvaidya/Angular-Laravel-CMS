<?php

namespace App\Http\Controllers;

use App\Album;
use App\AlbumImage;
use Illuminate\Http\Request;

class Albums extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $inter = Album::orderBy('id', 'asc')
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
        $data = Album::create($request->all());
        $insertedId = $data->id;
        if ($request->hasFile('photo')) {
        $path = $request->file('photo')->store('public');
        $dt = Album::where('id', 'like', $insertedId);
        $dt->update(['image' => $path]);
        } 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function show(Album $album)
    {
        $inter = Album::find($team);
        return $inter;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function edit(Album $album)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Album $album)
    {
        $id = $album;
        $dt = Album::where('id', 'like', $id);
        $dt->update(['title' => $request->title]);

        if ($request->hasFile('photo')) {
            ///////// old photo remove ///////
            $dbt = Album::where('id','like', $id)->first();
            if (Storage::exists($dbt->image)) {
                Storage::delete($dbt->image);
            }
            ///////////////////
            $path = $request->file('photo')->store('public');
            $dt = Album::where('id', 'like', $id);
            $dt->update(['image' => $path]);
            } 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function destroy(Album $album)
    {
        $dbt = Album::where('id','like', $album)->first();
        $ct = AlbumImage::where('album','like', $dbt->id)->count();
        if($ct < "1"){
            Storage::delete($dbt->image);
            $dt = Album::find($album);
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
