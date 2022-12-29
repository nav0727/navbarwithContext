/* eslint-disable react/no-unknown-property */
import {Link} from 'react-router-dom'

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onChangeTheme = () => {
        toggleTheme()
      }

      return (
        <div>
          {isDarkTheme ? (
            <nav>
              <div className="nav-container-dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="logos"
                />

                <div>
                  <ul className="ul-light">
                    <Link to="/" style={{textDecoration: 'none'}}>
                      <li className="dark"> Home</li>
                    </Link>
                    <Link to="/about" style={{textDecoration: 'none'}}>
                      <li className="dark"> About</li>
                    </Link>
                  </ul>
                </div>

                <div>
                  <button type="button" onClick={onChangeTheme} testid="theme">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                      alt="theme"
                      className="logos"
                    />
                  </button>
                </div>
              </div>
            </nav>
          ) : (
            <nav>
              <div className="nav-container-light">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="logos"
                />

                <div>
                  <ul className="ul-light">
                    <Link to="/" style={{textDecoration: 'none'}}>
                      <li className="light"> Home</li>
                    </Link>
                    <Link
                      to="/about"
                      style={{textDecoration: 'none'}}
                      className="light"
                    >
                      <li className="light"> About</li>
                    </Link>
                  </ul>
                </div>

                <div>
                  <button type="button" onClick={onChangeTheme} testid="theme">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                      alt="theme"
                      className="logos"
                    />
                  </button>
                </div>
              </div>
            </nav>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
