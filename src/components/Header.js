function Header() {
  return (
    <div className="h-screen flex items-start">
      <section className="w-full bg-cover bg-center py-8 md:py-16">
        <div className="container max-w-lg mx-auto text-center text-[#0A100D]">
          <h1 className="text-5xl font-medium mb-6">Tony Trinh</h1>
          <p className="text-xl mb-12">
            My name is Tony Trinh and I am a University of Georgia Alumni! I am
            attending this boot camp to broaden my experience in computer
            science and eventually seek work in this field. I previously
            studied computer science throughout high school, but did not take
            the opportunity at the time to continue. Through this bootcamp I
            hope to further develop the skills I was previously introduced to.
          </p>
          <nav className="flex space-x-4 justify-center">
          <a
            href="#"
            className="bg-[#902923] text-white py-4 px-12 rounded-full hover:bg-[#A22C29]"
          >
            Home
          </a>
          <a
            href="#"
            className="bg-[#902923] text-white py-4 px-12 rounded-full hover:bg-[#A22C29]"
          >
            Projects
          </a>
          <a
            href="#"
            className="bg-[#902923] text-white py-4 px-12 rounded-full hover:bg-[#A22C29]"
          >
            Contact
          </a>
          </nav>
          
        </div>
      </section>
    </div>
  );
}

export default Header;
