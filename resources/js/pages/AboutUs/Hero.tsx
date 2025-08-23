const heroImage = '/images/AboutUs/hero.jpg';

export default function Hero() {
    return (
        <section className="py-12">
            <div className="text-center max-w-7xl mx-auto px-4 mt-20">
                <h1 className="text-8xl font-bold text-[#EFBF04] mb-6 font-serif">About Us</h1>
                                <p
                                    style={{
                                        width: 1119,
                                        height: 215,
                                        flexShrink: 0,
                                        color: '#0E5248',
                                        textAlign: 'center',
                                        fontFamily: 'Space Grotesk, sans-serif',
                                        fontSize: 24,
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        lineHeight: '36px',
                                        margin: '0 auto 32px auto',
                                    }}
                                >
                                    When you need proven HMO property management Sheffield expertise that delivers results, Bijou Relocation stands as your trusted partner. Founded by Karen Hodgson, our company combines over 20 years of housing sector expertise with 15+ years of family business background and 8+ years of dedicated business leadership. We specialise in comprehensive property management, strategic property sourcing, professional staging, tenant management, and complete legal support for landlords across Sheffield and South Yorkshire.
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