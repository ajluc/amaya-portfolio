import bioPic from "../images/Amaya-Lucas.png"

const About = () => {
  return (
    <div className="light" id="about">
      <div className="container">
        <p className="text-hero fade">a<span className="text-shino">b</span>out</p>
        <div className="row reverse">
          <div style={{maxWidth: '500px', marginRight: '40px'}}>
            <p>As a full-stack engineer with a background in architecture, math, and physics, I bring a unique and valuable skill set to the table. My understanding of complex systems and my ability to think critically and creatively make me well-suited to tackle the challenges of modern software development.</p>
            <br/>
            <p>My background in architecture has given me an eye for design and a strong foundation in problem-solving, both of which help me to build and maintain web applications. My math and physics training have honed my analytical skills and my ability to understand and manipulate complex data, making me a valuable asset when it comes to developing algorithms and data-driven solutions.</p>
            <br/>
            <p>In my role as a full-stack engineer, I will have the opportunity to work on a wide range of projects, from front-end user interfaces to back-end servers and databases. I will be responsible for designing, building, and maintaining scalable and robust systems, collaborating with cross-functional teams to ensure that all solutions meet the needs of my users.</p>
            <br/>
            <p>With my unique blend of skills and experience, I have the potential to make a significant impact in the field of software development. I have no doubt that I will thrive and make a valuable contribution to any team.</p>
          </div>
          <div>
            <img src={bioPic} className="bio-pic"/>
            <div style={{width: '200px', margin: '40px'}}>
              <p className="text-header-dark">Languages</p>
                <p className="text-body">Javascript, HTML, CSS, Python</p>
            </div>
            <div style={{width: '200px', margin: '40px'}}>
              <p className="text-header-dark">Frameworks</p>
                <p className="text-body">React.js, Node.js, Express, Flask, Vue.js</p>
            </div>
            <div style={{width: '200px', margin: '40px'}}>
              <p className="text-header-dark">Databases</p>
                <p className="text-body">SQL, PostgreSQL, SQLAlchemy, MongoDB</p>
            </div>
            <div style={{width: '200px', margin: '40px'}}>
              <p className="text-header-dark">Methods and Tools</p>
                <p className="text-body">Mobile-First, Responsive Design, Wireframing, Entity Relationship Diagramming, Component Hierarchy Diagramming</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About