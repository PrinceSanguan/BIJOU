import { Button } from "@/components/ui/button";
const serviceImage = '/images/AboutUs/hero.jpg'; // Replace with your actual image path

export default function ReadMoreRight() {
    return (
        <section className="w-full py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
                    <div className="lg:w-1/2">
                        <img 
                            src={serviceImage} 
                            alt="Property Management Services" 
                            className="w-full h-auto rounded-xl shadow-xl object-cover"
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
                            <Button className="bg-[#FFD700] hover:bg-[#E5C100] text-[#0E5248] font-medium px-8 py-6 text-lg">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
