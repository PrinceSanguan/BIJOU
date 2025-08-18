import { Button } from "@/components/ui/button";
const heroImage = '/images/AboutUs/hero.jpg';

export default function ReadMore() {
    return (
        <section className="w-full px-4 sm:px-6 bg-white">
            <div className="max-w-6xl mx-auto py-16 sm:py-20 space-y-24">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#0E5248]">
                            Tenant Find Services
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We advertise across major platforms, conduct viewings, and carry out thorough 
                            referencing checks to find reliable tenants quickly and reduce voids.
                        </p>
                        <div className="pt-4">
                            <Button className="bg-[#0E5248] hover:bg-[#E5C100] text-[#FFFFFF] font-medium px-8 py-6 text-lg">
                                Read More
                            </Button>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <img 
                            src={heroImage} 
                            alt="Tenant Find Services" 
                            className="w-full h-auto rounded-xl object-cover shadow-2xl"
                            onError={(e) => {
                                e.currentTarget.src = 'https://placehold.co/800x600/0E5248/FFFFFF?text=Tenant+Find+Services';
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="lg:w-1/2">
                        <img 
                            src={heroImage} 
                            alt="Property Management" 
                            className="w-full h-auto rounded-xl object-cover shadow-2xl"
                            onError={(e) => {
                                e.currentTarget.src = 'https://placehold.co/800x600/0E5248/FFFFFF?text=Property+Management';
                            }}
                        />
                    </div>
                    <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#0E5248]">
                            Property Management
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Comprehensive property management services including maintenance coordination, 
                            rent collection, and regular property inspections to ensure your investment 
                            remains in top condition.
                        </p>
                        <div className="pt-4">
                            <Button className="bg-[#0E5248] hover:bg-[#E5C100] text-[#FFFFFF] font-medium px-8 py-6 text-lg">
                                Read More
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#0E5248]">
                            Full Property Management
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            End-to-end property management solutions that handle everything from tenant 
                            sourcing to maintenance, giving you complete peace of mind as a property owner.
                        </p>
                        <div className="pt-4">
                            <Button className="bg-[#0E5248] hover:bg-[#E5C100] text-[#FFFFFF] font-medium px-8 py-6 text-lg">
                                Read More
                            </Button>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <img 
                            src={heroImage} 
                            alt="Full Property Management" 
                            className="w-full h-auto rounded-xl object-cover shadow-2xl"
                            onError={(e) => {
                                e.currentTarget.src = 'https://placehold.co/800x600/0E5248/FFFFFF?text=Full+Property+Management';
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}