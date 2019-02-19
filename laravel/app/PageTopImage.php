<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PageTopImage extends Model
{
    protected $fillable = [
        'pagename','position', 'image'
    ];
}
