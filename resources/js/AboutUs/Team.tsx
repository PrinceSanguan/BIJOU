import { Instagram, Linkedin } from 'lucide-react';

const teamImage = '/images/AboutUs/human1.jpg';

export default function Team() {
    return (
        <section className="py-12 px-6 md:px-8 lg:px-12 m-6">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-[#EFBF04] mb-6">Meet Our Team</h1>
                <p className="text-lg font-space">Lorem ipsum dolor sit amet. Est dolorem itaque quo distinctio corporis ad fugiat repudiandae sit quia necessitatibus aut eveniet dignissimos sit iste</p>
            </div>
            <div className="w-full flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1728px] px-4">
                    <div className="w-full max-w-[477px] h-[554px] bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
                        <img 
                            src={teamImage} 
                            alt="John Doe" 
                            className="w-full h-[400px] object-cover"
                        />
                        <div className="p-6 ">
                            <div className="flex items-center justify-between">
                                <div className="text-left">
                                    <h1 className="text-2xl font-bold text-[#EFBF04]">John Doe</h1>
                                    <p className="text-gray-600">CEO & Founder</p>
                                </div>
                                <div className="flex gap-4">
                                    <a href="#" className="text-gray-700 hover:text-[#EFBF04] transition-colors">
                                        <Instagram size={24} />
                                    </a>
                                    <a href="#" className="text-gray-700 hover:text-[#EFBF04] transition-colors">
                                        <Linkedin size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-[477px] h-[554px] bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
                        <img 
                            src={teamImage} 
                            alt="Jane Smith" 
                            className="w-full h-[400px] object-cover"
                        />
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="text-left">
                                    <h1 className="text-2xl font-bold text-[#EFBF04]">Jane Smith</h1>
                                    <p className="text-gray-600">Creative Director</p>
                                </div>
                                <div className="flex gap-4">
                                    <a href="#" className="text-gray-700 hover:text-[#EFBF04] transition-colors">
                                        <Instagram size={24} />
                                    </a>
                                    <a href="#" className="text-gray-700 hover:text-[#EFBF04] transition-colors">
                                        <Linkedin size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-[477px] h-[554px] bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
                        <img 
                            src={teamImage} 
                            alt="Michael Johnson" 
                            className="w-full h-[400px] object-cover"
                        />
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="text-left">
                                    <h1 className="text-2xl font-bold text-[#EFBF04]">Michael Johnson</h1>
                                    <p className="text-gray-600">Lead Developer</p>
                                </div>
                                <div className="flex gap-4">
                                    <a href="#" className="text-gray-700 hover:text-[#EFBF04] transition-colors">
                                        <Instagram size={24} />
                                    </a>
                                    <a href="#" className="text-gray-700 hover:text-[#EFBF04] transition-colors">
                                        <Linkedin size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}