<?php

namespace App\Http\Controllers;

use App\AlbumImage;
use Illuminate\Http\Request;
use Response;
use Illuminate\Support\Facades\Storage;

class AlbumImages extends Controller
{
 
    public function Create(Request $request)
    {
        $data = AlbumImage::create($request->all());
        $insertedId = $data->id;
        if ($request->hasFile('image')) {
        $path = $request->file('image')->store('public');
        $dt = AlbumImage::where('id', 'like', $insertedId);
        $dt->update(['image' => $path]);
        } 
    }
    public function List($id)
    {
        $inter = AlbumImage::where('album',$id)
        ->orderBy('id', 'asc')
        ->limit(10)
        ->Paginate(10);
        $inter->withPath('');
       return $inter;
    }
    public function update(Request $request)
    {
        $id = $request->id;
        $dt = AlbumImage::where('id', 'like', $id);
        $dt->update(['album' => $request->album]);

        if ($request->hasFile('image')) {
            ///////// old photo remove ///////
            $dbt = AlbumImage::where('id','like', $id)->first();
            if (Storage::exists($dbt->image)) {
                /// Delete Stored image 
                Storage::delete($dbt->image);
            }
            ///////////////////
            $path = $request->file('image')->store('public');
            $dt = AlbumImage::where('id', 'like', $id);
            $dt->update(['image' => $path]);
        } 
    }
    public function Delete($id)
    {
        $dbt = AlbumImage::where('id','like', $id)->first();
        Storage::delete($dbt->image);
        $dt = AlbumImage::find($id);
        $dt->delete();
    }
}
