const Home = () => {
  return (
    <div className="dark" id="home">
      <div className="container" style={{  height: '65vh'}}>
        <p className="text-hero fade">amaya luca<span className="text-shino">s</span></p>
        <div>
          <p className="text-hero fade" style={{textAlign: 'right'}}>de<span className="text-shino">s</span>igne<span className="text-shino">r</span> &</p>
        <div className="row">
          <div style={
            {margin: '20px 40px 0px 0px'}
          }>
          <p style={{maxWidth: '500px'}}>Hey there, I am a software developer interested in the relationship technology has with the design fields, as well as social causes. I am excited about learning more and applying new skills to my work.</p>
          </div>
          <p className="text-hero fade">code<span className="text-shino">r</span></p>
        </div>
        </div>
      </div>
      </div>
  )
}

export default Home