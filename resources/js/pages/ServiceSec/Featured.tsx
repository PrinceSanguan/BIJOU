
import { router } from '@inertiajs/react';

interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
    details: string[];
}

const services = [
    'Rent Arrears Management',
    'Eviction and Possession Assistance',
    'Property Staging and Room Setup',
    'Inventories with Photographic Evidence',
    'Property Compliance & Certification',
    'Tenancy Management',
    'Landlord Support and Advice',
    'Rent Management and Collection',
    'Property Maintenance and Repair',
    'Bespoke Property Sourcing',
    'Tenant Find Services',
    'Full-Service Property',
    'Marketing for Rooms & Units',
    'Renters Compliance Advice',
    'Check-ins and Check-outs',
];

export default function Featured() {
    const navigateToService = (id: number) => {
        router.get(`/services/${id}`);
    };

    return (
        <div className="py-12 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-6 max-w-4xl mx-auto mb-12">
                <hr className="flex-1 border-t-2 border-[#FFD700]" />
                <h1 className="text-3xl font-serif text-center whitespace-nowrap">OTHER FEATURED SERVICES</h1>
                <hr className="flex-1 border-t-2 border-[#FFD700]" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto bg-[#0E5248] p-8 rounded-xl">
                {services.map((service, index) => (
                    <div
                        key={index}
                        onClick={() => navigateToService(index + 1)}
                        className="p-0 flex items-center min-h-[40px] cursor-pointer transition hover:bg-white/10 rounded"
                        tabIndex={0}
                        role="button"
                        onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') navigateToService(index + 1); }}
                    >
                        <h3 className="text-lg md:text-xl font-normal text-white leading-relaxed">{service}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}