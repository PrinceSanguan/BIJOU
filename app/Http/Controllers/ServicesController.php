<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ServicesController extends Controller {
    private $services = [
    1 => [
            'id' => 1,
            'title' => 'Rent Arrears Management',
            'description' => 'Sheffield landlords lose thousands annually due to rent arrears and late payments. The National Residential Landlords Association reports that 47% of UK landlords experienced rent arrears in 2024, with average collection delays costing £2,100 per property yearly.'
                . ' Managing rent collection manually creates endless stress: chasing tenants via phone calls, tracking multiple payment dates, handling excuses, and maintaining complex spreadsheets. HMO landlords face even greater challenges with multiple tenants per property, increasing arrears risk exponentially.'
                . ' Our professional rent management service eliminates these headaches completely. We handle everything from automated collection to legal compliance, ensuring your rental income flows reliably whilst you focus on growing your property portfolio. With Sheffield\'s rental market tightening and the Renters Reform Bill introducing stricter landlord obligations, professional rent management isn\'t luxury, it\'s essential protection for your investment.',
            'image' => '/images/servicesimg/Rectangle 18480-1.webp',
            'subtext' => "Stop chasing rent. We'll get your money back professionally - without destroying tenant relationships",
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
            'description' => 'Evicting tenants is one of the most stressful experiences any landlord faces. Whether dealing with rent arrears, property damage, or tenants who simply refuse to leave, the legal process is complex and mistakes are costly. One wrong move incorrect notice periods, improper serving procedures, or missing court deadlines can delay possession by months and cost thousands in legal fees. Meanwhile, mortgage payments continue and rental income stops. Our eviction assistance service handles every aspect of the legal process professionally. From serving compliant notices to court representation, we ensure fast, lawful possession recovery whilst protecting your rights as a landlord throughout Sheffield and South Yorkshire.',
            'image' => '/images/servicesimg/Rectangle 18480-2.webp',
            'subtext' => 'From difficult tenants to court proceedings, we handle the legal side so you can take back control of your property  fast and fairly.',
            'details' => [
                'Legal compliance checks',
                'Notice serving',
                'Court application support',
                'Bailiff coordination',
                'Property handover'
            ]
        ],
    3 => [
            'id' => 3,
            'title' => 'Property Staging and Room Setup',
            'description' => 'Sheffield\'s rental market moves fast, and empty properties cost money every single day through mortgage payments, council tax, and lost rental income. Professional property staging transforms cold, empty spaces into aspirational homes that tenants can immediately envision living in, using contemporary furnishings, optimal lighting, and strategic layouts that maximize perceived space while highlighting each property\'s unique selling points. With over 15 years of Sheffield rental market experience and 500+ properties staged, Bijou Group understands what different tenant demographics want across Sheffield\'s diverse neighborhoods - from students near university areas to young professionals in trendy districts and families in suburban locations. Our complete staging service handles everything from furniture selection and delivery to room optimization and styling, creating spaces that photograph beautifully online and impress during viewings. The results speak for themselves: staged properties rent 40% faster than unstaged equivalents, command £50-80 higher monthly rents, and 85% receive multiple tenant applications. Whether you need rapid turnaround staging for HMO rooms, student property staging, family home transformation, or executive-level staging for professional lets, we offer flexible packages that pay for themselves within weeks through dramatically reduced void periods and consistently higher rental rates from quality tenants.',
            'image' => '/images/servicesimg/Rectangle 18480-3.webp',
            'subtext' => 'Transform empty rentals into tenant magnets. Professional staging that fills properties 40% faster with higher rents.',
            'details' => [
                'Furniture arrangement',
                'Decor and accessories',
                'Room optimization',
                'Photography-ready setup',
            ]
        ],
        4 => [
            'id' => 4,
            'title' => 'Inventories with Photographic Evidence',
            'description' => 'Deposit disputes drain thousands from landlords annually due to inadequate property documentation. Research shows that 60% of deposit claims fail because landlords cannot provide sufficient evidence of property condition at tenancy commencement. Our specialized inventories with photographic evidence service eliminates this risk completely. We document every surface, fixture, and furnishing with high-resolution photography paired with detailed written descriptions, creating an indisputable record of your property condition. Each inventory includes room-by-room photographic documentation, precise condition assessments, and detailed item descriptions. Our inventories with photographic evidence provide court-admissible documentation that protects your deposit claims while maintaining professional tenant relationships through transparent property management practices.',
            'image' => '/images/servicesimg/Rectangle 18480-4.webp',
            'subtext' => 'We create professional inventories with photographic evidence providing vital protection against deposit disputes for Sheffield landlords.',
            'details' => [
                'Comprehensive inventory reports',
                'High-quality photographs',
                'Digital and paper copies',
            ]
        ],
    5 => [
            'id' => 5,
            'title' => 'Property Compliance & Certification',
            'description' => 'Managing property compliance is complex and time-consuming. Gas Safety certificates expire annually, EICR electrical checks are required every five years, EPC renewals last ten years, plus HMO licensing, fire safety requirements, and Legionella assessments all demand attention. Missing deadlines results in council fines, potential prosecution, and safety risks. Sheffield City Council issued over 200 compliance penalties in 2024, with fines ranging from £1,000 to £30,000 for serious breaches. Our comprehensive compliance management service eliminates these risks. We handle every certificate, renewal, and legal requirement so your properties remain safe, legal, and profitable whilst you focus on growing your portfolio.',
            'image' => '/images/servicesimg/Rectangle 18480-5.webp',
            'subtext' => 'From Gas Safety to EICR and EPC  we handle every legal requirement so your property is always safe, compliant, and worry-free.',
            'details' => [
                'Gas safety certificates',
                'EPCs',
                'Electrical safety checks',
            ]
        ],
    6 => [
            'id' => 6,
            'title' => 'Tenancy Management',
            'description' => 'Running rental properties shouldn\'t feel like a second job. Between drafting agreements, handling deposits, coordinating inspections, and managing renewals, many landlords find themselves overwhelmed by the administrative demands of modern property management. We take care of it all. Our comprehensive approach ensures your properties remain compliant with current legislation while maintaining professional standards that keep tenants satisfied and your investment protected. Working with landlords across Sheffield and beyond, we\'ve refined our process to deliver results that matter: reduced stress, improved compliance, and better rental returns.',
            'image' => '/images/servicesimg/Rectangle 18480-6.webp',
            'subtext' => 'From tenancy agreements and deposits to renewals and inspections, we ensure your tenancies are compliant and professionally managed.',
            'details' => [
                'Tenancy agreements',
                'Renewals and terminations',
                'Tenant communication',
            ]
        ],
        7 => [
            'id' => 7,
            'title' => 'Landlord Support and Advice',
            'description' => 'Sheffield\'s complex rental market leaves 65% of landlords feeling overwhelmed by regulatory changes, tenant issues, and portfolio management decisions. New landlords struggle with fundamental letting processes, while experienced investors face scaling challenges and compliance complexities across diverse property types. Local market dynamics in areas like Broomhill student lets, Crookes HMO investments, and Ecclesall professional rentals each require specialized knowledge. With over 40,000 rental properties across Sheffield, landlords need reliable expertise to navigate everything from tenant disputes to legislative changes affecting their investments. Research shows that landlords without professional support experience 50% more void periods, 70% more tenant disputes, and miss growth opportunities worth an average of £12,000 annually due to inadequate guidance and reactive management approaches. We maintain direct relationships with Sheffield solicitors, accountants, contractors, and regulatory bodies, ensuring our dedicated landlord support and advice connects you with trusted local professionals when specialized services are required.',
            'image' => '/images/servicesimg/Rectangle 18480-7.webp',
            'subtext' => 'From first-time landlords to growing portfolios - professional advice when you need it most.',
            'details' => [
                'Legal guidance',
                'Best practice advice',
                'Ongoing support',
            ]
        ],
    8 => [
            'id' => 8,
            'title' => 'Rent Management and Collection',
            'description' => 'Sheffield landlords lose thousands annually due to rent arrears and late payments. The National Residential Landlords Association reports that 47% of UK landlords experienced rent arrears in 2024, with average collection delays costing £2,100 per property yearly.'
                . ' Managing rent collection manually creates endless stress: chasing tenants via phone calls, tracking multiple payment dates, handling excuses, and maintaining complex spreadsheets. HMO landlords face even greater challenges with multiple tenants per property, increasing arrears risk exponentially.'
                . ' Our professional rent management service eliminates these headaches completely. We handle everything from automated collection to legal compliance, ensuring your rental income flows reliably whilst you focus on growing your property portfolio. With Sheffield\'s rental market tightening and the Renters Reform Bill introducing stricter landlord obligations, professional rent management isn\'t luxury it\'s essential protection for your investment.',
            'image' => '/images/servicesimg/Rectangle 18480-8.webp',
            'subtext' => 'Ensure your rental income is always on time, reduce arrears, and keep your finances completely stress-free with our automated rent management system.',
            'details' => [
                'Automated reminders',
                'Payment tracking',
                'Reporting',
            ]
        ],
    9 => [
            'id' => 9,
            'title' => 'Property Maintenance and Repair',
            'description' => 'Property maintenance issues escalate quickly without professional attention. Delayed repairs lead to tenant complaints, costly emergency call-outs, and potential legal compliance breaches. A simple leak can cause structural damage costing thousands, whilst electrical faults create serious safety risks. Sheffield landlords face particular challenges with older Victorian properties requiring frequent attention and HMO licensing demanding strict compliance standards. Our comprehensive property maintenance service eliminates these risks through proactive care and rapid response systems. We maintain your property\'s condition, ensure legal compliance, and keep tenants satisfied through professional, reliable service that protects your investment long-term.',
            'image' => '/images/servicesimg/Rectangle 18480-9.webp',
            'subtext' => 'Keep your property safe, compliant, and in top condition with our vetted network of professional tradespeople.',
            'details' => [
                'Routine maintenance',
                'Emergency repairs',
                'Trusted contractors',
            ]
        ],
        10 => [
            'id' => 10,
            'title' => 'Bespoke Property Sourcing',
            'description' => 'Sheffield\'s property investment market offers tremendous opportunities, yet 70% of investors struggle to identify profitable deals that align with their specific goals. Rising property prices, hidden maintenance issues, and complex market dynamics make property sourcing increasingly challenging for time-pressed investors. Local investment hotspots like Kelham Island and Broomhill see intense competition, with quality properties selling within days of listing. Student accommodation near the University of Sheffield requires specialist knowledge, while HMO investments in areas like Crookes demand expertise in licensing and compliance requirements. Research indicates that successful property investors spend 40+ hours weekly on property research, viewings, and due diligence. Meanwhile, 60% of DIY investors make costly mistakes due to inadequate market knowledge and rushed decision-making processes.',
            'image' => '/images/servicesimg/Rectangle 18480-10.webp',
            'subtext' => 'Transform your property investment strategy with our proven Sheffield sourcing expertise and risk assessment.',
            'details' => [
                'Personalized search',
                'Negotiation support',
                'Due diligence',
            ]
        ],
    11 => [
            'id' => 11,
            'title' => 'Tenant Find Services',
            'description' => 'Vacant properties in Sheffield cost landlords £150+ daily in lost rental income. Poor tenant selection leads to rent arrears, property damage, and expensive eviction processes that can take months to resolve. Our professional tenant find service eliminates these costly risks. We connect your property with pre-qualified, fully referenced tenants through comprehensive marketing and strict vetting processes. With Sheffield\'s evolving HMO licensing requirements and increasing tenant demand, securing compliant, reliable occupants protects both your immediate income and long-term investment value. Whether you own a student house in Broomhill, a professional HMO in Crookes, or family rental in Ecclesall, we understand Sheffield\'s diverse rental markets and attract the right tenant profile for your property type.',
            'image' => '/images/servicesimg/Rectangle 18480-11.webp',
            'subtext' => 'We handle advertising, viewings, and rigorous tenant referencing to fill your property quickly with quality, compliant tenants who protect your rental income.',
            'details' => [
                'Marketing',
                'Viewings',
                'Referencing',
            ]
        ],
    12 => [
            'id' => 12,
            'title' => 'Full-Service Property',
            'description' => 'Managing HMO and Buy-to-Let properties in South Yorkshire requires specialist knowledge, constant attention, and significant time investment. Our professional landlord services eliminate operational burdens while maximizing investment returns through systematic property management processes tailored to the local market. '
                . 'Complex regulatory compliance and HMO licensing requirements with local authorities. Tenant acquisition, vetting, and ongoing relationship management in competitive university markets. Financial administration and rent collection optimization for diverse tenant demographics. Legal procedures and dispute resolution within Yorkshire\'s property law framework. '
                . 'Our comprehensive property management solutions provide complete operational coverage, enabling property owners to focus on portfolio growth and strategic investment decisions within this thriving market.',
            'image' => '/images/services/full-service.jpg',
            'subtext' => 'Stop losing sleep over problem tenants, compliance headaches, and empty properties',
            'details' => [
                'End-to-end management',
                'All-inclusive service',
                'Peace of mind',
            ]
        ],
        13 => [
            'id' => 13,
            'title' => 'Marketing for Rooms & Units',
            'description' => 'Sheffield\'s competitive rental market sees over 2,000 new property listings monthly, yet 40% of rooms and units remain vacant for more than 6 weeks. Poor quality photos, generic descriptions, and wrong platform targeting cost landlords thousands in lost rental income. Local HMO properties in areas like Broomhill and Crookes struggle particularly, with outdated marketing approaches failing to attract quality tenants. Student accommodation around the University of Sheffield faces fierce competition, while professional lets in Ecclesall require sophisticated marketing for rooms & units to command premium rents. Research shows that properties with professional marketing fill 3x faster than DIY listings, yet many Sheffield landlords still rely on basic phone photos and template descriptions that fail to showcase their property\'s unique appeal.',
            'image' => '/images/services/marketing.jpg',
            'subtext' => 'Transform empty properties into income-generating assets with our proven Sheffield marketing strategies.',
            'details' => [
                'Online listings',
                'Professional photos',
                'Targeted campaigns',
            ]
        ],
        14 => [
            'id' => 14,
            'title' => 'Renters Compliance Advice',
            'description' => 'The Renters (Reform) Bill introduces the most significant changes to UK rental law in decades, yet 85% of landlords remain unclear about implementation requirements. With Section 21 abolition, new grounds for possession, and enhanced tenant protections, non-compliance risks substantial fines and legal complications. Sheffield\'s 40,000+ rental properties face particular challenges with the new legislation. HMO landlords in areas like Broomhill and Crookes must navigate complex licensing changes, while traditional buy-to-let investors across Ecclesall and city center locations need updated tenancy management strategies. Research shows that landlords who fail to implement proper Renters (Reform) Bill compliance advice face potential fines up to £30,000 per violation, plus costly legal disputes and property tribunal cases that could devastate rental business profitability. We maintain direct relationships with Sheffield City Council, local housing authorities, and legal professionals, ensuring our Renters (Reform) Bill compliance advice reflects current best practices and regulatory expectations.',
            'image' => '/images/services/renters-compliance.jpg',
            'subtext' => 'Protect your property business with comprehensive compliance strategies tailored to the new legislation.',
            'details' => [
                'Legal compliance',
                'Documentation',
                'Ongoing advice',
            ]
        ],
        15 => [
            'id' => 15,
            'title' => 'Check-ins and Check-outs',
            'description' => 'Tenant disputes cost Sheffield landlords over £2.3M annually, with 78% of conflicts arising from inadequate check-in and check-out procedures. Poor documentation at tenancy start leads to costly deposit disputes, while rushed move-out processes result in unrecovered damages and cleaning costs. Properties in high-turnover areas like Broomhill student accommodation and Crookes HMOs face particular challenges, with frequent tenancy changes requiring systematic documentation. Professional lets in Ecclesall and city center locations demand thorough accountability measures to maintain property standards and protect rental investments. Research indicates that properties with professional check-ins and check-outs experience 85% fewer deposit disputes and recover 40% more costs from departing tenants through proper documentation and accountability procedures. Our systematic approach covers all property types from student HMOs in Broomhill to executive apartments in city center locations. We understand Sheffield\'s diverse rental market requirements and tailor our documentation procedures accordingly.',
            'image' => '/images/services/checkin.jpg',
            'subtext' => 'Eliminate disputes and protect your investment with comprehensive move-in and move-out procedures.',
            'details' => [
                'Inventory checks',
                'Key handover',
                'Condition reports',
            ]
        ],
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
