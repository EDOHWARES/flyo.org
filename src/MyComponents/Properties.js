export default function Property(props) {
    return (
        <div className="flex mx-auto flex-col items-center justify-center space-y-6 text-white w-[20rem]">
            <img className="mx-auto" src={props.img} alt="" />
            <h2 className="font-bold text-2xl text-center">{props.h}</h2>
            <p className="text-center text-gray-300">{props.p}</p>
        </div>
    )
}