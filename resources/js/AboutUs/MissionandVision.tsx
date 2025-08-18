const missionImage = '/images/AboutUs/Mission.jpg';

export default function MissionandVision() {
    return (
        <section className="py-12">
            <div className="flex justify-center items-start gap-24 w-[1443px] h-[475px] mx-auto p-8 border-2 border-gray-200 rounded-lg shadow-2xl ">
                <div className="flex-1 mt-4">
                    <h1 className="text-4xl font-bold text-[#EFBF04] mb-6">Our Mission</h1>
                    <div className="space-y-4 text-gray-700">
                        <p className="text-lg font-space">At Bijou Relocation, we aim to transform property management with exceptional service and legal expertise, providing tailored solutions that maximize returns and ensure compliance.</p>
                        <p className="text-lg font-space">We aim to create seamless experiences for landlords and investors by combining our deep knowledge of HMO and Buy-to-Let regulations with practical, profit-focused strategies that stand the test of evolving legislation.</p>
                    </div>
                </div>
                <div className="flex-1 ml-24">
                    <img 
                        src={missionImage} 
                        alt="Mission" 
                        className="w-[549px] h-[406px] object-cover rounded-lg shadow-lg"
                    />
                </div>  
            </div>
            <div className="flex justify-center items-start gap-24 w-[1443px] h-[475px] mx-auto p-8 border-2 border-gray-200 rounded-lg shadow-2xl mt-10">
                <div className="flex-1 flex justify-center items-center">
                    <img 
                        src={missionImage} 
                        alt="Mission" 
                        className="w-[549px] h-[406px] object-contain rounded-lg shadow-lg"
                    />
                </div>
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-[#EFBF04] mb-6">Our Vision</h1>
                    <div className="space-y-4 text-gray-700">
                        <p className="text-lg font-space">At Bijou Relocation, we aim to transform property management with exceptional service and legal expertise, providing tailored solutions that maximize returns and ensure compliance.</p>
                        <p className="text-lg font-space">We aim to create seamless experiences for landlords and investors by combining our deep knowledge of HMO and Buy-to-Let regulations with practical, profit-focused strategies that stand the test of evolving legislation.</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}