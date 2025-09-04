<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\GuestMiddleware;


/*
|--------------------------------------------------------------------------
| This controller handles the homepage and other public-facing pages that don't require authentication
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about-bijou-group-sheffield', [App\Http\Controllers\AboutController::class, 'index'])->name('about');
Route::get('/services', [App\Http\Controllers\ServicesController::class, 'index'])->name('services');
Route::get('/rent-arrears-management-sheffield', fn() => app(App\Http\Controllers\ServicesController::class)->show(1))->name('services.arrears');
Route::get('/eviction-possession-assistance-sheffield', fn() => app(App\Http\Controllers\ServicesController::class)->show(2))->name('services.eviction');
Route::get('/property-staging-room-setup-sheffield', fn() => app(App\Http\Controllers\ServicesController::class)->show(3))->name('services.staging');
Route::get('/inventories-photographic-evidence-sheffield', fn() => app(App\Http\Controllers\ServicesController::class)->show(4))->name('services.inventories');
Route::get('/property-compliance-certification-sheffield', fn() => app(App\Http\Controllers\ServicesController::class)->show(5))->name('services.compliance');
Route::get('/tenancy-management-sheffield', fn() => app(App\Http\Controllers\ServicesController::class)->show(6))->name('services.tenancy');
Route::get('/landlord-support-advice-sheffield', fn() => app(App\Http\Controllers\ServicesController::class)->show(7))->name('services.support');
Route::get('/rent-management-collection-sheffield', fn() => app(App\Http\Controllers\ServicesController::class)->show(8))->name('services.rentcollection');
Route::get('/sheffield-property-maintenance-repair', fn() => app(App\Http\Controllers\ServicesController::class)->show(9))->name('services.maintenance');
Route::get('/sheffield-bespoke-property-sourcing', fn() => app(App\Http\Controllers\ServicesController::class)->show(10))->name('services.sourcing');
Route::get('/tenant-find-property-management', fn() => app(App\Http\Controllers\ServicesController::class)->show(11))->name('services.tenantfind');
Route::get('/hmo-property-management', fn() => app(App\Http\Controllers\ServicesController::class)->show(12))->name('services.hmo');
Route::get('/sheffield-marketing-for-rooms-units', fn() => app(App\Http\Controllers\ServicesController::class)->show(13))->name('services.marketing');
Route::get('/sheffield-renters-compliance-advice', fn() => app(App\Http\Controllers\ServicesController::class)->show(14))->name('services.renterscompliance');
Route::get('/sheffield-check-ins-check-outs', fn() => app(App\Http\Controllers\ServicesController::class)->show(15))->name('services.checkinout');
Route::get('/contact-bijou-group-sheffield', [App\Http\Controllers\ContactController::class, 'index'])->name('contact');
Route::get('/sheffield-property-management-testimonials', [App\Http\Controllers\TestimonialsController::class, 'index'])->name('testimonials');
// Route::get('/blog', [App\Http\Controllers\BlogController::class, 'index'])->name('blog'); // HIDDEN FOR NOW

/*
|--------------------------------------------------------------------------
| This controller handles Login Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Auth\LoginController;

Route::get('login', [LoginController::class, 'index'])->middleware(GuestMiddleware::class)->name('auth.login');
Route::post('login', [LoginController::class, 'store'])->name('auth.login.store');
Route::get('logout', [LoginController::class, 'destroy'])->name('auth.logout');

/*
|--------------------------------------------------------------------------
| This controller handles Google Auth Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Auth\SocialAuthController;

Route::get('/auth/google', [SocialAuthController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('/auth/google/callback', [SocialAuthController::class, 'handleGoogleCallback'])->name('auth.google.callback');

/*
|--------------------------------------------------------------------------
| This controller handles Register Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Auth\RegisterController;


Route::get('register', [RegisterController::class, 'index'])->middleware(GuestMiddleware::class)->name('auth.register');

/*
|--------------------------------------------------------------------------
| This controller handles All Admin Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Middleware\AdminMiddleware;

Route::middleware([AdminMiddleware::class])->group(function () {

  // Dashboard
  Route::get('admin/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');

  // Settings
  Route::get('admin/settings', [SettingsController::class, 'index'])->name('admin.settings');
  Route::put('admin/settings/profile', [SettingsController::class, 'updateProfile'])->name('admin.settings.updateProfile');
  Route::put('admin/settings/password', [SettingsController::class, 'updatePassword'])->name('admin.settings.updatePassword');
});

/*
|--------------------------------------------------------------------------
| This controller handles All User Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\User\UserDashboardController;
use App\Http\Controllers\User\UserSettingsController;
use App\Http\Middleware\UserMiddleware;

Route::middleware([UserMiddleware::class])->group(function () {

  // Dashboard
  Route::get('dashboard', [UserDashboardController::class, 'index'])->name('user.dashboard');

  // Settings
  Route::get('user/settings', [UserSettingsController::class, 'index'])->name('user.settings');
  Route::put('user/settings/profile', [UserSettingsController::class, 'updateProfile'])->name('user.settings.updateProfile');
  Route::put('user/settings/password', [UserSettingsController::class, 'updatePassword'])->name('user.settings.updatePassword');
});


// Legacy redirects for SEO-friendly URLs
Route::redirect('/about', '/about-bijou-group-sheffield', 301);
Route::redirect('/contact', '/contact-bijou-group-sheffield', 301);
Route::redirect('/testimonials', '/sheffield-property-management-testimonials', 301);
// Redirect old service URLs to new SEO-friendly paths
Route::get('/services/{servicesID}', function ($servicesID) {
  $map = [
    1 => '/rent-arrears-management-sheffield',
    2 => '/eviction-possession-assistance-sheffield',
    3 => '/property-staging-room-setup-sheffield',
    4 => '/inventories-photographic-evidence-sheffield',
    5 => '/property-compliance-certification-sheffield',
    6 => '/tenancy-management-sheffield',
    7 => '/landlord-support-advice-sheffield',
    8 => '/rent-management-collection-sheffield',
    9 => '/sheffield-property-maintenance-repair',
    10 => '/sheffield-bespoke-property-sourcing',
    11 => '/tenant-find-property-management',
    12 => '/hmo-property-management',
    13 => '/sheffield-marketing-for-rooms-units',
    14 => '/sheffield-renters-compliance-advice',
    15 => '/sheffield-check-ins-check-outs',
  ];
  if (isset($map[$servicesID])) {
    return redirect($map[$servicesID], 301);
  }
  abort(404);
});