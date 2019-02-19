<?php

namespace App\Http\Controllers;

use App\PageTopImage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Response;
use Illuminate\Support\Facades\Storage;

class PageTopImageController extends Controller
{
    public function List()
    {
        $inter = PageTopImage::orderBy('id', 'asc')
        ->limit(10)
        ->Paginate(10);
        $inter->withPath('');
       return $inter;
    }
    public function Read($id)
    {
        $inter = PageTopImage::find($id);
        return $inter;
    }
    public function Create(Request $request)
    {
        $data = PageTopImage::create($request->all());
        $insertedId = $data->id;
        if ($request->hasFile('image')) {
        $path = $request->file('image')->store('public');
        $dt = PageTopImage::where('id', 'like', $insertedId);
        $dt->update(['image' => $path]);
        return response()->json('Successfully added');
        } 
    }
    public function update(Request $request)
    {
        $id = $request->id;
        $dt = PageTopImage::where('id', 'like', $id);
        $dt->update(['pagename' => $request->pagename,
                    'position' => $request->position]);
        if ($request->hasFile('image')) {
            ///////// old image remove ///////
            $dbt = PageTopImage::where('id', 'like', $id)->first();
            if (Storage::exists($dbt->image)) {
                /// Delete Stored image 
                Storage::delete($dbt->image);
            }
            ///////////////////
            $path = $request->file('image')->store('public');
            $dt = PageTopImage::where('id', 'like', $id);
            $dt->update(['image' => $path]);
            } 
    }
    public function destroy($id)
    {
       /// get image url for delete
       $dbt = PageTopImage::where('id','like', $id)->first();
       /// Delete Stored image 
       if (Storage::exists($dbt->image)) {
           /// Delete Stored image 
           Storage::delete($dbt->image);
       }
       //print_r($dbt[0]->image);
       $dt = PageTopImage::find($id);
       $dt->delete();
    }
}
