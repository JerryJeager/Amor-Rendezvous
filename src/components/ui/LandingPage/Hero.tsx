import Header from "../../layout/Header";
import blackCouple from "/images/blackcouple.jpg"
import ringShow from "/images/ringShow.jpg"
import whiteCouple from "/images/whitecouple.jpg"
const Hero = () => {
  return (
    <div className="lg:h-screen bg-appBg  bg-cover bg-center relative">
      <Header />

      <section className="font-comfortaa mx-auto w-[90%] mt-2 flex flex-col lg:flex-row justify-center gap-4 lg:justify-between ">
        <div className="self-center lg:w-1/2">
          <h2 className="text-3xl lg:text-5xl text-wine font-bold">Plan Your Dream Wedding</h2>

          <p className="mt-2">
            Unveil the Magic of Your Perfect Wedding with Amor Rendezvous
            Planning your dream wedding? Amor Rendezvous is here to turn your
            vision into reality. Our platform is designed to simplify and
            enhance every aspect of your wedding journey. From sending beautiful
            invites to locating the finest vendors, we've got you covered.
            Embrace the Future of Wedding Planning
          </p>
          <button className="bg-wine text-white rounded-lg w-[8rem] p-2 text-center font-bold mt-2">Get Started</button>
        </div>
        <div className="flex lg:w-1/2 lg:self-end">
          <img src={blackCouple} className="w-[30%] rounded-t-[100px] self-end translate-x-[45px] z-20" alt="black-couple" />
          <img src={ringShow} className="w-[50%] overflow-visible z-10" alt="wedding-ring" />
          <img src={whiteCouple} className="w-[30%] h-[100px] lg:h-[130px] -translate-x-[40px] translate-y-[20px]" alt="white-couple" />
        </div>
      </section>
      <svg
        className="absolute bottom-0 z-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#FBF8F2"
          fillOpacity="1"
          d="M0,96L20,96C40,96,80,96,120,117.3C160,139,200,181,240,186.7C280,192,320,160,360,160C400,160,440,192,480,186.7C520,181,560,139,600,149.3C640,160,680,224,720,250.7C760,277,800,267,840,245.3C880,224,920,192,960,170.7C1000,149,1040,139,1080,144C1120,149,1160,171,1200,186.7C1240,203,1280,213,1320,192C1360,171,1400,117,1420,90.7L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
