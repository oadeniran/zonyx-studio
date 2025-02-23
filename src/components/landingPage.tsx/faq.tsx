import { Icon } from "@iconify/react";

const Faq = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start justify-between py-[100px] px-5 md:px-[100px] container mx-auto">
        <div className="w-full">
          <h4 className="text-xs text-[#34619F]">FAQ</h4>
          <h2 className="text-4xl text-[#161C2D] font-semibold">
            Frequently Asked
            <br className="hidden md:block"/> Questions
          </h2>

          <p className="text-sm text-[#2A2A2AA3] my-8">
            Lorem ipsum dolor is a cool dummy text used everywhere
            <br className="hidden md:block" /> anyhow anywhere and nowhere
          </p>
        </div>

        <div className="w-full md:w-[70%]">
          <div className="flex items-start justify-between gap-5 py-4 px-8 border border-[#34619F33] ">
            <h2 className="font-semibold text-xl">
              Do we just build AI solutions for
              <br /> businesses?
            </h2>

            <Icon
              icon="famicons:caret-down-circle"
              className="text-[#34619F] text-4xl"
            />
          </div>

          <div className="flex items-start justify-between gap-5 py-4 px-8 border border-[#34619F33] ">
            <h2 className="font-semibold text-xl">
              Do we just build AI solutions for
              <br /> businesses?
            </h2>

            <Icon
              icon="famicons:caret-down-circle"
              className="text-[#34619F] text-4xl"
            />
          </div>

          <div className="flex items-start justify-between gap-5 py-4 px-8 border border-[#34619F33] ">
            <h2 className="font-semibold text-xl">
              Do we just build AI solutions for
              <br /> businesses?
            </h2>

            <Icon
              icon="famicons:caret-down-circle"
              className="text-[#34619F] text-4xl"
            />
          </div>

          <div className="flex items-start justify-between gap-5 py-4 px-8 border border-[#34619F33] ">
            <h2 className="font-semibold text-xl">
              Do we just build AI solutions for
              <br /> businesses?
            </h2>

            <Icon
              icon="famicons:caret-down-circle"
              className="text-[#34619F] text-4xl"
            />
          </div>    

        </div>
      </div>
    </div>
  );
};

export default Faq;
