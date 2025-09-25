import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const HeroSection = () => {
  return (
    <div className="px-32 text-white mt-10">
      <div>
        <Button>v1.0.0</Button>
      </div>
      <div className="flex justify-between pt-10">
        <div className="">
          <p className="text-6xl font-semibold">Beautiful &</p>
          <p className="text-6xl mt-2 font-semibold">consistent icons</p>
          <p className="text-3xl mt-4 font-semibold">Made for the web.</p>
        </div>

        {/*   <img src="/logo.svg" alt="" /> */}
      </div>
      <div className="flex items-center flex-row gap-4 mt-6 justify-between">
        <div className="flex flex-row gap-4">
          <Link href="/all-icons">
            <Button>View all icons</Button>
          </Link>
          {/* <Button>Get Started</Button>
          <Button>GitHub</Button> */}
        </div>
        {/* <Input className="w-1/2" placeholder="Search icons..." /> */}
      </div>

      <div className="mt-10 grid grid-cols-3 grid-rows-2 gap-4 grid-flow-row">
        <div className="border-1 p-4 rounded-lg hover:bg-gray-900 ">
          <div className="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-zap-icon lucide-zap"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-lg">Fast Integration</p>
            <p className="text-sm mt-2">
              Easily add icons to your project with simple and quick setup
              steps.
            </p>
          </div>
        </div>
        <div className="border-1 p-4 rounded-lg hover:bg-gray-900">
          <div className="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-biohazard-icon lucide-biohazard"
            >
              <circle cx="12" cy="11.9" r="2" />
              <path d="M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" />
              <path d="m8.9 10.1 1.4.8" />
              <path d="M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" />
              <path d="m15.1 10.1-1.4.8" />
              <path d="M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" />
              <path d="M12 13.9v1.6" />
              <path d="M13.5 5.4c-1-.2-2-.2-3 0" />
              <path d="M17 16.4c.7-.7 1.2-1.6 1.5-2.5" />
              <path d="M5.5 13.9c.3.9.8 1.8 1.5 2.5" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-lg">Modern Design</p>
            <p className="text-sm mt-2">
              Crafted for clarity and style, fitting perfectly in any modern UI.
            </p>
          </div>
        </div>
        <div className="border-1 p-4 rounded-lg hover:bg-gray-900">
          <div className="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-align-vertical-distribute-center-icon lucide-align-vertical-distribute-center"
            >
              <path d="M22 17h-3" />
              <path d="M22 7h-5" />
              <path d="M5 17H2" />
              <path d="M7 7H2" />
              <rect x="5" y="14" width="14" height="6" rx="2" />
              <rect x="7" y="4" width="10" height="6" rx="2" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-lg">Flexible Usage</p>
            <p className="text-sm mt-2">
              Use icons in React, Vue, or plain HTML—your choice, your workflow.
            </p>
          </div>
        </div>
        <div className="border-1 p-4 rounded-lg hover:bg-gray-900">
          <div className="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-package-open-icon lucide-package-open"
            >
              <path d="M12 22v-9" />
              <path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" />
              <path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" />
              <path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-lg">Open Source</p>
            <p className="text-sm mt-2">
              Free to use and contribute, backed by a passionate developer
              community.
            </p>
          </div>
        </div>
        <div className="border-1 p-4 rounded-lg hover:bg-gray-900">
          <div className="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-accessibility-icon lucide-accessibility"
            >
              <circle cx="16" cy="4" r="1" />
              <path d="m18 19 1-7-6 1" />
              <path d="m5 8 3-3 5.5 3-2.36 3.5" />
              <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
              <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-lg">Accessible</p>
            <p className="text-sm mt-2">
              Designed with accessibility in mind for all users and devices.
            </p>
          </div>
        </div>
        <div className="border-1 p-4 rounded-lg hover:bg-gray-900">
          <div className="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-rss-icon lucide-rss"
            >
              <path d="M4 11a9 9 0 0 1 9 9" />
              <path d="M4 4a16 16 0 0 1 16 16" />
              <circle cx="5" cy="19" r="1" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-lg">Regular Updates</p>
            <p className="text-sm mt-2">
              New icons and improvements are released frequently to keep you up
              to date.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-4 justify-center flex-col p-4">
        <p>Available For : </p>
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0,0,256,256"
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              //  style="mix-blend-mode: normal"
            >
              <g transform="scale(8.53333,8.53333)">
                <path d="M10.67969,4.18164c-0.611,0 -1.17769,0.13678 -1.67969,0.42578c-1.56887,0.90579 -2.16603,3.11312 -1.84961,5.86133c-2.53769,1.10008 -4.15039,2.71992 -4.15039,4.53125c0,1.81133 1.6127,3.43117 4.15039,4.53125c-0.31626,2.7481 0.28074,4.95554 1.84961,5.86133c0.501,0.289 1.06769,0.42578 1.67969,0.42578c1.30263,0 2.80816,-0.65377 4.32031,-1.77539c1.51228,1.12162 3.01964,1.77539 4.32227,1.77539c0.611,0 1.17769,-0.13678 1.67969,-0.42578c1.56886,-0.90579 2.16602,-3.11315 1.84961,-5.86133c2.53674,-1.10007 4.14844,-2.72031 4.14844,-4.53125c0,-1.81133 -1.6127,-3.43117 -4.15039,-4.53125c0.31626,-2.7481 -0.28074,-4.95554 -1.84961,-5.86133c-0.501,-0.29 -1.06769,-0.42578 -1.67969,-0.42578c-1.30263,0 -2.80816,0.65377 -4.32031,1.77539c-1.51224,-1.12162 -3.01814,-1.77539 -4.32031,-1.77539zM10.67969,5.93164c0.78163,0 1.81527,0.41561 2.9375,1.18555c-0.65982,0.62268 -1.30604,1.33074 -1.92774,2.11914c-1.00837,0.14459 -1.95911,0.35536 -2.83984,0.61914c-0.00473,-0.06108 -0.01593,-0.12517 -0.01953,-0.18555c-0.107,-1.78 0.28392,-3.10688 1.04492,-3.54687c0.225,-0.13 0.48769,-0.19141 0.80469,-0.19141zM19.32031,5.93164c0.316,0 0.57969,0.06141 0.80469,0.19141c0.761,0.439 1.15192,1.76687 1.04492,3.54688c-0.00363,0.06038 -0.01478,0.12447 -0.01953,0.18555c-0.88129,-0.26394 -1.83272,-0.47454 -2.8418,-0.61914c-0.62169,-0.78829 -1.26598,-1.49653 -1.92578,-2.11914c1.12215,-0.76981 2.15627,-1.18555 2.9375,-1.18555zM15,8.22852c0.27108,0.24674 0.54027,0.50752 0.8125,0.79297c-0.26978,-0.00906 -0.53813,-0.02148 -0.8125,-0.02148c-0.27371,0 -0.5414,0.01247 -0.81055,0.02148c0.27199,-0.28515 0.53972,-0.54647 0.81055,-0.79297zM15,10.75c0.82869,0 1.61413,0.04632 2.35938,0.12695c0.45449,0.61774 0.9024,1.27086 1.32227,1.99805c0.40243,0.69703 0.7583,1.41049 1.07227,2.125c-0.31401,0.71494 -0.66959,1.4295 -1.07227,2.12695c-0.41856,0.72509 -0.86536,1.374 -1.31836,1.99023c-0.77157,0.08442 -1.56306,0.13281 -2.36328,0.13281c-0.82869,0 -1.61413,-0.04632 -2.35937,-0.12695c-0.45449,-0.61774 -0.9024,-1.26891 -1.32227,-1.99609c-0.40267,-0.69745 -0.75816,-1.41201 -1.07226,-2.12695c0.31388,-0.71451 0.66983,-1.42797 1.07226,-2.125c0.41872,-0.72509 0.86525,-1.37595 1.31836,-1.99219c0.77157,-0.08442 1.56306,-0.13281 2.36328,-0.13281zM19.74609,11.29102c0.39675,0.09579 0.77816,0.19919 1.13672,0.31445c-0.08123,0.36705 -0.18058,0.74114 -0.29297,1.11914c-0.12868,-0.24147 -0.25347,-0.48371 -0.39258,-0.72461c-0.14313,-0.2478 -0.30202,-0.47044 -0.45117,-0.70898zM10.25195,11.29297c-0.14865,0.23781 -0.30655,0.46002 -0.44922,0.70703c-0.13907,0.24094 -0.26394,0.48311 -0.39258,0.72461c-0.11265,-0.37878 -0.21361,-0.75331 -0.29492,-1.12109c0.36514,-0.11537 0.7456,-0.21753 1.13672,-0.31055zM7.46875,12.24609c0.2107,0.88962 0.50298,1.81182 0.87891,2.75195c-0.37513,0.9379 -0.66618,1.85841 -0.87695,2.74609c-1.74147,-0.84094 -2.7207,-1.88777 -2.7207,-2.74414c0,-0.879 0.95188,-1.88073 2.54688,-2.67773c0.05444,-0.02724 0.11625,-0.04957 0.17188,-0.07617zM22.5293,12.25586c1.74147,0.84094 2.7207,1.88777 2.7207,2.74414c0,0.879 -0.95188,1.88073 -2.54687,2.67773c-0.05444,0.02723 -0.11625,0.04957 -0.17187,0.07617c-0.21082,-0.89014 -0.50071,-1.81321 -0.87695,-2.75391c0.37468,-0.93709 0.66441,-1.8572 0.875,-2.74414zM15,13c-1.105,0 -2,0.895 -2,2c0,1.105 0.895,2 2,2c1.105,0 2,-0.895 2,-2c0,-1.105 -0.895,-2 -2,-2zM9.41016,17.27539c0.12872,0.24156 0.25537,0.48362 0.39453,0.72461c0.14297,0.24762 0.30023,0.47061 0.44922,0.70898c-0.39675,-0.09579 -0.77816,-0.19919 -1.13672,-0.31445c0.08129,-0.36728 0.18048,-0.7409 0.29297,-1.11914zM20.58984,17.27734c0.11252,0.37842 0.21367,0.75171 0.29492,1.11914c-0.36514,0.11537 -0.7456,0.21753 -1.13672,0.31055c0.14865,-0.23781 0.30655,-0.46002 0.44922,-0.70703c0.13878,-0.24044 0.26418,-0.48166 0.39258,-0.72266zM8.84961,20.14453c0.88129,0.26394 1.83272,0.47454 2.8418,0.61914c0.62188,0.78867 1.26568,1.49826 1.92578,2.12109c-1.12215,0.76972 -2.15592,1.18555 -2.9375,1.18555c-0.316,0 -0.57969,-0.06336 -0.80469,-0.19336c-0.761,-0.439 -1.15192,-1.76492 -1.04492,-3.54492c0.00366,-0.06101 0.01472,-0.12578 0.01953,-0.1875zM21.15039,20.14453c0.00479,0.06172 0.01589,0.12649 0.01953,0.1875c0.107,1.78 -0.28392,3.10492 -1.04492,3.54492c-0.225,0.13 -0.48769,0.19336 -0.80469,0.19336c-0.78158,0 -1.81535,-0.4157 -2.9375,-1.18555c0.66015,-0.6229 1.30573,-1.33231 1.92773,-2.12109c1.00837,-0.14459 1.95911,-0.35536 2.83984,-0.61914zM14.1875,20.97852c0.26978,0.00906 0.53813,0.02148 0.8125,0.02148c0.27437,0 0.54272,-0.01242 0.8125,-0.02148c-0.27223,0.28545 -0.54142,0.54625 -0.8125,0.79297c-0.27108,-0.24674 -0.54027,-0.50752 -0.8125,-0.79297z"></path>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0,0,256,256"
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <g transform="scale(5.33333,5.33333)">
                <path d="M18.974,31.5c0,0.828 -0.671,1.5 -1.5,1.5c-0.829,0 -1.5,-0.672 -1.5,-1.5v-14c0,-0.653 0.423,-1.231 1.045,-1.43c0.625,-0.198 1.302,0.03 1.679,0.563l16.777,23.704c5.142,-3.628 8.525,-9.602 8.525,-16.337c0,-11 -9,-20 -20,-20c-11,0 -20,9 -20,20c0,11 9,20 20,20c3.192,0 6.206,-0.777 8.89,-2.122l-13.916,-19.662zM28.974,16.5c0,-0.828 0.671,-1.5 1.5,-1.5c0.829,0 1.5,0.672 1.5,1.5v13.84l-3,-4.227z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
