<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
class AboutController {
    public function index() {
        return Inertia::render('About');
    }
}
