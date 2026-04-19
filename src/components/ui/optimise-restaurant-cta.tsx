import { Button } from "../reusable/button";

const OptimizeRestaurantCTA = () => (
  <section className="w-full flex flex-col items-center justify-center py-24">
    <h1 className="text-4xl md:text-6xl font-medium text-center leading-tight mb-6">
      Ready to optimize<br />
      your <span className=" text-[#4d77ff] underline">restaurant</span><br />
      operations?
    </h1>
    <p className="text-lg text-center text-gray-700 mb-8">
      Learn more about the thousands of restaurants<br />
      already benefiting from <span className="font-semibold underline">Orkeneo.</span>
    </p>
    <Button variant="default" size="md" className="rounded-full font-semibold px-8 py-6 tracking-wide">CASE STUDIES</Button>
  </section>
);

export default OptimizeRestaurantCTA;