const heroImage = '/images/AboutUs/hero.jpg';

export default function Hero() {
    return (
        <section className="py-12">
            <div className="text-center max-w-7xl mx-auto px-4 mt-20">
                <h1 className="text-8xl font-bold text-[#EFBF04] mb-6 font-serif">About Us</h1>
                <p className="text-xl leading-relaxed text-[#0E5248] max-w-6xl mx-auto mb-8 text-balance font-space">
                    Led by CEO Karen Hodgson, with 20+ years of housing experience, 8+ years running her own business, and 15+ years helping her family property business. The Bijou Group provides expert property management, sourcing, staging, tenant management, maintenance, and legal support for landlords.
                </p>
            </div>
            <div className="w-full flex justify-center mt-12">
                <div className="w-[1272px] h-[500px] overflow-hidden shadow-2xl">
                    <img 
                        src={heroImage} 
                        alt="About Us" 
                        className="w-full h-full object-cover rounded-lg shadow-2xl" 
                    />
                </div>
            </div>
        </section>
    );
}   