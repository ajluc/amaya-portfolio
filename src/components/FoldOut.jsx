import gitHubIcon from "../images/socials/github.svg";

const FoldOut = ({project}) => {
  return (
    <div className="dark fold-down closed" id="project-details">
      <div className="row" style={{justifyContent: "center", marginBottom: "40px", alignItems: "flex-start", gap: "20px"}}>
        <div style={{maxWidth: '500px'}}>
          <p className="text-header-light">Description</p>
          <p className="text-body">{project.description}</p>
          <div style={{marginTop: "10px", display: "flex", flexDirection: "row", gap: "10px"}}>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="launch">LAUNCH</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
            </a>
          </div>
        </div>
        <div style={{width: '12vw'}}>
          <div>
            <p className="text-header-light">Technology</p>
            <p className="text-body">{project.skills}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoldOut