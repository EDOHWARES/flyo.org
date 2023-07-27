export default function Form() {
    return (
        <form id="fromEl" className="flex flex-col space-y-4 text-center text-white w-[100%] md:w-[50rem] mx-auto bg-darkBlue1E p-6 z-9999 z-50" action="">
            <h1 className="font-bold text-3xl">Get early access</h1>
            <p className="text-gray-300 ">
                It only takes am minute to sign up our free starter tier is extremely generous. If you have any 
                questions, our support team would be happy to help you.
            </p>
            <div className="flex flex-col items-center space-y-4 md:space-y-0 self-center space-x-8 md:flex-row">
                <div className="w-[100%] md:w-[60%]">
                     <input className="w-[100%] h-[2.5rem] text-gray-900 px-6  rounded-full" type="text" placeholder="example@gmail.com" />
                </div>
                <div className="w-[100%] md:w-[40%]">
                    <input className="bg-blueGrad text-white px-6 h-[2.5rem] rounded-full" type="button" value="Get Started For Free" />
                </div>
            </div>
        </form>
    )
}