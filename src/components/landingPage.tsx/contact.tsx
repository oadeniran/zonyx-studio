import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <div>
      <div className="px-5 md:px-[100px] container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <img src="/Images/dashboard.AVIF" alt="dashboard" />
          </div>

          <div>
            <h1 className="text-[72px] md:text-[100px] font-bold">
              Let’s build
              <br /> magic!
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row my-[150px]">
          <div className="border border-[#34619F33] px-10 py-8 w-full">
            <div className="flex items-center gap-4">
              <Icon
                icon="mingcute:phone-fill"
                className="text-2xl text-white bg-[#34619F] rounded-[50%] p-4 w-[60px] h-[60px]"
              />
              <h5 className="text-[#34619F] text-lgs">PHONE</h5>
            </div>
            <p className="my-4 text-[#34619F]">+1 (234) 567-89-00</p>
          </div>

          <div className="border border-[#34619F33] px-10 py-8 bg-[#34619F33] w-full">
            <div className="flex items-center gap-4">
              <div className="bg-[#34619F] rounded-[50%]">
                <Icon
                  icon="bi:envelope-fill"
                  className="text-2xl text-white p-4 w-[60px] h-[60px]"
                />
              </div>
              <h5 className="text-[#34619F] text-lgs">EMAIL</h5>
            </div>
            <p className="my-4 text-[#34619F]">info@agency.com</p>
          </div>

          <div className="border border-[#34619F33] px-10 py-8 w-full">
            <div className="flex items-center gap-4">
              <Icon
                icon="bi:compass-fill"
                className="text-2xl text-white bg-[#34619F] rounded-[50%] p-4 w-[60px] h-[60px]"
              />
              <h5 className="text-[#34619F] text-lgs">ADDRESS</h5>
            </div>
            <p className="my-4 text-[#34619F]">2247 Lunetta Street, TX 76301</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
