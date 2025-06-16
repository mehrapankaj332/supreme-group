import Image from "next/image";

const Header = () => (
  <div className="w-full py-5 px-8 flex justify-between items-center bg-white shadow-md sticky top-0 z-50">
    <div className="px-24">
      <Image
        width={146}
        height={41}
        src="/supreme-images/Supreme.svg"
        alt="logo"
        priority
      />
    </div>
    <nav className="flex gap-10 px-24 text-base font-medium">
      <button className="md:block hidden bg-cyan-400 text-black px-4 py-2 rounded-3xl cursor-pointer">
        About us
      </button>
    </nav>
  </div>
);

export default Header;
