<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
class ServicesController {
    public function index() {
        return Inertia::render('Services');
    }
}
