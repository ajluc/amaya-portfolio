const ProjectCard = ({project, setOpen, detailsOpen}) => {
  return (
    <div className="project" key={project.name} style={{display: 'flex', flexDirection: 'row'}} onClick={()=>{
      setOpen(project)
      detailsOpen()}}>
      {project.title}
      <img src={project.image} className="thumbnail" style= {{objectPosition: '50% 50%', alignSelf: 'flex-end', marginBottom: '.5vw'}}/>
    </div>
  )
}

export default ProjectCard