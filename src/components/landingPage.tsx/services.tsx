import { Icon } from "@iconify/react";

const Services = () => {
  return (
    <div>
      <div className="py-[80px] px-5 container mx-auto">
        <h4 className="text-xs text-[#34619F] text-center">OUR SERVICES</h4>

        <h2 className="text-4xl text-[#161C2D] text-center font-semibold">
          We provide great services for our
          <br className="hidden md:block" /> clients based on needs
        </h2>

        <div className="flex flex-col md:flex-row items-center  my-10 md:px-[100px]">
          <div className="py-10 px-8 border border-[#34619F33] rounded-l-md w-full min-h-[300px]">
            <div className="flex items-center gap-3">
              <Icon
                icon="jam:code"
                className="text-[50px] text-white bg-[#34619F] rounded-[50%] p-6 w-[80px] h-[80px]"
              />
              <h2 className="text-[#34619F] font-semibold text-2xl">
                Custom AI Solutions
              </h2>
            </div>

            <p className="text-[#2A2A2A99] leading-[32px] mt-5">
              We provide tailor-made AI systems designed to address unique
              business challenges. We collaborate closely with clients to
              understand their specific needs, processes, and goals, ensuring
              that the solutions integrate seamlessly into their workflows.
            </p>
          </div>

          <div className="py-10 px-8 border border-[#34619F33] rounded-r-md w-full bg-[#34619F33] min-h-[310px]">
            <div className="flex items-center gap-3">
              <div className="rounded-[50%] bg-[#34619F]">
                <Icon
                  icon="bi:briefcase-fill"
                  className="text-[50px] text-white  p-6 w-[80px] h-[80px]"
                />
              </div>
              <h2 className="text-[#34619F] font-semibold text-2xl">
                SAAS Products
              </h2>
            </div>

            <p className="text-[#2A2A2A99] leading-[32px] mt-5">
              Ready-to-use software solutions designed to serve multiple
              businesses across various industries. These tools are versatile,
              scalable, and easy to deploy, requiring minimal customization to
              start delivering value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
