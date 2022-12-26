const Header = () => {
  return (
    <div className="nav">
      <div className="nav-item">
        <a href="#home" className="nav-item-link">Home</a>
      </div>
      <div className="nav-item">
        <a href="#about" className="nav-item-link">About</a>
      </div>

      <div className="nav-item">
        <a href="#projects" className="nav-item-link">Projects</a>
      </div>
      <div className="nav-item">
        <a href="#contact" className="nav-item-link">Contact</a>
      </div>
      <div className="nav-item" style={{marginTop: '40px'}}>
        <a href="#resume" className="nav-item-link">+Resume</a>
      </div>
      <div className="nav-item">
        <a href="#architecture" className="nav-item-link">+Architecture</a>
      </div>
    </div>
  )
}

export default Header