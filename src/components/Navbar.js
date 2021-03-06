import React from 'react'
import { Link } from 'gatsby'
import github from '../img/spLogo.jpeg'

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }

  render() {
    return (
      <nav
        className="navbar has-background-black"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* <Link to="/" className="navbar-item" title="Logo">
              <h1>Speelplein Wuustwezel</h1>
              </Link> */}
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu has-background-black">
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item has-text-white-ter" to="/">
                Home
              </Link>
              <Link className="navbar-item has-text-white-ter" to="/blog">
                Info
              </Link>
              <Link className="navbar-item has-text-white-ter" to="/specials">
                Specials
              </Link>
              <Link className="navbar-item has-text-white-ter" to="/animatoren">
                Animatoren
              </Link>
              <Link className="navbar-item has-text-white-ter" to="/contact">
                Contact
              </Link>
              <a className="navbar-item has-text-white-ter" href="https://www.facebook.com/Speelplein-Wuustwezel-489493887871619/" target="_blank">
                Facebook
              </a>
            </div>
            <div className="navbar-end has-text-centered">
            <h1 className="navbar-item has-text-white-ter">Speelplein Wuustwezel</h1>
              <div>
                <span className="navbar-item has-text-white-ter">
                  <img src={github} alt="Logo" height="100%"/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
