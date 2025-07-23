<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
class TestimonialsController {
    public function index() {
        return Inertia::render('Testimonials');
    }
}
