const Choose = () => {
  return (
    <div className="bg-[#EBF0F6]">
      <div className=" py-[100px] px-5 md:px-[100px] container mx-auto">
        <h4 className="text-xs text-[#34619F] text-center">WHY CHOOSE US</h4>

        <h2 className="text-4xl text-[#161C2D] text-center font-semibold">
          People choose us because we
          <br /> serve the best for everyone
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center xl:px-[10rem]  my-[50px]">
          <div className="flex items-start gap-5">
            <img
              src="/Images/manager.svg"
              alt="manager"
              className="bg-[#34619F]/10 px-4 py-4 rounded-xl"
            />

            <div>
              <h4 className="text-xl font-semibold">
                Dedicated project manager
              </h4>

              <p className="text-sm py-3 text-[#161C2D]">
                Lorem ipsum dolor is a cool dummy text used everywhere anyhow
                anywhere and nowhere
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <img
              src="/Images/layers.svg"
              alt="manager"
              className="bg-[#34619F]/10 p-4 rounded-xl"
            />

            <div>
              <h4 className="text-xl font-semibold">
                Dedicated project manager
              </h4>

              <p className="text-sm py-3 text-[#161C2D]">
                Lorem ipsum dolor is a cool dummy text used everywhere anyhow
                anywhere and nowhere
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <img
              src="/Images/chat.svg"
              alt="manager"
              className="bg-[#34619F]/10 p-4 rounded-xl"
            />

            <div>
              <h4 className="text-xl font-semibold">
                Dedicated project manager
              </h4>

              <p className="text-sm py-3 text-[#161C2D]">
                Lorem ipsum dolor is a cool dummy text used everywhere anyhow
                anywhere and nowhere
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <img
              src="/Images/timelapse.svg"
              alt="manager"
              className="bg-[#34619F]/10 p-4 rounded-xl"
            />

            <div>
              <h4 className="text-xl font-semibold">
                Dedicated project manager
              </h4>

              <p className="text-sm py-3 text-[#161C2D]">
                Lorem ipsum dolor is a cool dummy text used everywhere anyhow
                anywhere and nowhere
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#D4D6DE] mt-[100px] pt-[50px] md:mx-[100px]">
          <div>
            <h3 className="text-2xl font-bold">
              Ready to launch your next project?
            </h3>

            <p className="text-sm text-[#161C2D] my-10">
              Lorem ipsum dolor is a cool dummy text used everywhere anyhow
              <br />
              anywhere and nowhere
            </p>
          </div>

          <div>
            <button className="bg-[#34619F] text-white py-2 px-4 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
