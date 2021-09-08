<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $table = 'books';

    protected $primaryKey = 'id';

    protected $fillable = [
        'user_id',
        'title',
        'author',
        'description',
        'price'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
