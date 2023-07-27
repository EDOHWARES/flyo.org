import profile1 from "../images/profile-1.jpg";
import profile2 from "../images/profile-2.jpg";
import profile3 from "../images/profile-3.jpg";
import bgQuote from "../images/bg-quotes.png";


function CardsSingly(props) {
  return (
    <div className="flex flex-col space-y-4 text-gray-300 w-[100%] md:w-[24rem] bg-darkBlue4T p-6 mx-auto m-0">
      <p>{props.testimony}</p>
      <div className="flex space-x-3">
        <img className="w-[2.5rem] h-[2.5rem] rounded-full" src={props.img} alt="" />
        <ul>
            <li className="text-white font-bold">{props.name}</li>
            <li className="text-[.7rem] text-gray-400">{props.identity}</li>
        </ul>
      </div>
    </div>
  )
}

const Cards = () => {
  return (
    <section className="px-6 py-20">
        <div className="relative z-1000 flex flex-col justify-between flex-wrap mx-auto items-center space-x-6 space-y-6 md:space-y-0 md:flex-row">
            <img className="absolute top-[-1.5rem] z-99 left-0" src={bgQuote} alt="" />
            <CardsSingly 
                testimony="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                img={profile1}
                name="Satish Patel"
                identity="Founder & CEO Huddle"
            />
            <CardsSingly 
                testimony="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                img={profile2}
                name="Bruce McKenzle"
                identity="Founder & CEO Huddle"
            />
            <CardsSingly 
                testimony="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                img={profile3}
                name="Iva Boyd"
                identity="Founder & CEO Huddle"
            />
        </div>
    </section>
  )
}

export default Cards
