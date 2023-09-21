import bioPic from "../images/Amaya-Lucas.png"
import FadeInSection from "./FadeIn"

const About = () => {
  return (
    <div className="light" id="about">
      <FadeInSection>
      <div className="container">
        <p className="text-hero fade">a<span className="text-shino">b</span>out</p>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <img src={bioPic} className="bio-pic" style={{marginBottom: "40px"}}/>
            <div className="skills">
              <div>
                <p className="text-header-dark">Languages</p>
                  <p className="text-body" style={{marginBottom: "10px"}}>Javascript, HTML, CSS, Python</p>
              </div>
              <div>
                <p className="text-header-dark">Frameworks</p>
                  <p className="text-body" style={{marginBottom: "10px"}}>React.js, Node.js, Express, Flask, Vue.js</p>
              </div>
              <div>
                <p className="text-header-dark">Databases</p>
                  <p className="text-body" style={{marginBottom: "10px"}}>SQL, PostgreSQL, SQLAlchemy, MongoDB</p>
              </div>
              <div>
                <p className="text-header-dark">Methods and Tools</p>
                  <p className="text-body" style={{marginBottom: "10px"}}>Mobile-First, Responsive Design, Wireframing, ERD, CHD</p>
              </div>
            </div>
            <p>Hey there! I am an upcoming web developer with a passion for learning and a natural curiosity. I am a creative problem solver as well as an analytical thinker.</p>
            <br/>
            <p>My past experience has made me an adaptable programmer: I have a strong technical background with an undergraduate degree in mathematics and physics that gives me confidence in my ability to break down and solve tough challenges; meanwhile, project management during my years in architecture taught me how to balance big picture goals while still meeting challenging deadlines. </p>
            <br/>
            <p>I am perpetually learning and leveling up, one day at a time. If you're interested in getting to know me, please <a href="#contact" style={{fontWeight: "500"}}>reach out!</a>
</p>
          </div>
        </div>
        </FadeInSection>
      </div>
  )
}

export default About