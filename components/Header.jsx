import Link from "next/link";
import Hamburger from "./Hamburger";

export default function Header({ className }) {
  return (
    <div className={`w-full min-h-20 bg-[#FFFFFF66] fixed top-0 z-50 transition-transform duration-300 ${className}`}>
      <div className=" justify-between items-center px-5 flex flex-row lg:px-[12%] py-1">
        <img src="/logo.png" className="" alt="logo" />
        <div className="hidden lg:flex flex-row gap-14 text-base text-[#05363B] font-bold">
          <Link href="/">Home</Link>
          <Link href="/#about">About Us</Link>
          <Link href="/#bunkering">Bunkering</Link>
          <Link href="/#services">Other Services</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/#contact">Contact Us</Link>
        </div>
        <div className="lg:hidden">
          <Hamburger />
        </div>
      </div>
    </div>
  );
}
