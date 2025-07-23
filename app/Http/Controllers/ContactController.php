<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
class ContactController {
    public function index() {
        return Inertia::render('Contact');
    }
}
