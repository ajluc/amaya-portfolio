import { useState } from "react"

import snake from "../images/thumbnails/snake.png"
import portfolio from "../images/thumbnails/portfolio.png"

const personalProjectList = [
  {
    title: <p className="text-hero link"  style={{textAlign: 'right'}}><span className="text-shino">p</span>o<span className="text-shino">r</span>tfolio</p>,
    description:
      "This project recreates the classic web game called Snake using Vanilla Javascript. It uses JS classes and inheritance.",
    url: "https://_s_n_a_k_e_.surge.sh/",
    github: "https://github.com/ajluc/_s_n_a_k_e_",
    image: portfolio
  }
]

const GAProjectList = [
  {
    title: <p className="text-hero link"  style={{textAlign: 'right'}}><span className="text-shino">s</span>na<span className="text-shino">k</span>e</p>,
    description:
      "This project recreates the classic web game called Snake using Vanilla Javascript. It uses JS classes and inheritance.",
    url: "https://_s_n_a_k_e_.surge.sh/",
    github: "https://github.com/ajluc/_s_n_a_k_e_",
    image: snake
  },
  {
    title: <p className="text-hero link"  style={{textAlign: 'right'}}>facade<span className="text-shino">b</span>oo<span className="text-shino">k</span></p>,
    description:
      "An anonymous, open source architecture blog where contributors can give their unfiltered opinions of the built environment. Facadebook is an interactive social platform to open the dialogue to all fans (and haters) of architecture.",
    url: "https://facadebook.herokuapp.com/",
    github: "https://github.com/ajluc/facadebook"
  },
  {
    title: <p className="text-hero link"  style={{textAlign: 'right'}}><span className="text-shino">p</span>otluc<span className="text-shino">k</span>y</p>,
    description:
      "A platform for event planning and coordination. Guests can RSVP, indicate what they are bringing, and leave comments.",
    url: "https://feelingpotlucky.herokuapp.com/",
    github: "https://github.com/ralicynf/potlucky-front-end"

  },
  {
    title: <p className="text-hero link"  style={{textAlign: 'right'}}>intdev</p>,
    description:
      "Take your education into your own hands. IntDev is a platform for academic institutions that allows students to keep track of their transcripts, join classes, and even update their own grades.",
    url: "https://intdev.herokuapp.com/",
    github: "https://github.com/OliviaSchwartz/Transcript-Hackathon-Front"

  },
]

const Projects = () => {
  const [open, setOpen] = useState(null)
  
  return (
    <div className="dark" id="projects">
      <div className="light project-details collapse">
        <p>current item</p>
      </div>
      <div className="container">
        <p className="text-hero fade"><span className="text-shino">pr</span>oject<span className="text-shino">s</span></p>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',  marginTop: '50px'
}}>
          <div 
            style={{maxWidth: '300px', marginRight: '40px'}}>
          <p className="text-header">General Assembly</p>
            <p style={{borderTop: '1px solid white', padding: '5px 0px'}}>Twelve-week intensive in Full-Stack Web Development. </p>
            <p style={{padding: '2px 0px'}}>9/2022 - 12/2022</p>
          </div>
          <div className="project-container">
            {GAProjectList.map((project) => (
            <div className="project" key={project.title} style={{display: 'flex', flexDirection: 'row'}}>
              {project.title}
              <img src={project.image} className="thumbnail" style={{  objectPosition: '50% 50%', alignSelf: 'flex-end', marginBottom: '.5vw'
}}/>
            </div>
            ))}
          </div>
        </div>



        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',  marginTop: '70px'
}}>
          <div 
            style={{maxWidth: '300px', marginRight: '40px'}}>
          <p className="text-header">Personal Projects</p>
            <p style={{borderTop: '1px solid white', padding: '5px 0px'}}>Post-graduation and self-directed. More coming soon</p>
            <p style={{padding: '2px 0px'}}>12/2022 - present</p>
          </div>
          <div className="project-container">
            {personalProjectList.map((project) => (
            <div className="project" key={project.title} style={{display: 'flex', flexDirection: 'row'}}>
              {project.title}
              <img src={project.image} className="thumbnail" style={{  objectPosition: '50% 50%', alignSelf: 'flex-end', marginBottom: '.5vw'
}}/>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects