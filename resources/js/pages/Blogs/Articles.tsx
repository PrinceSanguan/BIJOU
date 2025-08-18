
export default function Articles() {
    const articles = [
        {
            title: "HMO Property Management",
            description: "Maximize your rental income with our expert HMO management services",
            date: "2023-01-15",
            author: "Sarah Johnson",
            image: "/images/AboutUs/hero.jpg",
            category: "HMO"
        },
        {
            title: "Buy-to-Let Investment Guide",
            description: "Essential tips for successful buy-to-let property investment",
            date: "2023-02-20",
            author: "Michael Brown",
            image: "/images/AboutUs/hero.jpg",
            category: "BTL"
        },
        {
            title: "Property Maintenance",
            description: "Keeping your property in top condition year-round",
            date: "2023-03-10",
            author: "Emma Wilson",
            image: "/images/AboutUs/hero.jpg",
            category: "Maintenance"
        },
        {
            title: "Tenant Screening Process",
            description: "How we ensure quality tenants for your property",
            date: "2023-04-05",
            author: "David Lee",
            image: "/images/AboutUs/hero.jpg",
            category: "Tenants"
        },
        {
            title: "Rental Market Trends",
            description: "Latest insights into the rental property market",
            date: "2023-05-18",
            author: "Lisa Chen",
            image: "/images/AboutUs/hero.jpg",
            category: "Market"
        },
        {
            title: "Landlord Legal Guide",
            description: "Understanding your legal responsibilities as a landlord",
            date: "2023-06-22",
            author: "James Wilson",
            image: "/images/AboutUs/hero.jpg",
            category: "Legal"
        },
    ];

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center gap-6 mb-12">
                    <hr className="flex-1 border-t-2 border-[#EFBF04]" />
                    <h1 className="text-3xl font-serif text-center whitespace-nowrap uppercase">All Articles</h1>
                    <hr className="flex-1 border-t-2 border-[#EFBF04]" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={article.image} 
                                    alt={article.title} 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                                />
                            </div>
                            <div className="p-6">
                                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-[#F5C000] rounded-full mb-3">
                                    {article.category}
                                </span>
                                <h2 className="text-xl font-serif font-bold mb-2 text-gray-800">{article.title}</h2>
                                <p className="text-gray-600 mb-4">{article.description}</p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span>{article.author}</span>
                                    </div>
                                    <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                </div>
    
                            </div>
                        </div>
                    ))}            
                </div>
                <div className="flex justify-center mt-8">
                    <button className="bg-white text-black px-6 py-2 rounded-md border-2 border-black hover:bg-gray-100 transition-colors">Load More</button>
                </div>
            </div>
        </div>
    );
}