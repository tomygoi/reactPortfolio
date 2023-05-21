function Project() {
    return (
        <div class="flex items-center justify-center flex-col bg-[#B9BAA3] min-h-screen">
        {/* <!-- main card --> */}
        <div class="bg-[#D6D5C9] p-10 rounded-xl">
            {/* <!-- headers content--> */}
            <div class="flex flex-col justify-center items-center text-center">
                <div class="max-w-sm font-bold font-sans">
                    Projects
                </div>
                <div class="font-light max-w-lg mt-5 text-sm ">
                    Visit the projects below by clicking on the image
                </div>
            </div>

            {/* <!-- subscriptions --> */}
            <div
                class="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                <div class="bg-[#FBEFEF] rounded-xl">
                    <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ice_logo.svg/138px-Ice_logo.svg.png?20191213230535" class="w-8"/>
                        <div class="mt-3 font-semibold text-lg">Ice Mobile 10GB</div>
                        <div class="text-sm font-light">Up to 100Mbit/s</div>
                        <div class="my-4">
                            <span class="font-bold text-base">299,-</span>
                            <span class="font-light text-sm">/month</span>
                        </div>

                        <button class="bg-[#942B24] px-4 py-3 rounded-full border border-[#F0F0F6] shadow-xl mt-4 text-white hover:bg-[#A22C29]">
                            Add subscription
                        </button>
                    </div>
                </div>

                <div class="bg-[#FBEFEF] rounded-xl">
                    <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img src="https://www.dstny.se/app/uploads/telia_pp_rgb.png.webp" class="w-12"/>
                        <div class="mt-3 font-semibold text-lg">Telia Mobil 15GB</div>
                        <div class="text-sm font-light w-60 md:w-auto">Unlimited calls</div>
                        <div class="my-4">
                            <span class="font-bold text-base">953,-</span>
                            <span class="font-light text-sm">/month</span>
                        </div>

                        <button class="bg-[#942B24] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4 text-white hover:bg-[#A22C29]">
                            Add subscription
                        </button>
                    </div>
                </div>


                <div class="bg-[#FBEFEF] rounded-xl">
                    <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Telenor_Logo.svg/1600px-Telenor_Logo.svg.png" class="w-12"/>
                        <div class="mt-3 font-semibold text-lg">Telenor Next Fast</div>
                        <div class="text-sm font-light w-60 md:w-auto">Up to 100Mbit/s</div>
                        <div class="my-4">
                            <span class="font-bold text-base">1028,-</span>
                            <span class="font-light text-sm">/month</span>
                        </div>

                        <button class="bg-[#942B24] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4 text-white hover:bg-[#A22C29]">
                            Add subscription
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex justify-center">
                <button class="mt-12 bg-[#942B24] text-white px-4 rounded-full py-3 hover:bg-[#A22C29]">See all subscriptions</button>
            </div>
        </div>
    </div>
    )
}
export default Project;