<?php

namespace App\Http\Controllers;

use App\AlbumImage;
use Illuminate\Http\Request;

class AlbumImages extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $data = AlbumImage::create($request->all());
        $insertedId = $data->id;
        if ($request->hasFile('photo')) {
        $path = $request->file('photo')->store('public');
        $dt = AlbumImage::where('id', 'like', $insertedId);
        $dt->update(['image' => $path]);
        } 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AlbumImage  $albumImage
     * @return \Illuminate\Http\Response
     */
    public function show(AlbumImage $albumImage)
    {
        $inter = AlbumImage::where('album',$albumImage)
        ->orderBy('id', 'asc')
        ->limit(10)
        ->Paginate(10);
        $inter->withPath('');
       return $inter;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AlbumImage  $albumImage
     * @return \Illuminate\Http\Response
     */
    public function edit(AlbumImage $albumImage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AlbumImage  $albumImage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AlbumImage $albumImage)
    {
        $id = $albumImage;
        $dt = AlbumImage::where('id', 'like', $id);
        $dt->update(['album' => $request->album]);

        if ($request->hasFile('photo')) {
            ///////// old photo remove ///////
            $dbt = AlbumImage::where('id','like', $id)->first();
            if (Storage::exists($dbt->image)) {
                /// Delete Stored image 
                Storage::delete($dbt->image);
            }
            ///////////////////
            $path = $request->file('photo')->store('public');
            $dt = AlbumImage::where('id', 'like', $id);
            $dt->update(['image' => $path]);
        } 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AlbumImage  $albumImage
     * @return \Illuminate\Http\Response
     */
    public function destroy(AlbumImage $albumImage)
    {
        $dbt = AlbumImage::where('id','like', $albumImage)->first();
        Storage::delete($dbt->image);
        $dt = AlbumImage::find($albumImage);
        $dt->delete();
    }
}
