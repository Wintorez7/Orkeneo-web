import Image from 'next/image'
import React from 'react'

const HowItWork = () => {
    return (
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-20 font-inter text-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                {/* Text Content */}
                <div className="text-center md:text-left leading-relaxed">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
                        How it Works
                    </h2>
                    <p className="mb-4">
                        Orkeneo sits on top of your existing systems, using AI-powered
                        forecasting to analyze your restaurant&apos;s historical data,
                        sales trends, and real-time 3rd party data.
                    </p>
                    <p>
                        The result? Accurate, data-driven staffing predictions—so you know
                        exactly how many employees you need, every shift.
                    </p>
                </div>

                {/* Image */}
                <div>
                    <Image
                        src="/images/work-forecasting.png"
                        alt="Work Forecasting"
                        width={765}
                        height={560}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    )
}

export default HowItWork
