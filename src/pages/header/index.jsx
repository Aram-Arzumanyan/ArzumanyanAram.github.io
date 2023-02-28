import { NavLink } from "react-router-dom";
import "./style.scss";

function Header() {
  return (
    <header>
      <div className="navigation G-container">
        <div className="bgimg">
          <div className="max_content">
            <div className="block_1">
              <div className="logo"></div>
              <div>
                <h1>Sipmple House</h1>
                <h3>new restaurant template</h3>
              </div>
            </div>
            <div className="block_2">
              <div className="text_content">
                <h3><NavLink className='link' to='/'>Home</NavLink> </h3>
                <h3><NavLink className='link' to = 'about'>Abouth</NavLink> </h3>
                <h3> <NavLink className='link' to = 'contact'>Contact</NavLink></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
