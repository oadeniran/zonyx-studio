import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="bg-[#0A0A1C]">
      <div className="px-5 md:px-[100px] py-[100px] container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 ">
          <div>
            <img src="/Images/logo.svg" alt="logo" />
          </div>

          <div>
            <h5 className="text-white/80 my-5">MENU</h5>

            <button className="block text-white my-3">About</button>
            <button className="block text-white my-3">Services</button>
            <button className="block text-white my-3">Contact</button>
          </div>

          <div>
            <h5 className="text-white/80 my-5">SERVICE</h5>

            <button className="block text-white my-3">Design</button>
            <button className="block text-white my-3">Development</button>
          </div>

          <div className="flex gap-2">
            <Icon
              icon="ri:facebook-fill"
              className="text-2xl text-[#5D0124] bg-white rounded-[50%] p-4 w-[60px] h-[60px]"
            />
            <Icon
              icon="prime:twitter"
              className="text-2xl text-[#5D0124] bg-white rounded-[50%] p-4 w-[60px] h-[60px]"
            />
            <Icon
              icon="line-md:instagram"
              className="text-2xl text-[#5D0124] bg-white rounded-[50%] p-4 w-[60px] h-[60px]"
            />
          </div>
        </div>

        <div className="border-t mt-[70px] pt-[50px] border-white/50 flex items-center justify-between">
          <p className="text-white/70 text-xs w-[60%] md:w-auto">Copyright © 2025 Code in a Dash. All Rights Reserved.</p>

          <div className="flex items-center gap-10">
            <button className="text-white text-xs">Term of Use</button>
            <button className="text-white text-xs">Privacy Policy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
