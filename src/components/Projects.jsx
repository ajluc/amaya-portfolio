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
      "You are here! The project is my personal portfolio, and is currently under construction. A simple React App deployed on Heroku with a custom domain name.",
    skills: 'Javascript, React.js, CSS, Styled Components',
    url: "http://www.amaya.works",
    github: "https://github.com/ajluc/amaya-portfolio",
    thumbnail: portfolio,
    images: []
  }
]

const GAProjectList = [
  {
    name: 'snake',
    title: <p className="text-hero link"><span className="text-shino">s</span>na<span className="text-shino">k</span>e</p>,
    description:
      "This project recreates the classic web game called Snake using Vanilla Javascript. It uses JS classes and inheritance for gameplay functionality. Completed in two days, shortly after first learning Javascript. Here, my biggest challenge was learning to incorporate motion over time, rather than solely through user interaction. Includes dark mode, speed options, and current/high score tracking.",
    skills: 'Javascript, React.js, CSS3, HTML5',
    url: "https://_s_n_a_k_e_.surge.sh/",
    github: "https://github.com/ajluc/_s_n_a_k_e_",
    thumbnail: snake,
    images: [snake]
  },
  {
    name: 'facadebook',
    title: <p className="text-hero link">facade<span className="text-shino">b</span>oo<span className="text-shino">k</span></p>,
    description:
      "An anonymous, open source architecture blog where contributors can give their unfiltered opinions of the built environment. Facadebook is an interactive social platform to open the dialogue to all fans (and haters) of architecture.",
    skills: 'Javascript, MongoDB, Express, React.js, Node.js, CSS3, HTML5',
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


const Projects = () => {
  const handleClick = (e) => {
    e.currentTarget.children[1].classList.toggle('open')
    e.currentTarget.children[1].classList.toggle('closed')
  }

  return (
    <div className="dark" id="projects">
      <div className="container">
        <p className="text-hero fade"><span className="text-shino">pr</span>oject<span className="text-shino">s</span></p>
        <div className="row" style={{justifyContent: 'space-between',  marginTop: '50px'}}>
          <div 
            style={{width: '200px', marginRight: '40px'}}>
            <p className="text-header-light">General Assembly</p>
            <p className="text-body">Twelve-week intensive in Full-Stack Web Development. </p>
            <p className="text-body">9/2022 - 12/2022</p>
          </div>
          <div>
            {GAProjectList.map((project) => (
              <div className="project-container" onClick={handleClick}>
                <ProjectCard project={project}/>
                <FoldOut project={project}/>
              </div>
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
          <div>
            {personalProjectList.map((project) => (
              <div className="project-container" onClick={handleClick}>
                <ProjectCard project={project}/>
                <FoldOut project={project}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects