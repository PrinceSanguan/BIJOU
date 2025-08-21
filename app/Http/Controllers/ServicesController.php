<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ServicesController extends Controller {
    private $services = [
        1 => [
            'id' => 1,
            'title' => 'Rent Arrears Management',
            'description' => 'Our Rent Arrears Management service employs a structured and systematic approach to effectively address and resolve issues related to unpaid rent. We begin by establishing open lines of communication with tenants, ensuring that they are aware of their obligations and the importance of timely payments. Our team works diligently to negotiate manageable repayment plans tailored to each tenant\'s unique financial situation, fostering a collaborative environment that encourages compliance. In cases where tenants are unresponsive or unable to meet their obligations, we are prepared to escalate the matter through appropriate legal channels, including court proceedings, to recover the outstanding rent. Throughout the entire process, we prioritize maintaining a professional and respectful relationship with tenants, as we believe that clear communication and understanding can often lead to amicable resolutions. By leveraging our expertise in rent arrears management, we aim to minimize financial losses for landlords while providing tenants with the support they need to fulfill their rental commitments.',
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
            'description' => 'Our property management team offers specialized assistance in eviction and possession proceedings, drawing on our extensive experience in court to navigate the complexities of the legal system effectively. We understand that the process of recovering possession of a property can be both stressful and time-consuming for landlords, which is why we are committed to providing comprehensive support every step of the way. Our knowledgeable staff is well-versed in local landlord-tenant laws and regulations, ensuring that all actions taken are compliant and legally sound. From preparing and filing necessary legal documents to representing landlords in court, we handle all aspects of the eviction process with professionalism and efficiency. We also provide guidance on best practices for communication with tenants, helping to mitigate conflicts and foster a smoother transition. By leveraging our court experience and legal expertise, we strive to minimize downtime and financial loss for landlords, ultimately facilitating a swift and lawful recovery of their properties while maintaining a respectful approach to all parties involved.',
            'image' => '/images/services/eviction.jpg',
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
            'description' => 'Our property staging and room setup services transform spaces into modern, inviting environments that attract prospective tenants and reduce vacancy times. We understand that a well-staged property can significantly impact tenant interest, so we focus on creating aesthetically pleasing and functional layouts that highlight each room\'s potential. Our design experts select furniture, decor, and color schemes that align with market trends and appeal to the target demographic. By employing strategic staging techniques, we enhance the visual appeal and practicality of each space, allowing potential tenants to envision themselves living there. Our comprehensive approach includes decluttering, deep cleaning, and final touches that create a welcoming atmosphere. By investing in professional staging, we aim to leave a lasting impression that encourages tenants to choose your property, ultimately reducing vacancy times and enhancing the rental experience.',
            'image' => '/images/services/staging.jpg',
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
            'description' => 'Our property compliance and certification management services streamline the process of ensuring your property meets all legal requirements, including gas safety checks, Electrical Installation Condition Reports (EICR), and Energy Performance Certificates (EPC). We understand the importance of compliance for tenant safety, so our dedicated team manages scheduling and execution of inspections with qualified professionals. We track expiration dates and renewal needs, providing comprehensive documentation and timely reminders to help you avoid fines and legal issues. Our proactive approach protects your investment and enhances your reputation as a responsible landlord, allowing you to focus on maximizing rental income while we handle compliance management.',
            'image' => '/images/services/compliance.jpg',
            'details' => [
                'Gas safety certificates',
                'EPCs',
                'Electrical safety checks',
            ]
        ],
        6 => [
            'id' => 6,
            'title' => 'Tenancy Management',
            'description' => 'At Bijou Group, we pride ourselves on delivering comprehensive property management services that encompass every facet of tenancy management. From meticulously drafting tenancy agreements that adhere to legal standards and managing deposits with utmost transparency to overseeing renewals and conducting thorough inspections, our dedicated team ensures that each tenancy is compliant with current regulations and professionally managed. Our client-centric approach not only alleviates the stress associated with property management but also fosters a seamless experience for both landlords and tenants alike. By keeping up with industry best practices and maintaining open lines of communication, we strive to create a harmonious rental environment that safeguards the interests of all parties involved.',
            'image' => '/images/services/tenancy.jpg',
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
            'description' => 'At Bijou Group, we take pride in providing comprehensive rent management and collection services that prioritize the timely payment of rent while efficiently addressing any arrears. Our dedicated team is committed to ensuring that rent is collected punctually, which helps maintain positive cash flow for property owners. In addition, we tackle any outstanding payments promptly and effectively, minimizing potential financial distress. To promote transparency and trust, we issue detailed monthly statements that keep you informed about your finances, enabling you to better manage your investments. Our goal is to deliver peace of mind, allowing property owners to focus on other important aspects of their investment while we handle the intricacies of rent management and collection with professionalism and integrity.',
            'image' => '/images/services/rent-collection.jpg',
            'details' => [
                'Automated reminders',
                'Payment tracking',
                'Reporting',
            ]
        ],
        9 => [
            'id' => 9,
            'title' => 'Property Maintenance and Repair',
            'description' => 'At Bijou Group, we take pride in offering a comprehensive property maintenance and repair service through our extensive network of vetted tradespeople, ensuring that all tasks—from urgent emergency repairs to routine upkeep—are handled with the utmost care and professionalism. Our dedicated team is committed to delivering prompt responses to any issues that arise, allowing property owners and tenants to enjoy peace of mind knowing their spaces are well-maintained and cared for. By prioritizing quality and reliability, we strive to build lasting relationships with our clients, ensuring that every maintenance need is met efficiently and effectively, no matter the size or complexity of the task at hand.',
            'image' => '/images/services/maintenance.jpg',
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
            'description' => 'At Bijou Relocation, we excel in providing comprehensive Tenant Find Services designed to streamline the renting process for property owners while ensuring quality and reliability in tenant selection. Our approach begins with extensive advertising across major platforms, increasing visibility and attracting a wide pool of potential tenants. We conduct informative and engaging viewings to showcase your property effectively, allowing prospective tenants to envision their life in the space. Furthermore, we emphasize thorough referencing checks that examine credit history, previous rental behaviors, and personal circumstances, ensuring that we match landlords with tenants who possess a solid track record of responsibility and reliability. By reducing average void periods, our expert team not only expedites the leasing process but also protects your investment, positioning itself as your trusted partner in successful property management.',
            'image' => '/images/services/tenant-find.jpg',
            'details' => [
                'Marketing',
                'Viewings',
                'Referencing',
            ]
        ],
        12 => [
            'id' => 12,
            'title' => 'Full-Service Property',
            'description' => 'At Bijou Group, we provide comprehensive property management solutions for Houses in Multiple Occupation (HMO) and Buy-to-Let (BTL) properties, dedicated to maximizing your investment while minimizing your workload. Our experienced team manages every aspect of property management, ensuring seamless tenant communications, prompt and effective repairs, adherence to legal compliance, and efficient rent collection. We recognize the importance of maintaining high standards for tenant satisfaction and property upkeep, which is why we take a proactive approach to address any issues that may arise. With our unwavering commitment to excellence, we prioritize your peace of mind and the smooth operation of your properties, allowing you to enjoy the benefits of your investment without the associated stress. Whether you are a seasoned investor or new to the market, our tailored management services are designed to meet your unique needs and help you achieve your goals in property investment.',
            'image' => '/images/services/full-service.jpg',
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
