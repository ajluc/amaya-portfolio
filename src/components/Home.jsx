const Home = () => {
  return (
    <div className="dark" id="home">
      <div className="container" style={{height: '80vh'}}>
        <div>
        <p className="text-hero fade">amaya luca<span className="text-shino">s</span></p>
        <div 
            style={{width: '225px', marginRight: '40px'}}>
            <p className="text-header-light"> </p>
            <p className="text-body">I am an architect-turned-software engineer in NYC. I love clean, user-driven design and efficient code.</p>
          </div>
          </div>
        <div style={{width: '100%', marginTop: '10vh'}}>
          <p className="text-hero fade" style={{textAlign: 'right'}}>de<span className="text-shino">s</span>igne<span className="text-shino">r</span> &</p>
        <div className="row reverse">
          {/* <div style={
            {margin: '20px 40px 0px 0px'}
          }> */}
          {/* <p style={{maxWidth: '500px'}}>Hey there, I am a full-stack software developer with a background in architecture. </p> */}
          <div 
            style={{width: '275px', marginRight: '40px'}}>
            {/* <p className="text-header-light">Full-Stack Developer</p>
            <p className="text-body">I am an architect-turned-software engineer in NYC. I love clean, user-driven design and efficient code.</p> */}
          </div>
          <p className="text-hero fade" style={{textAlign: 'right'}}>code<span className="text-shino">r</span></p>
        </div>
        </div>
      </div>
      </div>
  )
}

export default Home