const Contact = () => {
  return (
    <div className="light" id="contact">
      <div className="container">
        <p className="text-hero fade" >Let'<span className="text-shino">s</span> Connect</p>
        <div>
          <p style={{textAlign: "center"}}>Want to work together? Please reach out! I am currently looking for new work opportunities. I will get back to you as soon as possible.</p>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "20px", gap: "10px"}}>
            {/* <p>phone: <span style={{fontWeight: "500"}}>+1 (208) 921-5524</span></p> */}
            <div className="row" style={{width: "250px"}}>
              <p style={{marginRight: "10px"}}>phone:</p>
              <p style={{fontWeight: "500"}}>+1 (208) 921-5524</p>
            </div>
            <div className="row" style={{width: "250px"}}>
              <p style={{marginRight: "10px"}}>email:</p>
              <a href={`mailto:amayajlucas@gmail.com`}>
                <p style={{fontWeight: "500"}}>amayajlucas@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact