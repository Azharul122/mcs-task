const Home = () => {
  return (
    <div>
      {/* Hero */}
      <div className="hero py-10 w-full bg-white">
        <div className=" ml-[2%] md:ml-[5%] ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center">
            <div className="content pr-[2%]">
              <p className="text-black text-2xl md:text-5xl left-0 text-justify pb-3">
                Find Partners (CAs) available online
              </p>
              <p className="text-black md:text-lg text-justify pb-6">
                CONNECT with us where your services are listed and visible to a
                myriad of businesses seeking CA’s for compliance support
              </p>
              <div className="relative w-full h-[49px] md:h-[69px]">
                <input
                  type="text"
                  className="rounded-lg w-full h-full border border-[#BFBFBF] bg-transparent"
                />
                <button className="text-white absolute bg-[#0076CE] right-0 h-full px-6 rounded-lg">
                  Search
                </button>
              </div>
            </div>
            <div className="gallery h-[250px] md:h-[390px] grid grid-cols-3  pr-[2%]">
             <img className="h-[80%] " src="https://media.istockphoto.com/id/1414012544/photo/handshake-at-work.webp?b=1&s=170667a&w=0&k=20&c=hbZfCVFfmIo1JEAGaaKwtq9f5mjTVBdnBVj0XfDs2Ro=" alt="" />
             <img className="h-[80%] self-end" src="https://media.istockphoto.com/id/1414012544/photo/handshake-at-work.webp?b=1&s=170667a&w=0&k=20&c=hbZfCVFfmIo1JEAGaaKwtq9f5mjTVBdnBVj0XfDs2Ro=" alt="" />
             <img className="h-[80%] self-center" src="https://media.istockphoto.com/id/1414012544/photo/handshake-at-work.webp?b=1&s=170667a&w=0&k=20&c=hbZfCVFfmIo1JEAGaaKwtq9f5mjTVBdnBVj0XfDs2Ro=" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
