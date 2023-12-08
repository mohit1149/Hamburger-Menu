// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="home-containers">
    <Header />
    <div className="home-container">
      <img
        className="home-image"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
    </div>
  </div>
)

export default About
