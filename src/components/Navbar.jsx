import { User } from "@nextui-org/react";
import { FaBitcoin } from "react-icons/fa6";


const Navbar = () => {

  return (
    <nav className="p-3 grid grid-cols-12">
      <div className="col-span-2 flex items-center relative">
        <div className="flex gap-x-2 items-center">
          <FaBitcoin className="text-3xl" />

          <h3>Gen 27 Fin-App</h3>
        </div>
        <div className="bg-slate-200 h-[40px] w-[2px] rounded-3xl absolute right-2"></div>
      </div>
      <div className="col-span-7 flex items-center">
        <p className="text-xl">Hey 👋</p>
      </div>
      <div className="col-span-3 flex items-center pl-5">
        <User
          //
          description="Software Engineer"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          className=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
