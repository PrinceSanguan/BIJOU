<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ServicesController extends Controller {
    private $services = [
        1 => [
            'id' => 1,
            'title' => 'Rent Arrears Management',
            'description' => 'Expert management of rent arrears with professional communication and legal procedures to recover outstanding payments while maintaining positive landlord-tenant relationships.',
            'image' => '/images/services/rent-arrears.jpg',
            'details' => [
                'Professional rent collection and monitoring',
                'Personalized payment plans',
                'Legal notice serving',
                'Court representation if needed',
                'Debt recovery assistance'
            ]
        ],
        2 => [
            'id' => 2,
            'title' => 'Eviction and Possession Assistance',
            'description' => 'Comprehensive support through the eviction process, ensuring legal compliance and efficient property recovery.',
            'image' => '/images/services/eviction.jpg',
            'details' => [
                'Legal compliance checks',
                'Notice serving',
                'Court application support',
                'Bailiff coordination',
                'Property handover'
            ]
        ],
        // Add more services with the same structure as above
    ];

    public function index() {
        return Inertia::render('Services');
    }

    public function show($servicesId)
    {
        $serviceId = (int)$servicesId;
        
        if (!isset($this->services[$serviceId])) {
            abort(404, 'Service not found');
        }

        return Inertia::render('ServiceSec/OurServices/Template', [
            'service' => $this->services[$serviceId]
        ]);
    }
}
