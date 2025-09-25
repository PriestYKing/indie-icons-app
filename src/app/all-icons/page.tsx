import { ActionsMenu } from "@/components/ActionsMenu";
import { Input } from "@/components/ui/input";
import { data } from "./data";

const AllIcons = () => {
  return (
    <div className="flex items-center gap-4 w-full px-12 py-8 flex-col">
      <Input className="w-1/2" placeholder="Search icons..." />
      <div className="mt-10 flex flex-wrap gap-6 justify-center">
        {data.map((item, index) => (
          <ActionsMenu key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllIcons;
