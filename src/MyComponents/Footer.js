import logo from "../images/logo.svg";
import locationIcn from "../images/icon-location.svg";
import callIcn from "../images/icon-phone.svg";
import mailIcon from "../images/icon-email.svg";


export default function Footer() {
    return (
        <footer className="bg-darkBlue3F z-40">
            <div className="flex flex-col space-y-8 mx-auto z-10000 items-start justify-between flex-wrap md:flex-row p-10 text-gray-400">

            <ul className="flex flex-col space-y-8 justify-between">

                <li>
                    <a href="https://">
                        <img className="w-[7rem] md:w-[10rem]" src={logo} alt="" />
                    </a>
                </li>

                <li className="flex flex-row space-x-4 md:w-[25rem]">
                    <img className="self-start" src={locationIcn} alt="" />
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum quam corporis exercitationem error. Tempora culpa quidem quisquam, 
                    </span>
                </li>

                </ul>

                <ul className="flex flex-col space-y-4">
                <li className="">
                    <a className="flex space-x-4" href="https://">
                        <img src={callIcn} alt="" />
                        <span>+1-543-123-4567</span>
                    </a>
                </li>
                <li>
                <a className="flex space-x-4" href="https://">
                        <img src={mailIcon} alt="" />
                        <span>example@flyo.com</span>
                    </a>
                </li>
                </ul>

                <ul className="flex items-center justify-start w-[16rem] flex-wrap space-y-4">
                <li className="w-[8rem]">
                    <a href="https://">
                        About us
                    </a>
                </li>
                <li className="w-[8rem]">
                    <a href="https://">
                        Jobs
                    </a> 
                </li>
                <li className="w-[8rem]">
                    <a href="https://">
                        Press
                    </a>
                </li>
                <li className="w-[8rem]">
                    <a href="https://">
                        Blog
                    </a>
                </li>
                <li className="w-[8rem]">
                    <a href="https://">
                        Contact us
                    </a>
                </li>
                <li className="w-[8rem]">
                    <a href="https://">
                        Terms
                    </a>
                </li>
                <li className="w-[8rem]">
                    <a href="https://">
                        Privacy
                    </a>
                </li>

                </ul>

            </div>
        </footer>
    )
}