<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PageImage extends Model
{
    protected $fillable = [
        'pagename','position', 'image'
    ];
}
