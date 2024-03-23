import logo from '../images/logo.png'

function Navbar() {
    return (
        <nav>
            <div className='nav-logo'>
                <img src={logo} alt="logo" className="nav--icon" />
                <h3 className="nav--logo_text">StaticReact</h3>
            </div>
            <h4 className="nav--title">React - Project 1 <a href="https://www.linkedin.com/in/sairaj-naik-08713723b/" className="nav-link">@sairaj_naik</a></h4>
        </nav>
    )
  }

export default Navbar;
