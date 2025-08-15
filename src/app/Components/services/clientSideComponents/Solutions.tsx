import React from 'react'

interface SolutionItem {
    title: string;
    content: string;
}

interface SolutionsProps {
    solutionsData: SolutionItem[];
    activeService: string;
}

export default function Solutions({ solutionsData, activeService }: SolutionsProps) {
    return (
        <div className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="max-w-7xl mx-auto mb-12 md:mb-16">
                <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center font-bold text-gray-900 leading-tight'>
                    Seamless & Enterprise-ready 
                    <span className="block mt-2 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                        {activeService.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                </h1>
            </div>

            {/* Solutions Grid */}
            <div className="w-full mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
                    {solutionsData.map((item, index) => (
                        <div
                            key={`${item.title}-${index}`}
                            className="group relative overflow-hidden rounded-2xl lg:rounded-3xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
                                       w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(30%-1.5rem)]
                                       h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 group-hover:blur-sm group-hover:scale-110"
                                style={{
                                    backgroundImage: `url("/assets/Services/${activeService.toLowerCase()}/solution-${index + 1}.webp")`
                                }}
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-700" />
                            
                            {/* Static Title (Always Visible at top) */}
                            <div className="absolute top-0 left-0 right-0 z-20 p-4 md:p-6 lg:p-8">
                                <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white leading-tight group-hover:opacity-0 transition-opacity duration-500">
                                    {item.title}
                                </h2>
                            </div>

                            {/* Static Button (Always Visible at bottom) */}
                            <div className="absolute bottom-0 left-0 right-0 z-30 p-4 md:p-6 lg:p-8">
                                <button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-cyan-500 text-white font-semibold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base">
                                    Get in Touch
                                </button>
                            </div>
                            
                            {/* Hover Content (Only content visible) */}
                            <div className="absolute inset-0 z-20 p-4 md:p-6 lg:p-8 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-out">
                                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 md:p-6  w-full h-full flex flex-col justify-center items-center">
                                    <p className="text-sm md:text-base lg:text-lg text-gray-100 leading-relaxed text-center overflow-y-auto max-h-full">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 z-20 w-20 h-20 bg-gradient-to-bl from-teal-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}