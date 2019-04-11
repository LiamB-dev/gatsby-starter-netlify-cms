import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
              <div className="columns">
                <div className="column is-4">
                <section className="menu">
                    <ul className="menu-list">
                      <li><Link to="/" className="navbar-item">Home</Link></li>
                      <li><Link className="navbar-item" to="/blog">Info</Link></li>
                      <li><Link className="navbar-item" to="/specials">Specials</Link></li>
                      <li><Link className="navbar-item" to="/animatoren">Animatoren</Link></li>
                      <li><Link className="navbar-item" to="/contact">Contact</Link></li>
                    </ul>
                  </section>
                </div>
                <div className="column is-6 social">
                
                  <a title="facebook" href="https://www.facebook.com/Speelplein-Wuustwezel-489493887871619/" target="_blank">
                    <img 
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </div>
              </div>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer
