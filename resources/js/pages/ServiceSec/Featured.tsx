
const services = [
    'Rent Arrears Management',
    'Eviction and Possession Assistance',
    'Property Staging and Room Setup',
    'Inventories with Photographic Evidence',
    'Property Compliance & Certification',
    'Tenancy Management',
    'Tenant Find Services',
    'Landlord Support and Advice',
    'Full-Service Property',
    'Rent Management and Collection',
    'Marketing for Rooms & Units',
    'Property Maintenance and Repair',
    'Renters Compliance Advice',
    'Bespoke Property Sourcing',
    'Check-ins and Check-outs'
];

export default function Featured() {
    return (
        <div className="py-12 px-4 max-w-7xl mx-auto ">
            <div className="flex items-center justify-center gap-6 max-w-4xl mx-auto mb-12">
                <hr className="flex-1 border-t-2 border-[#FFD700]" />
                <h1 className="text-3xl font-serif text-center whitespace-nowrap">OTHER FEATURED SERVICES</h1>
                <hr className="flex-1 border-t-2 border-[#FFD700]" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto bg-[#0E5248] p-8 rounded-xl">
                {services.map((service, index) => (
                    <div 
                        key={index}
                        className="p-8 bg-white/5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[#FFD700] hover:bg-white/10 transform hover:-translate-y-1"
                    >
                        <h3 className="text-xl font-medium text-white leading-relaxed">{service}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}