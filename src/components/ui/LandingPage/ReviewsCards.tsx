import { reveiwsType } from "../../../data/reviews";


const ReviewsCards = (Props: reveiwsType) => {
  return (
    <div className="lg:w-[330px] mx-auto mt-4 text-center">
      <p className="italic font-semibold">"{Props.reviewContent}"</p>

      <div className="mt-2   mx-auto">
        <div className="flex justify-center">
          {Props.user === "couple" ? (
            <>
              <img
                src={Props.partner1Image}
                alt=""
                className="rounded-full w-[40px] h-[40px] border border-wine"
              />
              <img
                src={Props.partnet2Image}
                alt=""
                className="rounded-full w-[40px] h-[40px] -translate-x-2 border border-wine"
              />
            </>
          ) : (
            <img
                src={Props.vendorImage}
                alt=""
                className="rounded-full w-[40px] h-[40px] -translate-x-2 border border-wine"
              />
          )}
        </div>
        <p className="text-sm">{Props.name}</p>
        <p className="text-slate-500 text-xs">{Props.user === "vendor" ? Props.profession : Props.user}</p>
      </div>
    </div>
  );
};

export default ReviewsCards;
