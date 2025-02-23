import { Icon } from "@iconify/react";
// import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = () => {
  return (
    <div className="relative overflow-hidden container mx-auto">
      <div>
        <img
          src="/Images/rect2.AVIF"
          alt="rect"
          className="absolute right-0 top-0 w-[150px]"
        />

        <img src="/Images/rect1.AVIF" alt="rect" className="absolute left-0 bottom-0" />

        <img src="/Images/dots.AVIF" alt="dots" className="absolute top-0 left-[200px]" />
      </div>
      <div className="px-5 py-[100px] relative">
        <h4 className="text-white text-sm py-2 px-10 border border-white rounded-[999px] md:w-[400px] mx-auto text-center ">
          BETTER WAY TO SECURE YOUR DREAM WEBSITE
        </h4>

        <h1 className="text-[48px] md:text-[64px] text-white text-center font-semibold">
          Empowering Businesses
          <br className="hidden md:block" /> with Intelligent AI Solutions
        </h1>

        <p className="text-white text-[20px] text-center ">
          From groundbreaking startups to established enterprises, we're here to
          make
          <br className="hidden md:block"/> your vision a reality.
        </p>

        <div className="flex justify-center my-10">
          <button className="flex items-center gap-3 bg-white py-3 px-3 rounded-lg">
            <Icon
              icon="solar:square-arrow-right-up-bold"
              className="text-2xl text-[#34619F]"
            />
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
