<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AlbumImage extends Model
{
    protected $fillable = [
        'album', 'image'
    ];
}
