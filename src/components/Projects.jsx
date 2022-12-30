import { useState } from "react"
import ProjectCard from "./ProjectCard"
import FoldOut from "./FoldOut"

import snake from "../images/thumbnails/snake.png"
import portfolio from "../images/thumbnails/portfolio.png"
import facadebook from "../images/thumbnails/facadebook.png"
import potlucky from "../images/thumbnails/potlucky.png"
import intdev from "../images/thumbnails/intdev.png"

const personalProjectList = [
  {
    name: 'portfolio',
    title: <p className="text-hero link"><span className="text-shino">p</span>o<span className="text-shino">r</span>tfolio</p>,
    description:
      "This project recreates the classic web game called Snake using Vanilla Javascript. It uses JS classes and inheritance.",
    skills: ['Javascript', 'React.js', 'CSS3', 'HTML5', 'Styled Components'],
    url: "",
    github: "https://github.com/ajluc/_s_n_a_k_e_",
    thumbnail: portfolio,
    images: [portfolio, portfolio, potlucky]
  }
]

const GAProjectList = [
  {
    name: 'snake',
    title: <p className="text-hero link"><span className="text-shino">s</span>na<span className="text-shino">k</span>e</p>,
    description:
      "This project recreates the classic web game called Snake using Vanilla Javascript. It uses JS classes and inheritance.",
    skills: ['Javascript', 'React.js', 'CSS3', 'HTML5', 'Styled Components'],
    url: "https://_s_n_a_k_e_.surge.sh/",
    github: "https://github.com/ajluc/_s_n_a_k_e_",
    thumbnail: snake,
    images: [snake, snake, facadebook]
  },
  {
    name: 'facadebook',
    title: <p className="text-hero link">facade<span className="text-shino">b</span>oo<span className="text-shino">k</span></p>,
    description:
      "An anonymous, open source architecture blog where contributors can give their unfiltered opinions of the built environment. Facadebook is an interactive social platform to open the dialogue to all fans (and haters) of architecture.",
    skills: ['Javascript', 'React.js', 'CSS3', 'HTML5', 'Styled Components'],
    url: "https://facadebook.herokuapp.com/",
    github: "https://github.com/ajluc/facadebook",
    thumbnail: facadebook
  },
  // {
  //   name: 'potlucky',
  //   title: <p className="text-hero link"><span className="text-shino">p</span>otluc<span className="text-shino">k</span>y</p>,
  //   description:
  //     "A platform for event planning and coordination. Guests can RSVP, indicate what they are bringing, and leave comments.",
  //   skills: ['Javascript', 'React.js', 'CSS3', 'HTML5', 'Styled Components'],
  //   url: "https://feelingpotlucky.herokuapp.com/",
  //   github: "https://github.com/ralicynf/potlucky-front-end",
  //   thumbnail: potlucky

  // },
  // {
  //   name: 'intdev',
  //   title: <p className="text-hero link">intdev</p>,
  //   description:
  //     "Take your education into your own hands. IntDev is a platform for academic institutions that allows students to keep track of their transcripts, join classes, and even update their own grades.",
  //   skills: ['Javascript', 'React.js', 'CSS3', 'HTML5', 'Styled Components'],
  //   url: "https://intdev.herokuapp.com/",
  //   github: "https://github.com/OliviaSchwartz/Transcript-Hackathon-Front",
  //   thumbnail: intdev

  // },
]

const detailsOpen = () => {
  let element = document.getElementById('project-details')
  if (element.classList.contains('closed')) { element.classList.remove('closed')}
  element.classList.add('open')
  document.body.style.overflow = 'hidden'
}

const detailsClose = () => {
  let element = document.getElementById('project-details')
  element.classList.remove('open')
  element.classList.add('closed')
  document.body.style.overflow = 'auto'
}


const Projects = () => {
  const [open, setOpen] = useState(null)
  
  return (
    <div className="dark" id="projects">
      <FoldOut open={open} detailsClose={detailsClose}/>
      <div className="container">
        <p className="text-hero fade"><span className="text-shino">pr</span>oject<span className="text-shino">s</span></p>
        <div className="row" style={{justifyContent: 'space-between',  marginTop: '50px'}}>
          <div 
            style={{width: '200px', marginRight: '40px'}}>
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
        <div className="row" style={{justifyContent: 'space-between',  marginTop: '50px'}}>
          <div 
            style={{width: '200px', marginRight: '40px'}}>
            <p className="text-header-light">Personal Projects</p>
            <p className="text-body">Post-graduation and self-directed. More coming soon.</p>
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