import Images from "./ImageSlides"
import gitHubIconDark from "../images/socials/github-dark.svg";

const FoldOut = ({open, detailsClose}) => {
  return (
    <div className="light fold-out" id="project-details">
      {open ? (
        <div className="container">
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <a href={open.url} target="_blank" rel="noopener noreferrer">
            {open.title}
            </a>
            <p className="link" style={{fontSize: '25px', transform: 'none'}} onClick={() => detailsClose()}>x</p>
          </div>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div className="slides-container">
              <Images images={open.images}/>
            </div>
            <div className="row" style={{justifyContent: "center"}}>
              <div style={{width: '200px', marginRight: '40px'}}>
                <div>
                  <p className="text-header-dark">Technology Used</p>
                  {open.skills?.map((skill) => (
                    <p className="text-body" key={skill}>{skill}</p>
                  ))}
                </div>
              </div>
              <div style={{maxWidth: '500px'}}>
                <p className="text-header-dark">Description</p>
                <p className="text-body">{open.description}</p>
                <div>
                  {/* <a href={open.github} target="_blank">github</a> */}
                  <a href={`https://github.com/${open.gitHub}`} target="_blank" rel="noopener noreferrer">
                    <img src={gitHubIconDark} alt="GitHub" className="socialIcon" />
                  </a>
                  <a href={open.url} target="_blank" rel="noopener noreferrer">launch app</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : <></>}
    </div>
  )
}

export default FoldOut