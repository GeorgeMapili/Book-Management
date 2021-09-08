<?php

namespace App\Service;

use App\Models\Book;
use Illuminate\Support\Facades\Auth;

class BookService
{
    public function create($bookData)
    {
        $book = Book::create([
            'user_id' => Auth::id(),
            'title' => $bookData->title,
            'author' => $bookData->author,
            'description' => $bookData->description,
            'price' => $bookData->price
        ]);
        return $book;
    }

    public function update($id,$bookData)
    {
        $book = Book::where('id', $id)->update([
            'title' => $bookData->title,
            'author' => $bookData->author,
            'description' => $bookData->description,
            'price' => $bookData->price
        ]);
        return $book;
    }
}