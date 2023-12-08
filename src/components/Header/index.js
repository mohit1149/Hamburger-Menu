// Write your code here

import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import './index.css'

const Header = () => (
  <div className="bg-container">
    <div className="header-container">
      <Link className="home-heading" to="/">
        <img
          className="header-image"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="common-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="heading-icon" />.
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="cross-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="cross-icon" />.
            </button>

            <ul className="nav-links-list">
              <li className="nav-link-item">
                <Link className="nav-link" to="/">
                  <AiFillHome className="home-icon" />
                  <p>Home</p>
                </Link>
              </li>
              <li className="nav-link-item">
                <Link className="nav-link" to="/about">
                  <BsInfoCircleFill className="home-icon" />
                  <p>About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
