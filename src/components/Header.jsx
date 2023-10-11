const Header = () => {
  const detailsClose = () => {
    let element = document.getElementById('project-details')
    if (element.classList.contains('open')) { element.classList.remove('open')}
    element.classList.add('closed')
    document.getElementById('page').style.overflow = 'auto'
  }

  return (
    <div className="nav">
      <div className="nav-item">
        <a href="#home" className="nav-item-link" onClick={detailsClose}>Home</a>
      </div>
      <div className="nav-item">
        <a href="#about" className="nav-item-link" onClick={detailsClose}>About</a>
      </div>

      <div className="nav-item">
        <a href="#projects" className="nav-item-link" onClick={detailsClose}>Projects</a>
      </div>
      <div className="nav-item">
        <a href="#contact" className="nav-item-link" onClick={detailsClose}>Contact</a>
      </div>
      {/* <div></div> there used to be 40px margin top on resume */}
      <div className="nav-item ext-nav-items">
        <a href="https://docs.google.com/document/d/19lOBGTkaKlRX_nObD-nhCIl4tEmVnHltzR3InHQjZC0/edit?usp=sharing" target='_blank' className="nav-item-link" onClick={detailsClose}>+Resume</a>
      </div>
      <div className="nav-item">
        <a href="https://drive.google.com/file/d/1VSM-L9wU4wxMWjqHFuvHO7hq2O0I3bE-/view?usp=sharing" target='_blank' className="nav-item-link" onClick={detailsClose}>+Architecture</a>
      </div>
    </div>
  )
}

export default Header