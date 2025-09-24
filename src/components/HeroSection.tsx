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

        <img src="/logo.svg" alt="" />
      </div>
      <div className="flex items-center flex-row gap-4 mt-6 justify-between">
        <div className="flex flex-row gap-4">
          <Button>View all icons</Button>
          <Button>Get Started</Button>
          <Button>GitHub</Button>
        </div>
        <Input className="w-1/2" placeholder="Search icons..." />
      </div>

      <div className="mt-10 grid grid-cols-3 grid-rows-2 gap-4 grid-flow-row">
        <div className="border-1 p-4 rounded-lg hover:bg-gray-900 ">
          <div className="p-4">
            <img src="/vercel.svg" alt="Icon 1" className="w-4 h-4" />
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
            <img src="/vercel.svg" alt="Icon 2" className="w-4 h-4" />
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
            <img src="/vercel.svg" alt="Icon 3" className="w-4 h-4" />
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
            <img src="/vercel.svg" alt="Icon 4" className="w-4 h-4" />
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
            <img src="/vercel.svg" alt="Icon 5" className="w-4 h-4" />
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
            <img src="/vercel.svg" alt="Icon 6" className="w-4 h-4" />
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
        <img src="/vercel.svg" alt="Icon 1" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default HeroSection;
