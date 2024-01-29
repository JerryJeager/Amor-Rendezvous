import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewsCards from "./ReviewsCards";
import Slider, { Settings } from "react-slick";
import { reveiwsData } from "../../../data/reviews";

// const LeftButton = (props:any) => {
//     const { className, style, onClick } = props;
//   return (
//     <div  onClick={onClick} style={{...style, display: "block", backgroundColor: "red"}} aria-label="slider-button" role="button" className={`${className} `}>
//       {/* <div className="w-[3px] h-[15px] bg-wine rotate-45 rounded-md"></div>
//       <div className="w-[3px] h-[15px] bg-wine  -rotate-45 -translate-y-1 rounded-md"></div> */}
//     </div>
//   );
// };
// const RightButton = (props:any) => {
//     const { className, style, onClick } = props;
//   return (
//     <div  onClick={onClick} style={{...style, display: "block", backgroundColor: "red"}} aria-label="slider-button" role="button" className={`${className} `}>
//       {/* <div className="w-[3px] h-[15px] bg-wine rotate-45 rounded-md"></div>
//       <div className="w-[3px] h-[15px] bg-wine  -rotate-45 -translate-y-1 rounded-md"></div> */}
//     </div>
//   );
// };


const Reviews = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  };
  return (
    <section className="bg-[#ede0d4] py-8 text-wine px-[5%] font-comfortaa">
      <h2 className="text-center font-bold text-xl lg:text-3xl mt-2 italic">
        Behind the Love
      </h2>
      <p className="text-center text-sm">
        Stories Straight from Our Couples and Vendors
      </p>

      <Slider {...settings}>
        {reveiwsData.map((review, key) => (
          <ReviewsCards key={key} {...review} />
        ))}
      </Slider>
    </section>
  );
};

export default Reviews;
