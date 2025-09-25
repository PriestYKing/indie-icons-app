import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-10 py-4">
      <Link href="/" className="text-2xl cursor-pointer flex gap-2">
        <img src="logo.svg" />
        Indie-Icons
      </Link>

      <div className="flex items-center gap-4">
        <div>
          <Link href="/" className="ml-4 hover:text-red-300">
            Icons
          </Link>
          <Link href="/about" className="ml-4 hover:text-red-300">
            Guide
          </Link>
          <Link href="/contact" className="ml-4 hover:text-red-300">
            Packages
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
