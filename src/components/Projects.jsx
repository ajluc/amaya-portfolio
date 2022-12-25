import snake from "../images/thumbnails/snake.png"

const projectList = [
  {
    title: "_s_n_a_k_e_",
    description:
      "This project recreates the classic web game called Snake using Vanilla Javascript. It uses JS classes and inheritance.",
    url: "https://_s_n_a_k_e_.surge.sh/",
    github: "https://github.com/ajluc/_s_n_a_k_e_",
    image: snake
  },
  {
    title: "Facadebook",
    description:
      "An anonymous, open source architecture blog where contributors can give their unfiltered opinions of the built environment. Facadebook is an interactive social platform to open the dialogue to all fans (and haters) of architecture.",
    url: "https://facadebook.herokuapp.com/",
    github: "https://github.com/ajluc/facadebook"
  },
  {
    title: "Potlucky",
    description:
      "A platform for event planning and coordination. Guests can RSVP, indicate what they are bringing, and leave comments.",
    url: "https://feelingpotlucky.herokuapp.com/",
    github: "https://github.com/ralicynf/potlucky-front-end"

  },
  {
    title: "IntDev",
    description:
      "Take your education into your own hands. IntDev is a platform for academic institutions that allows students to keep track of their transcripts, join classes, and even update their own grades.",
    url: "https://intdev.herokuapp.com/",
    github: "https://github.com/OliviaSchwartz/Transcript-Hackathon-Front"

  },
]

const Projects = () => {
  return (
    <div className="dark" id="projects">
      <div className="container">
        <p className="text-hero fade"><span className="text-shino">pr</span>oject<span className="text-shino">s</span></p>
          <p className="text-header" style={
            { maxWidth: '500px'}}>General Assembly Projects</p>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div 
            style={{maxWidth: '500px'}}>
            <p>Projects projects these are my projects intro copy to my projects. Projects projects these are my projects intro copy to my projects.Projects projects these are my projects intro copy to my projects</p>
          </div>
          <div>
            {projectList.map((project) => (
            <div key={project.title} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <p className="text-hero fade">{project.title}</p>
              <img src={project.image} className="thumbnail" style={{  objectPosition: '100% 0'
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