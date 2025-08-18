const heroImage = '/images/AboutUs/hero.jpg';

export default function Hero() {
    return (
        <section className="py-12">
            <div className="text-center max-w-3xl mx-auto px-4 mt-20">
                <h1 className="text-8xl font-bold text-[#EFBF04] mb-6 font-serif">Blog</h1>
                <p className="text-xl leading-relaxed text-gray-700 max-w-2xl mx-auto mb-8 text-balance font-space">
                Lorem ipsum dolor sit amet. Est dolorem itaque quo distinctio corporis ad fugiat repudiandae sit quia necessitatibus aut eveniet dignissimos sit iste 
                </p>
            </div>
            <div className="w-full flex justify-center mt-12">
                <div className="w-full max-w-[1272px] h-[500px] overflow-hidden shadow-2xl rounded-lg relative">
                    <img 
                        src={heroImage} 
                        alt="Blog" 
                        className="w-full h-full object-cover" 
                    />
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                        <div className="max-w-2xl">
                            <p className="inline-block text-lg text-white px-3 py-1 mb-4 bg-[#0E5248] rounded">Technology</p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-2 font-serif text-[#EFBF04]">Full-service Property Management <br /> (HMO & BTL)</h2>
                            <div className="flex items-center gap-4 mt-4">
                                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div className="text-white">
                                    <p className="font-medium">John Doe</p>
                                    <p className="text-sm text-white/80">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}       