import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <div className="bg-container">
          <Navbar />

          {isDarkTheme ? (
            <div className="home-container-light">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="logo"
              />
              <h1>About</h1>
            </div>
          ) : (
            <div className="home-container-dark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="logo"
              />
              <h1 className="heading">About</h1>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
