import React from  "react";
import Navbar from "./Components/NavBar";
import "./style.css";
import About from "./Components/About";
import Section from "./Components/Section";

let sectionData = [
    {
        title: "Qualifications",
        des : "My academic journey and qualifications are the foundation of my knowledge and expertise. I graduated from VJIT Hyderabad with a Bachelor's degree in Computer Science Engineering (CSE), where I developed a robust theoretical grounding in computer science and programming. My pursuit of excellence led me to achieve a Diploma in Computer Science from Mahaveer Institute of Technology, further refining my technical prowess. My academic foundation began with the completion of my Secondary School Certificate (SSC) at NBHS.",
    },
    {
        title: "Skills",
        des : "My skill set encompasses a broad spectrum of expertise across various facets of the tech landscape. I am adept in crafting optimized algorithms and solutions for intricate problems, thanks to my solid grounding in Data Structures and Algorithms. With a knack for both Frontend and Full-Stack Web Development, I am capable of conceiving user-friendly and responsive web applications from the ground up. My programming proficiency spans across JavaScript, Python, and Java, allowing me to engineer robust and efficient applications. I am well-versed in utilizing tools such as MS Excel, Anaconda, and Google Cloud to leverage data effectively. My grasp of Digital Marketing strategies has equipped me to contribute effectively to online campaigns. Furthermore, my aptitude for Effective Communication and Negotiation empowers me to convey intricate technical concepts adeptly and participate actively in productive negotiations",
    },
   {
        title: "Experience",
        des : "I bring not just technical skills, but also digital marketing expertise, effective communication, and negotiation skills. I've completed virtual internships with LetGrowMore and The Sparks Foundation, where I've gained practical experience alongside my personal portfolio projects.My prowess extends beyond technical prowess, having enriched my skill set through immersive virtual internships. At LetGrowMore, I successfully completed a virtual internship, offering hands-on experience in the application of technical skills to real-world projects. Collaborating with a diverse team of professionals in this environment was immensely enriching. My engagement with The Sparks Foundation during a virtual internship exposed me to data-driven decision-making and practical algorithm implementation, bolstering my practical knowledge.",
    },
    {
        title: "Projects",
        des : "My journey in technology and digital innovation is punctuated with a range of personal portfolio projects that illustrate my skills in action. Crafting a responsive e-commerce website from the ground up using contemporary frontend frameworks stands as a testament to my expertise. I have also created a dynamic data visualization dashboard using Python and Google Cloud services, enabling data-driven decision-making for businesses. A particularly rewarding endeavor was designing and executing a digital marketing campaign for a small business, culminating in a noticeable uptick in online visibility and customer engagement.I bring not just technical skills, but also digital marketing expertise, effective communication, and negotiation skills. I've completed virtual internships with LetGrowMore and The Sparks Foundation, where I've gained practical experience alongside my personal portfolio projects.",
    },
  
    {
        title: "Contact",
        des:"I invite you to connect with me for discussions, opportunities, and collaborations. Feel free to reach out via email at karthiksunkari820@gmail.com or by phone at +91 6302363841.",
    }
]

const App = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        {
            sectionData.map((value,index) => (
                <Section 
                  
                    title = {value.title}
                    des = {value.des}
                />
            ))
            }
    </div>
  )

}

export default App;