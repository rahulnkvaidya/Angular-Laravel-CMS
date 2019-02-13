<?php

namespace App\Http\Controllers;

use App\PageImage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PageImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $inter = PageImage::orderBy('id', 'asc')
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
        $data = PageImage::create($request->all());
        $insertedId = $data->id;
        if ($request->hasFile('image')) {
        $path = $request->file('image')->store('public');
        $dt = PageImage::where('id', 'like', $insertedId);
        $dt->update(['image' => $path]);
        return response()->json('Successfully added');
        } 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PageImage  $pageImage
     * @return \Illuminate\Http\Response
     */
    public function show(PageImage $pageImage)
    {
        $inter = PageImage::find($pageImage);
        return $inter;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PageImage  $pageImage
     * @return \Illuminate\Http\Response
     */
    public function edit(PageImage $pageImage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PageImage  $pageImage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PageImage $pageImage)
    {
        $id = $pageImage;
        $dt = PageImage::where('id', 'like', $id);
        $dt->update(['pagename' => $request->pagename,
                    'position' => $request->position]);

        if ($request->hasFile('image')) {
            ///////// old image remove ///////
            $dbt = PageImage::where('id', 'like', $id)->first();
            if (Storage::exists($dbt->image)) {
                /// Delete Stored image 
                Storage::delete($dbt->image);
            }
            ///////////////////
            $path = $request->file('image')->store('public');
            $dt = PageImage::where('id', 'like', $id);
            $dt->update(['image' => $path]);
            } 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PageImage  $pageImage
     * @return \Illuminate\Http\Response
     */
    public function destroy(PageImage $pageImage)
    {
        /// get image url for delete
        $dbt = PageImage::where('id','like', $pageImage)->first();
        /// Delete Stored image 
        if (Storage::exists($dbt->image)) {
            /// Delete Stored image 
            Storage::delete($dbt->image);
        }
        //print_r($dbt[0]->image);
        $dt = PageImage::find($pageImage);
        $dt->delete();
    }
}
