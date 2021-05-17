<?php

namespace App\Http\Controllers;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        return view('welcome');
    }

    public function getBlogs(Request $request)
    {
        $data = array();
        $blogs = Blog::get();
        foreach ($blogs as $key => $value) {
            $data[] = $value->id;
            $data[] = $value->title;
            $data[] = $value->url;
            $data[] = $value->category;
        }
        return response()->json(['results' => $blogs]);
    }    
}
