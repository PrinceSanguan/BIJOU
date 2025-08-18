
interface AboutUsProps {
    className?: string;
}

export default function AboutUs({ className = '' }: AboutUsProps) {
    return (
        <div className="w-full flex justify-center bg-[#0E5248]">
            <div className={`w-[1728px] py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
                <div className="flex items-center justify-center gap-6 mb-12">
                    <hr className="flex-1 border-t-2 border-[#EFBF04]" />
                    <h1 className="text-3xl font-serif text-center whitespace-nowrap uppercase text-white">About Us</h1>
                    <hr className="flex-1 border-t-2 border-[#EFBF04]" />
                </div>
                <div className="w-full flex justify-center">
                    <p className="text-xl text-white w-[1159px] text-center mb-8 text-balance font-space">
                        At The Bijou Group, property management is more than a service - it's our legacy. With over 20 years of experience in the housing sector, 15+ years supporting a family property business, and 8 years running our own firm, we offer landlords and investors a fully informed, hands-on approach. Whether you're navigating compliance, dealing with tenants, or growing your portfolio, we're here as your one-stop property solution.
                    </p>
                </div>
            </div>
        </div>
    );
}