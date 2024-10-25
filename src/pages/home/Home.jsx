const Home = () => {
  return (
    <div className="py-16 md:py-32 w-full flex items-center justify-center">
      <div className="">
        <h4 className="text-[#4E0043]">Hi, my name is</h4>
        <h1 className="text-5xl font-bold text-gray-300">Muin</h1>
        <h1 className="text-4xl text-gray-400 font-bold my-2">
          I build for the web.
        </h1>
        <p className="text-gray-600 leading-5 ">
          I'm a Frontend Developer passionate about <br />
          Software Engineering. Currently, I'm focusing <br /> on Backend
          Technologies.
        </p>
        <button className="px-4 py-[4px]  font-medium border group relative text-sm mt-4 text-gray-400">
          <span className="relative inline-flex overflow-hidden">
            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
              My Resume
            </div>
            <div className="absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              My Resume
            </div>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
