import { IoIosArrowForward } from "react-icons/io";
const Header = () => {
  return (
    <div>
      <div className="header bg-white py-2">
        <div className="container w-[96%] md:w-[90%] mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <svg
                width="138"
                height="45"
                viewBox="0 0 138 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="138" height="45" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_40_3173"
                      transform="matrix(0.00378136 0 0 0.0117222 -0.0698925 -0.420833)"
                    />
                  </pattern>
                  <image
                    id="image0_40_3173"
                    width="300"
                    height="150"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
              <div className="desktop-navbar flex gap-3 text-black">
                <div className="flex items-center gap-1">
                  <li className="list-none">
                    <a href="#">Soloutions</a>
                  </li>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <li className="list-none">
                    <a href="#">Features</a>
                  </li>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </div>
                <li className="list-none">
                  <a href="#">Blogs</a>
                </li>
                <div className="flex items-center gap-1">
                  <li className="list-none">
                    <a href="#">About</a>
                  </li>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
                <button className="rounded py-[5px] px-[20px] bg-transparent border border-[#0076CE] text-[#0076CE]">Login</button>
                <button className="rounded py-[5px] px-[20px] bg-[#0076CE] border border-[#0076CE] text-white">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
