import { useState } from "react"

import snake from "../images/thumbnails/snake.png"
import portfolio from "../images/thumbnails/portfolio.png"
import ProjectCard from "./ProjectCard"

const personalProjectList = [
  {
    name: 'portfolio',
    title: <p className="text-hero link"  style={{textAlign: 'right'}}><span className="text-shino">p</span>o<span className="text-shino">r</span>tfolio</p>,
    description:
      "This project recreates the classic web game called Snake using Vanilla Javascript. It uses JS classes and inheritance.",
    skills: ['Javascript', 'React.js', 'CSS3', 'HTML5', 'Styled Components'],
    url: "",
    github: "https://github.com/ajluc/_s_n_a_k_e_",
    image: portfolio
  }
]

const GAProjectList = [
  {
    name: 'snake',
    title: <p className="text-hero link"  style={{textAlign: 'right'}}><span className="text-shino">s</span>na<span className="text-shino">k</span>e</p>,
    description:
      "This project recreates the classic web game called Snake using Vanilla Javascript. It uses JS classes and inheritance.",
    skills: ['Javascript', 'React.js', 'CSS3', 'HTML5', 'Styled Components'],
    url: "https://_s_n_a_k_e_.surge.sh/",
    github: "https://github.com/ajluc/_s_n_a_k_e_",
    image: snake
  },
  {
    name: 'facadebook',
    title: <p className="text-hero link"  style={{textAlign: 'right'}}>facade<span className="text-shino">b</span>oo<span className="text-shino">k</span></p>,
    description:
      "An anonymous, open source architecture blog where contributors can give their unfiltered opinions of the built environment. Facadebook is an interactive social platform to open the dialogue to all fans (and haters) of architecture.",
    skills: ['Javascript', 'React.js', 'CSS3', 'HTML5', 'Styled Components'],
    url: "https://facadebook.herokuapp.com/",
    github: "https://github.com/ajluc/facadebook"
  },
  {
    name: 'potlucky',
    title: <p className="text-hero link"  style={{textAlign: 'right'}}><span className="text-shino">p</span>otluc<span className="text-shino">k</span>y</p>,
    description:
      "A platform for event planning and coordination. Guests can RSVP, indicate what they are bringing, and leave comments.",
    skills: ['Javascript', 'React.js', 'CSS3', 'HTML5', 'Styled Components'],
    url: "https://feelingpotlucky.herokuapp.com/",
    github: "https://github.com/ralicynf/potlucky-front-end"

  },
  {
    name: 'intdev',
    title: <p className="text-hero link"  style={{textAlign: 'right'}}>intdev</p>,
    description:
      "Take your education into your own hands. IntDev is a platform for academic institutions that allows students to keep track of their transcripts, join classes, and even update their own grades.",
    skills: ['Javascript', 'React.js', 'CSS3', 'HTML5', 'Styled Components'],
    url: "https://intdev.herokuapp.com/",
    github: "https://github.com/OliviaSchwartz/Transcript-Hackathon-Front"

  },
]

const detailsOpen = () => {
  let element = document.getElementById('project-details')
  if (element.classList.contains('closed')) { element.classList.remove('closed')}
  element.classList.add('open')
}

const detailsClose = () => {
  let element = document.getElementById('project-details')
  element.classList.remove('open')
  element.classList.add('closed')
}


const Projects = () => {
  const [open, setOpen] = useState(null)
  
  return (
    <div className="dark" id="projects">
      <div className="light fold-out" id="project-details">
        <div className="container">
          <div style={{width: '70vw'}}>
          {open ? (
          <div>
            <a href={open.url} target="_blank" rel="noopener noreferrer">
            {open.title}
            </a>
            
            <div 
            style={{maxWidth: '200px', marginRight: '40px'}}>
            <p className="text-header-dark">Technology Used</p>
            {open.skills?.map((skill) => (
              <p className="text-body" key={skill}>{skill}</p>
            ))}
          </div>

            <p className="text-body">{open.description}</p>
          </div>
          ) : <></>}
          </div>
          <p onClick={() => detailsClose()}>x</p>
        </div>
      </div>
      <div className="container">
        <p className="text-hero fade"><span className="text-shino">pr</span>oject<span className="text-shino">s</span></p>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',  marginTop: '50px'}}>
          <div 
            style={{maxWidth: '300px', marginRight: '40px'}}>
            <p className="text-header-light">General Assembly</p>
            <p className="text-body">Twelve-week intensive in Full-Stack Web Development. </p>
            <p className="text-body">9/2022 - 12/2022</p>
          </div>

          <div className="project-container">
            {GAProjectList.map((project) => (
              <ProjectCard project={project} setOpen={setOpen} detailsOpen={detailsOpen}/>
            ))}
          </div>
        </div>



        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',  marginTop: '70px'
}}>
          <div 
            style={{maxWidth: '300px', marginRight: '40px'}}>
            <p className="text-header-light">Personal Projects</p>
            <p className="text-body">Post-graduation and self-directed. More coming soon</p>
            <p className="text-body">12/2022 - present</p>
          </div>
          <div className="project-container">
            {personalProjectList.map((project) => (
              <ProjectCard project={project} setOpen={setOpen} detailsOpen={detailsOpen}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects