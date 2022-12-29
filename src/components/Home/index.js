import Navbar from '../Navbar'

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <div className="bg-container">
          <Navbar />

          {isDarkTheme ? (
            <div className="home-container-light">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="logo"
              />
              <h1>Home</h1>
            </div>
          ) : (
            <div className="home-container-dark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="logo"
              />
              <h1 className="heading">Home</h1>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
