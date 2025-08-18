export default function Hero() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center py-24 p-8 gap-12">
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-9xl md:text-8xl font-bold text-[#EFBF04] mb-6 font-serif">What People <br /> Say About Us</h1>
            </div>
            <div className="md:w-1/2">
                <p className="text-xl leading-relaxed text-gray-700 mb-8 text-balance font-space">
                At Bijou Relocation, our clients' satisfaction is our greatest achievement. Here's what landlords and investors say about working with our property management experts
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button className="bg-[#0E5248] text-white px-6 py-2 rounded-md hover:bg-[#0E5248]/80 transition-colors">View Testimonials</button>
                    <button className="bg-[#FFFFFF] text-black px-6 py-2 rounded-md shadow-lg hover:bg-[#EFBF04]/80 transition-colors">Read More</button>
                </div>
            </div>
        </div>
    );
}