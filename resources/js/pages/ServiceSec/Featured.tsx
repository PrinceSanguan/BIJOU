
import { router } from '@inertiajs/react';

interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
    details: string[];
}

const services: Service[] = [
    {
        id: 1,
        title: 'Rent Arrears Management',
        description: 'Expert management of rent arrears with professional communication and legal procedures to recover outstanding payments while maintaining positive landlord-tenant relationships.',
        image: '/images/services/rent-arrears.jpg',
        details: [
            'Professional rent collection and monitoring',
            'Personalized payment plans',
            'Legal notice serving',
            'Court representation if needed',
            'Debt recovery assistance'
        ]
    },
    {
        id: 2,
        title: 'Eviction and Possession Assistance',
        description: 'Comprehensive support through the eviction process, ensuring legal compliance and efficient property recovery.',
        image: '/images/services/eviction.jpg',
        details: [
            'Legal compliance checks',
            'Notice serving',
            'Court application support',
            'Bailiff coordination',
            'Property handover'
        ]
    },
    // Add more services with the same structure as above
    // ...
];

export default function Featured() {
    const navigateToService = (id: number) => {
        router.get(`/services/${id}`);
    };

    return (
        <div className="py-12 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-6 max-w-4xl mx-auto mb-12">
                <hr className="flex-1 border-t-2 border-[#FFD700]" />
                <h1 className="text-3xl font-serif text-center whitespace-nowrap">OUR SERVICES</h1>
                <hr className="flex-1 border-t-2 border-[#FFD700]" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto bg-[#0E5248] p-8 rounded-xl">
                {services.map((service, index) => (
                    <div 
                        key={service.id}
                        onClick={() => navigateToService(service.id)}
                        className="p-8 bg-white/5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[#FFD700] hover:bg-white/10 transform hover:-translate-y-1 cursor-pointer"
                    >
                        <div className="flex items-center">
                            <h3 className="text-xl font-medium text-white leading-relaxed">{service.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}