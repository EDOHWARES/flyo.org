import Header from "./MyComponents/Header.js";
import Hero from "./MyComponents/Hero.js";
import Property from "./MyComponents/Properties.js";
import Productivity from "./MyComponents/Productivity.js";
import Cards from "./MyComponents/Cards.js";
import Form from "./MyComponents/Form.js";
import Footer from "./MyComponents/Footer.js";


import img from "./images/icon-access-anywhere.svg";
import securityImg from "./images/icon-security.svg";
import collaborationImg from "./images/icon-collaboration.svg";
import anyFileImg from "./images/icon-any-file.svg";
import bgImg from "./images/bg-curvy-desktop.svg";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <section className="" style={{backgroundImage: `url(${bgImg})`}}>
      <div className="flex items-center justify-between space-y-12 flex-wrap p-10">
      <Property 
        img={img}
        h="Access your files, anywhere"
        p="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
      />
      <Property 
        img={securityImg}
        h="Security you can trust"
        p="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
      />
      <Property 
        img={collaborationImg}
        h="Access your files, anywhere"
        p="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
      />
      <Property 
        img={anyFileImg}
        h="Store any type of file"
        p="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
      />
      </div>
      <Productivity />
      <Cards />
      <section className="px-12">
         <Form />
      </section>
      </section>
      <Footer />

    </div>
  );
}

export default App;
