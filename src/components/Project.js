import aniMatch from "../assets/aniMatch_upscaled.jpg";
import Kickshaw from "../assets/kickshaw.jpg";
import employeeTracker from "../assets/employees_95.jpg";
import comingSoon from "../assets/comingSoon_35.png";
function Project() {
  return (
    <div
      className="flex items-center justify-center flex-col bg-[#B9BAA3] min-h-screen"
      id="projects"
    >
      {/* <!-- Project Container Card --> */}
      <div className="bg-[#D6D5C9] p-10 rounded-xl">
        {/* <!-- headers content--> */}
        <div className="flex flex-col justify-center items-center text-center">
          <div className="max-w-sm font-bold font-sans">Projects</div>
          <div className="font-light max-w-lg mt-5 text-sm ">
            Visit the projects below by clicking on the image
            <span style={{display:"block"}}>(if deployable)</span> 
          </div>
        </div>

        {/* <!-- Projects --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center mt-10">
          {/* Card 1 */}
          <div className="bg-[#330E0C] rounded-xl ">
            <div className="flex flex-col p-8 rounded-xl bg-[#BCBAA6] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <div className="mt-auto font-semibold text-xl justify-center items-center flex">
                AniMatch
              </div>

              
              <a href="https://animatch.herokuapp.com/" className="block">
              <img src={aniMatch} className="rounded-xl mt-3 h-64 md:h-auto md:max-h-64 object-cover border border-black w-full" alt="aniMatch logo"/>
              </a>

              <a href="https://github.com/BJThompson12/Heroku-Heroes">
              <button className="bg-[#330E0C] px-4 py-3 rounded-full shadow-xl mt-4 text-white hover:bg-[#A22C29] w-full">
                Repository
              </button>
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#330E0C] rounded-xl md:w-{1/3}">
            <div className="flex flex-col p-8 rounded-xl bg-[#BCBAA6] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <div className="mt-auto font-semibold text-xl justify-center items-center flex">
                Kickshaw
              </div>
              <a href="https://lavanat.github.io/First-Up-Kickshaw/">
              <img src={Kickshaw} className="rounded-xl mt-3 h-64 object-cover border border-black" alt="gourmet food"/>
              </a>
              <a href="https://github.com/lavanat/First-Up-Kickshaw">
              <button className="bg-[#330E0C] px-4 py-3 rounded-full shadow-xl mt-4 text-white hover:bg-[#A22C29] w-full">
                Repository
              </button>
              </a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#330E0C] rounded-xl md:w-{1/3}">
            <div className="flex flex-col p-8 rounded-xl bg-[#BCBAA6] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <div className="mt-auto font-semibold text-xl justify-center items-center flex">
                Employee Tracker
              </div>

              <img
                src={employeeTracker}
                className="rounded-xl h-64 object-cover mt-3 border border-black"
                alt="employees working with two open laptops"
              />
              <a href="https://github.com/tomygoi/employeeTracker">
              <button className="bg-[#330E0C] px-4 py-3 rounded-full shadow-xl mt-4 text-white hover:bg-[#A22C29] w-full">
                Repository
              </button>
              </a>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-[#330E0C] rounded-xl md:w-{1/3}">
            <div className="flex flex-col p-8 rounded-xl bg-[#BCBAA6] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <img src={comingSoon} className="rounded-xl h-64 object-cover border border-black" alt="coming soon text in front of team hand-stack" />
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-[#330E0C] rounded-xl md:w-{1/3}">
            <div className="flex flex-col p-8 rounded-xl bg-[#BCBAA6] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <img src={comingSoon} className="rounded-xl h-64 object-cover border border-black" alt="coming soon text in front of team hand-stack" />
            </div>
          </div>
          {/* Card 6 */}
          <div className="bg-[#330E0C] rounded-xl md:w-{1/3}">
            <div className="flex flex-col p-8 rounded-xl bg-[#BCBAA6] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <img src={comingSoon} className="rounded-xl h-64 object-cover border border-black" alt="coming soon text in front of team hand-stack" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
