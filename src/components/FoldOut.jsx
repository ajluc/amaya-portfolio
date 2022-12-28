import Images from "./ImageSlides"

const FoldOut = ({open, detailsClose}) => {
  return (
    <div className="light fold-out" id="project-details">
        <div className="container">
          {open ? (
          <div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <a href={open.url} target="_blank" rel="noopener noreferrer">
              {open.title}
              </a>
              <p className="link" style={{fontSize: '25px', transform: 'none'}} onClick={() => detailsClose()}>x</p>
            </div>
            <Images images={open.images}/>
            <div 
            style={{display: 'flex', flexDirection: 'row', justifyContent: "center"}}>
              <div style={{width: '200px', marginRight: '40px'}}>
                <div>
                  <p className="text-header-dark">Technology Used</p>
                  {open.skills?.map((skill) => (
                    <p className="text-body" key={skill}>{skill}</p>
                  ))}
                </div>
                <div>
                <a href={open.github} target="_blank">github</a>
                <a href={open.url} target="_blank">launch app</a>
                </div>
              </div>
              <div style={{width: '500px'}}>
                <p className="text-header-dark">Description</p>
                <p className="text-body">{open.description}</p>
              </div>
            </div>
          </div>
          ) : <></>}
        </div>
      </div>
  )
}

export default FoldOut