<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\ApiController;
use App\Models\User;
use App\Models\Book;
use App\Http\Resources\GetBookResource;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\CreateBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Service\BookService;

class BookController extends ApiController
{
    public function index()
    {
        return GetBookResource::collection(User::find(Auth::id())->books);
    }

    public function create(CreateBookRequest $request, BookService $bookService)
    {
        $book = $bookService->create($request);

        if($book){
            return $this->respondCreated('Successfully created book');
        }
        return $this->respondInternalServerError();
    }

    public function destroy($id)
    {
        $book = Book::find($id);

        if($book->delete()){
            return $this->respondCreated('Successfully deleted book');
        }
        return $this->respondInternalServerError();
    }

    public function edit($id)
    {
        return Book::findOrFail($id);
    }

    public function update(UpdateBookRequest $request, $id, BookService $bookService)
    {
        $book = $bookService->update($id, $request);

        if($book){
            return $this->respondCreated('Successfully updated book');
        }
        return $this->respondInternalServerError();
    }

}
