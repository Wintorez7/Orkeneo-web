import React from 'react'
import Image from 'next/image'

const PowerUnlock = () => {
    return (
        <section className="bg-white flex justify-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl w-full flex flex-col items-center">
                {/* Icon */}
                <div className='flex justify-center mb-4'>
                    <Image src="/icons/zap.svg" height={500} width={50} alt="icon" />
                </div>
                {/* Heading */}
                <h2 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center">
                    Unleash the full power of AI + Data
                </h2>
                {/* Subheading */}
                <p className="mb-8 text-gray-500 text-center max-w-xl">
                    Everything you need to convert, engage, and retain more customers<br />
                    for your food business
                </p>
                {/* Stats */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-2xl">
                    {/* Stat 1 */}
                    <div className="flex-1 text-center">
                        <p className="text-3xl sm:text-4xl font-bold text-blue-600">40+</p>
                        <p className="text-gray-500">Integrations</p>
                    </div>
                    {/* Divider */}
                    <div className="hidden sm:block h-12 w-px bg-gray-200" />
                    {/* Stat 2 */}
                    <div className="flex-1 text-center">
                        <p className="text-3xl sm:text-4xl font-bold text-blue-600">600%</p>
                        <p className="text-gray-500">Return on investment</p>
                    </div>
                    {/* Divider */}
                    <div className="hidden sm:block h-12 w-px bg-gray-200" />
                    {/* Stat 3 */}
                    <div className="flex-1 text-center">
                        <p className="text-3xl sm:text-4xl font-bold text-blue-600">4k+</p>
                        <p className="text-gray-500">Global customers</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PowerUnlock
