import { featuresContent } from "../../../data/features"
import Cards from "./Cards"

const Features = () => {
  return (
    <section className="px-[10%] pb-8">
        <h2 className="text-wine italic font-bold text-center text-xl lg:text-3xl">Elevate your Experience with Us</h2>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {featuresContent.map(feature => (
                <Cards key={feature.title} {...feature} />
            ))}
        </div>
    </section>
  )
}

export default Features