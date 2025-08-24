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
            'image' => '/images/services/rent-arrears.jpg',
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
            'image' => '/images/services/eviction.jpg',
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
            'image' => '/images/services/staging.jpg',
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
            'description' => 'Our service specializes in creating comprehensive professional inventories that include meticulous descriptions and high-quality photographic evidence of your property. By documenting every detail, from the condition of furniture to the state of appliances, we ensure that you have a thorough record that serves as vital protection against potential deposit disputes. Each inventory is crafted with precision, capturing not only the visual aspects but also the nuances of each item, which can be crucial in resolving any disagreements that may arise. This proactive approach not only safeguards your interests but also fosters transparency and trust between landlords and tenants, ultimately contributing to a smoother rental experience. With our expertise, you can rest assured that your property is well-documented and protected, allowing you to focus on what truly matters.',
            'image' => '/images/services/inventory.jpg',
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
            'image' => '/images/services/compliance.jpg',
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
            'image' => '/images/services/tenancy.jpg',
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
            'description' => 'At our property management firm, we pride ourselves on offering dedicated landlord support and expert advice tailored to meet the unique needs of each client, regardless of whether they are new to the letting process or managing an expanding portfolio of properties. Our team of seasoned professionals is committed to guiding landlords through every aspect of property management, from understanding local regulations and compliance requirements to optimizing rental income and tenant relations. We provide personalized consultations to help landlords develop effective strategies for marketing their properties, screening potential tenants, and addressing maintenance issues promptly and efficiently. Additionally, we offer ongoing training and resources to keep landlords informed about industry trends and best practices, ensuring they are well-equipped to make informed decisions. Our hands-on support extends to regular check-ins and updates, allowing landlords to feel confident and supported throughout their property management journey. By fostering a collaborative relationship, we aim to empower landlords to achieve their goals while ensuring a positive experience for their tenants, ultimately contributing to the long-term success of their rental investments.',
            'image' => '/images/services/landlord.jpg',
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
            'image' => '/images/services/rent-collection.jpg',
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
            'image' => '/images/services/maintenance.jpg',
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
            'description' => 'Our bespoke property sourcing services for investors are designed to help you identify and evaluate investment properties that align with your specific financial goals and investment strategies. We understand that each investor has unique requirements, whether you are seeking residential, commercial, or mixed-use properties. Our experienced team conducts thorough market research and analysis to uncover opportunities that not only meet your criteria but also have the potential for strong returns. By leveraging our extensive network and industry insights, we streamline the property search process, significantly reducing your risk and saving you valuable time. We provide detailed assessments of each property, including financial projections, neighborhood evaluations, and potential for appreciation, ensuring you make informed decisions. With our personalized approach, we aim to empower you to build a successful property portfolio that aligns with your investment vision.',
            'image' => '/images/services/sourcing.jpg',
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
            'image' => '/images/services/tenant-find.jpg',
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
            'description' => 'Our marketing strategy for rooms and units is designed to create standout listings that capture attention and attract high-quality tenants through the most effective platforms. We understand that first impressions matter, which is why we invest in professional photography to showcase each property in its best light, highlighting unique features and amenities. Alongside stunning visuals, we craft targeted and engaging copy that speaks directly to the ideal tenant demographic, emphasizing the benefits of the location and lifestyle associated with the property. Our marketing efforts extend beyond traditional listings; we leverage social media, online rental platforms, and local advertising to maximize exposure and reach a wider audience. By continuously analyzing market trends and tenant preferences, we refine our approach to ensure our listings remain competitive and appealing. Through this combination of high-quality visuals, compelling narratives, and strategic distribution, we aim to fill vacancies quickly with responsible tenants who will appreciate and care for the properties we manage, ultimately enhancing the success of our clients\' rental investments.',
            'image' => '/images/services/marketing.jpg',
            'details' => [
                'Online listings',
                'Professional photos',
                'Targeted campaigns',
            ]
        ],
        14 => [
            'id' => 14,
            'title' => 'Renters Compliance Advice',
            'description' => 'Our Renters (Reform) Bill compliance advice services are tailored to assist landlords in effectively navigating the complexities of the recent legislative changes introduced by the Renters (Reform) Bill. We understand that these reforms can significantly alter your responsibilities and obligations, and our team of experts is dedicated to providing comprehensive guidance to ensure you achieve full compliance. We offer in-depth consultations to help you grasp the key provisions of the bill, including modifications to tenancy agreements, updated eviction processes, and enhanced safety standards. Our approach includes practical strategies for implementing necessary adjustments to your property management practices, as well as ongoing support to keep you informed about any future amendments or developments in the law. By partnering with us, you can confidently adapt to these changes, mitigate potential risks, and foster positive relationships with your tenants, all while protecting your investment and ensuring that your rental properties meet the new legal requirements.',
            'image' => '/images/services/renters-compliance.jpg',
            'details' => [
                'Legal compliance',
                'Documentation',
                'Ongoing advice',
            ]
        ],
        15 => [
            'id' => 15,
            'title' => 'Check-ins and Check-outs',
            'description' => 'At our property management company, we prioritize transparency and accountability through our comprehensive tenant check-in and check-out processes. Each phase is meticulously conducted to ensure that both landlords and tenants have a clear understanding of the property\'s condition. During check-ins, we perform detailed inspections, capturing high-quality photo documentation that highlights the state of the property, while also providing tenants with a signed report that outlines any existing issues. This proactive approach not only helps in setting clear expectations but also serves as a reference point for both parties throughout the tenancy. Similarly, during check-outs, we conduct thorough inspections to assess any changes or damages that may have occurred during the tenant\'s stay. This process is again supported by extensive photo documentation and a signed report, which helps to minimize disputes and ensures that all parties are held accountable for the property\'s condition. By implementing these rigorous procedures, we aim to foster a positive rental experience and maintain the integrity of the properties we manage.',
            'image' => '/images/services/checkin.jpg',
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
