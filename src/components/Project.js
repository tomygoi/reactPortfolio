import aniMatch from "../assets/aniMatch.jpg";
import Kickshaw from "../assets/kickshaw.jpg";
import employeeTracker from "../assets/employees_95.jpg";
import comingSoon from "../assets/comingSoon_35.png";
function Project() {
  return (
    <div
      class="flex items-center justify-center flex-col bg-[#B9BAA3] min-h-screen"
      id="projects"
    >
      {/* <!-- Project Container Card --> */}
      <div class="bg-[#D6D5C9] p-10 rounded-xl">
        {/* <!-- headers content--> */}
        <div class="flex flex-col justify-center items-center text-center">
          <div class="max-w-sm font-bold font-sans">Projects</div>
          <div class="font-light max-w-lg mt-5 text-sm ">
            Visit the projects below by clicking on the image
            <span style={{display:"block"}}>(if deployable)</span> 
          </div>
        </div>

        {/* <!-- Projects --> */}
        <div class="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12 md:space-y-0 justify-center items-center mt-10">
          {/* Card 1 */}
          <div class="bg-[#330E0C] rounded-xl">
            <div class="flex flex-col p-8 rounded-xl bg-[#BCBAA6] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <div class="mt-auto font-semibold text-xl justify-center items-center flex">
                AniMatch
              </div>

              
              <a href="https://animatch.herokuapp.com/" className="block">
              <img src={aniMatch} class="rounded-xl mt-3 h-64 object-cover border border-black w-full" alt="aniMatch logo"/>
              </a>

              <a href="https://github.com/BJThompson12/Heroku-Heroes">
              <button class="bg-[#330E0C] px-4 py-3 rounded-full shadow-xl mt-4 text-white hover:bg-[#A22C29] w-full">
                Repository
              </button>
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div class="bg-[#330E0C] rounded-xl">
            <div class="flex flex-col p-8 rounded-xl bg-[#BCBAA6] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <div class="mt-auto font-semibold text-xl justify-center items-center flex">
                Kickshaw
              </div>
              <a href="https://lavanat.github.io/First-Up-Kickshaw/">
              <img src={Kickshaw} class="rounded-xl mt-3 h-64 object-cover border border-black" alt="gourmet food"/>
              </a>
              <a href="https://github.com/lavanat/First-Up-Kickshaw">
              <button class="bg-[#330E0C] px-4 py-3 rounded-full shadow-xl mt-4 text-white hover:bg-[#A22C29] w-full">
                Repository
              </button>
              </a>
            </div>
          </div>
          {/* Card 3 */}
          <div class="bg-[#330E0C] rounded-xl">
            <div class="flex flex-col p-8 rounded-xl bg-[#BCBAA6] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <div class="mt-auto font-semibold text-xl justify-center items-center flex">
                Employee Tracker
              </div>

              <img
                src={employeeTracker}
                class="rounded-xl h-64 object-cover mt-3 border border-black"
                alt="employees working with two open laptops"
              />
              <a href="https://github.com/tomygoi/employeeTracker">
              <button class="bg-[#330E0C] px-4 py-3 rounded-full shadow-xl mt-4 text-white hover:bg-[#A22C29] w-full">
                Repository
              </button>
              </a>
            </div>
          </div>
          {/* Card 4 */}
          <div class="bg-[#330E0C] rounded-xl">
            <div class="flex flex-col p-8 rounded-xl bg-[#BCBAA6] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <img src={comingSoon} class="rounded-xl h-64 object-cover border border-black" alt="coming soon text in front of team hand-stack" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
