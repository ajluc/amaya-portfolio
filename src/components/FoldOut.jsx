import gitHubIcon from "../images/socials/github.svg";

const FoldOut = ({project}) => {
  return (
    <div className="dark fold-down closed" id="project-details">
      <div className="row" style={{justifyContent: "center"}}>
        <div style={{width: '200px', marginRight: '40px'}}>
          <div>
            <p className="text-header-light">Technology Used</p>
            <p className="text-body">{project.skills}</p>
          </div>
          <div>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
            </a>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="launch">launch</a>
          </div>
        </div>
        <div style={{maxWidth: '500px'}}>
          <p className="text-header-light">Description</p>
          <p className="text-body">{project.description}</p>
        </div>
      </div>
    </div>
  )
}

export default FoldOut