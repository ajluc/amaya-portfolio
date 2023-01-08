
const ProjectCard = ({project}) => {
  return (
    <div className="project" key={project.name} style={{display: 'flex', flexDirection: 'row', width: "100%", justifyContent: "space-between"}}>
      {project.title}
      <img src={project.thumbnail} className="thumbnail" style= {{objectPosition: '50% 50%', alignSelf: 'flex-end', marginBottom: '.5vw', marginLeft: "20px"}}/>
    </div>
  )
}

export default ProjectCard