const missionImage = '/images/AboutUs/Mission.jpg';

export default function MissionandVision() {
    return (
        <section className="py-12">
            <div className="flex justify-center items-start gap-16 w-[1443px] h-[475px] mx-auto p-8 border-2 border-gray-200 rounded-lg shadow-2xl ">
                <div className="flex-1 mt-10 ml-8">
                                        <h1 className="text-4xl font-bold text-[#EFBF04] mb-6">Our Mission</h1>
                                        <div className="space-y-4 text-gray-700">
                                                <p className="text-lg font-space leading-loose" style={{ color: '#0E5248' }}>
                                                    Our mission is to revolutionise HMO property management through uncompromising compliance, expert legal guidance, and profit-maximisation strategies. We believe landlords deserve hands-off HMO solutions that generate consistent returns while maintaining the highest management standards.
                                                </p>
                                                <p className="text-lg font-space leading-loose" style={{ color: '#0E5248' }}>
                                                    Our landlord support South Yorkshire extends beyond routine maintenance to include market analysis, tenant screening excellence, and forward-thinking property improvements that enhance long-term value.
                                                </p>
                                        </div>
                </div>
                <div className="flex-1">
                    <img 
                        src={missionImage} 
                        alt="Mission" 
                        className="w-[650px] h-[406px] object-cover rounded-lg shadow-lg"
                    />
                </div>  
            </div>
            <div className="flex justify-center items-start gap-16 w-[1443px] h-[475px] mx-auto p-8 border-2 border-gray-200 rounded-lg shadow-2xl mt-10">
                <div className="flex-1 flex justify-center items-center">
                    <img 
                        src={missionImage} 
                        alt="Mission" 
                        className="w-[650px] h-[406px] object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="flex-1 mt-10 mr-8">
                                        <h1 className="text-4xl font-bold text-[#EFBF04] mb-6">Our Vision</h1>
                                        <div className="space-y-4 text-gray-700">
                                                <p className="text-lg font-space leading-loose" style={{ color: '#0E5248' }}>
                                                    We're building a trusted rental market where both landlords and tenants thrive through transparent practices and sustainable growth. Our primary focus on Sheffield and South Yorkshire allows us to develop deep local expertise while building lasting community relationships.
                                                </p>
                                                <p className="text-lg font-space leading-loose" style={{ color: '#0E5248' }}>
                                                    As trusted HMO property experts, we understand the unique characteristics of the local rental market. This includes specialized knowledge of student accommodation demands and young professional housing preferences, enabling us to position properties for maximum success.
                                                </p>
                                        </div>
                </div>
            </div>
            
        </section>
    );
}