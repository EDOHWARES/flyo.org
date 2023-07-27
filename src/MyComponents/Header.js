import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";

export default function Header() {
    return (
        <header className="w-screen flex flex-row py-10 px-10 items-center justify-between mx-auto">
            <div className="cursor-pointer w-[7rem]">
                <img src={logo} alt="" />
            </div>
            <nav className="hidden md:flex">
                <ul className="flex flex-row space-x-10 items-center text-gray-400">
                    <li className="relative">
                        <p id="dropdown--hd" className="relative bg-cyanGrad text-darkBlue2B px-4 py-2 rounded-md cursor-pointer border border-white font-bold hover:bg-transparent hover:text-gray-300 ">Clouding</p>
                    </li>
                    <li className="hover:text-white border-b-2 border-b-transparent hover:border-b-gray-400"><a href="https://">Features</a></li>
                    <li className="hover:text-white border-b-2 border-b-transparent hover:border-b-gray-400"><a href="https://">Team</a></li>
                    <li className="hover:text-white border-b-2 border-b-transparent hover:border-b-gray-400"><a href="https://">About</a></li>
                    <li className="hover:text-white border-b-2 border-b-transparent hover:border-b-gray-400"><a href="htpps://">Contact</a></li>
                </ul>
            </nav>
            <img className="cursor-pointer md:hidden" src={hamburger} alt="" />
            <img className="hidden" src={closeIcon} alt="" />
        </header>
    )
}