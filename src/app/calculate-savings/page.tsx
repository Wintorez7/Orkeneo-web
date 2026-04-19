// import PowerUnlock from "@/components/ui/power-unlock"
import RoiCalculator from "@/components/ui/roi-calculator"
// import TestimonialCarousel from "@/components/ui/TestimonialCarousel"
// import { testimonialData } from "@/lib/constaints";
import { metaData } from "@/lib/metadata";

export const metadata = metaData.savings;

const CalculateSavings = () => {
  return (
    <div className="mx-auto pt-8 pb-12">
      <RoiCalculator />
      {/* <div className="mt-24 mb-12">
        <TestimonialCarousel testimonial={testimonialData} />
      </div>
      <PowerUnlock /> */}
    </div>
  )
}

export default CalculateSavings
