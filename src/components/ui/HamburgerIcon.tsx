type HamburgerProps = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  isHamburgerClicked: boolean;
};

const HamburgerIcon = ({ onClick, isHamburgerClicked }: HamburgerProps) => {
  return (
    <div
      onClick={onClick}
      className={`mt-8 -ml-[5%] cursor-pointer top-0 lg:hidden ${
        isHamburgerClicked ? "z-[100] absolute" : "absolute"
      }`}
    >
      <div
        className={`h-1 w[27px] bg-wine  duration-500 ${
          isHamburgerClicked
            ? "translate-x-[-4.5px] translate-y-[6px] rotate-[-405deg] "
            : ""
        } `}
      ></div>
      <div
        className={`h-1 w-[27px] bg-wine mt-2 duration-500 ${
          isHamburgerClicked
            ? "translate-x-[-4.5px] translate-y-[-6px] rotate-[405deg]"
            : ""
        }`}
      ></div>
    </div>
  );
};

export default HamburgerIcon;