import { featuresContent } from "../../../data/features";
import Cards from "./Cards";
import makeup from "/images/makeup.jpg";
import cake from  "/images/cake.jpg"
import catererFood from "/images/catererFood.jpg"
import makeupWoman from "/images/makeupWoman.jpg"
import photographer from "/images/photographer.jpg"

const Features = () => {
  return (
    <>
      <section className="px-[5%] pb-8 font-comfortaa">
        <h2 className="text-wine italic font-bold text-center text-xl lg:text-3xl">
          Elevate your Experience with Us
        </h2>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {featuresContent.map((feature) => (
            <Cards key={feature.title} {...feature} />
          ))}
        </div>
      </section>
      <section className="pb-8 font-comfortaa w-[90%] mx-auto flex flex-col-reverse lg:flex-row-reverse gap-4 mt-6">
        <div className="w-full lg:w-1/2">
          <h2 className=" mb-2 font-bold text-xl lg:text-3xl italic">
            Craft your Wedding Business Legacy
          </h2>
          <p>
            Are a Vendor? Showcase your business and connect with couples
            looking for your unique offerings. By creating a vendor profile, you
            unlock the door to a world of possibilities. Tailor your presence,
            share your story, and captivate soon-to-be-wed hearts. It's more
            than just a profile; it's an opportunity to shine in the world of
            love and celebrations. Ready to amplify your business? 
          </p>
          <button className="bg-wine text-white rounded-lg w-[8rem] p-2 text-center font-bold mt-2">Get Started</button>
        </div>
        <div className="w-full lg:w-1/2 mt-4 grid grid-cols-3 grid-rows-3 gap-2 lg:gap-4">
          <div className="row-span-3 self-center">
            <img src={photographer} className="rounded-xl" alt="photographer-image" />
          </div>
          <div className="row-span-1 self-start">
            <img src={cake} className="rounded-xl" alt="cake-image" />
          </div>
          <div className="row-span-2">
            <img src={makeupWoman} className="rounded-xl" alt="makupArtist-image" />
          </div>
          <div className="row-span-2">
            <img src={makeup} className="rounded-xl" alt="makeup-image" />
          </div>
          <div className="row-span-1">
            <img src={catererFood} className="rounded-xl" alt="caterer-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
