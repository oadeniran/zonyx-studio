import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Portfolio = () => {
  return (
    <div>
      <div className="px-5 md:px-[100px] pb-[100px] container mx-auto">
        <h4 className="text-xs text-[#34619F] text-center">PORTFOLIO</h4>

        <h2 className="text-4xl text-[#161C2D] text-center font-semibold">
          Latest Work
        </h2>

        <div className="rounded-3xl my-10 relative">
          <div>
            <div className="w-[95%] h-[200px] absolute bg-[#F1F4F9] rounded-3xl left-0 right-0 mx-auto  bottom-[-30px] "/>
            <div className="w-[90%] h-[200px] absolute bg-[#F7FAFC] rounded-3xl left-0 right-0 mx-auto  bottom-[-60px] -z-1"/>
          </div>
          <LazyLoadImage src="/Images/pao.AVIF" effect="blur" width="100%" className="rounded-t-3xl" />

          <div className="flex flex-col lg:flex-row bg-[#E1E8F1] rounded-b-3xl my-[-10px] justify-between gap-10 py-[50px] px-8 relative">
            <div className="w-full">
              <h4 className="text-[#34619F] tracking-[10px] text-xs">EDUCATION</h4>
              <h3 className="font-semibold text-2xl">StudywithPAO</h3>

              <div className="flex items-center gap-16 my-4">
                <div>
                  <h5 className="text-[#34619F] font-bold text-xl">3000+</h5>
                  <p className="text-[#34619F] text-xs">USERS</p>
                </div>

                <div>
                  <h5 className="text-[#34619F] font-bold text-xl">5000+</h5>
                  <p className="text-[#34619F] text-xs">DOWNLOADS</p>
                </div>
                <div>
                  <h5 className="text-[#34619F] font-bold text-xl">10+</h5>
                  <p className="text-[#34619F] text-xs">USERS</p>
                </div>
              </div>
            </div>

            <div className="w-[80%]">
              <p className="md:w-[100%] leading-[32px]  text-[#3A3A3A]">
                We provide tailor-made AI systems designed to address unique
                business challenges. We collaborate closely with clients to 
                understand their specific needs, processes, and goals, ensuring
                that the solutions integrate seamlessly into their workflows.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
