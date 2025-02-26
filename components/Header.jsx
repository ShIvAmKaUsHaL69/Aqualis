import Link from "next/link";
import Hamburger from "./Hamburger";

export default function Header() {
  return (
    <div className="w-full min-h-20 bg-[#FFFFFF66] absolute px-3">
    <div className="max-w-[1280px] justify-between items-center flex flex-row mx-auto py-4">
      <img src='/logo.png' className="" alt="logo" />
      <div className=" hidden lg:flex flex-row gap-12 text-xl color-[#05363B] font-bold">
        <Link href='#'>Home</Link>
        <Link href='#'>About Us</Link>
        <Link href='#'>Bunkering</Link>
        <Link href='#'>Other Services</Link>
        <Link href='#'>Blogs</Link>
        <Link href='#'>Contact Us</Link>
      </div>
      <div className="lg:hidden"><Hamburger /></div>
    </div>
  </div>
  )
}
