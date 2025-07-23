<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
class BlogController {
    public function index() {
        return Inertia::render('Blog');
    }
}
