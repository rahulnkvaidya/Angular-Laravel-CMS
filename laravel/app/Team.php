<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = [
        'name','css', 'tag_line', 'description', 'image'
    ];
}
