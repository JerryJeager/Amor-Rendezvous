import { featuresType } from "../../../data/features";
const Cards = ({ image, title, content, bg }: featuresType) => {
  return (
    <div className={`rounded-lg  p-4  text-wine shadow-md`} style={{backgroundColor: bg}}>
      <img src={image} className="w-[60%] mx-auto" alt={`${title}-icon`} />

      <h3 className="font-bold  mt-4">{title}</h3>

      <p>{content}</p>
    </div>
  );
};

export default Cards;
