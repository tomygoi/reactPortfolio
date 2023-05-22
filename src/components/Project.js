function Project() {
  return (
    <div
      class="flex items-center justify-center flex-col bg-[#B9BAA3] min-h-screen"
      id="projects"
    >
      {/* <!-- main card --> */}
      <div class="bg-[#D6D5C9] p-10 rounded-xl mt-[-600px]">
        {/* <!-- headers content--> */}
        <div class="flex flex-col justify-center items-center text-center">
          <div class="max-w-sm font-bold font-sans">Projects</div>
          <div class="font-light max-w-lg mt-5 text-sm ">
            Visit the projects below by clicking on the image
          </div>
        </div>

        {/* <!-- subscriptions --> */}
        <div class="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
          <div class="bg-[#FBEFEF] rounded-xl">
            <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <div class="mt-3 font-semibold text-lg">AniMatch</div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ice_logo.svg/138px-Ice_logo.svg.png?20191213230535"
                class="w-8"
              />

              <div class="my-4">
                <span class="font-bold text-base"></span>
                <span class="font-light text-sm"></span>
              </div>

              <button class="bg-[#942B24] px-4 py-3 rounded-full border border-[#F0F0F6] shadow-xl mt-4 text-white hover:bg-[#A22C29]">
                Repository
              </button>
            </div>
          </div>

          <div class="bg-[#FBEFEF] rounded-xl">
            <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <div class="mt-3 font-semibold text-lg">Kickshaw</div>
              <img
                src="https://www.dstny.se/app/uploads/telia_pp_rgb.png.webp"
                class="w-12"
              />

              <div class="my-4">
                <span class="font-bold text-base"></span>
                <span class="font-light text-sm"></span>
              </div>

              <button class="bg-[#942B24] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4 text-white hover:bg-[#A22C29]">
                Repository
              </button>
            </div>
          </div>

          <div class="bg-[#FBEFEF] rounded-xl">
            <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <div class="mt-3 font-semibold text-lg">Employee Tracker</div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Telenor_Logo.svg/1600px-Telenor_Logo.svg.png"
                class="w-12"
              />

              <div class="my-4">
                <span class="font-bold text-base"></span>
                <span class="font-light text-sm"></span>
              </div>

              <button class="bg-[#942B24] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4 text-white hover:bg-[#A22C29]">
                Repository
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
