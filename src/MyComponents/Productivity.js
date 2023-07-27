import productImg from "../images/illustration-stay-productive.png";
import arrowIcn from "../images/icon-arrow.svg";

export default function Productivity() {
    return (
        <section>
            <div className="container w-screen flex flex-col space-x-12 space-y-12 items-center mx-auto justify-between md:flex-row p-6">
                <img className="w-1/2" src={productImg} alt="" />
                <div className="text-white flex flex-col space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold">Stay productive, wherever you are</h2>
                    <p className="text-gray-300"> Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                    <p className="text-gray-300">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required</p>
                    <a className="flex flex-row items-center space-x-2 border-b w-fit border-transparent hover:border-gray-400" href="https://">
                        <span>See how Fylo works</span>
                        <span>
                            <img src={arrowIcn} alt="" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}