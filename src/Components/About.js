import React from  "react";
import photo from "../images/photo.png"

const About =() => {
   return (

    <div className="about">
        <h1 >About</h1>
         <img src={photo} alt="photo" height="200" width="200" className="rounded-circle"  />
         <p>I'm Karthik, a curious self-learner and motivated software engineer. My passion lies in working with startups and organizations that provide opportunities for continuous learning and growth. With proficiency in Data Structures and Algorithms (DSA) and problem-solving, I'm also skilled in frontend and full-stack web development. My hands-on experience includes JavaScript, Python, Java programming, MS Excel, Anaconda, and Google Cloud.

             I bring not just technical skills, but also digital marketing expertise, effective communication, and negotiation skills. I've completed virtual internships with LetGrowMore and The Sparks Foundation, where I've gained practical experience alongside my personal portfolio projects.

              With a graduation in Computer Science Engineering (CSE) from VJIT Hyderabad, a Diploma in Computer Science from Mahaveer Institute of Technology, and a strong foundation in the field, I'm eager to contribute to innovative projects and collaborate with dynamic teams.



</p>
    </div>
   )

}

export default About