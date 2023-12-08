// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-containers">
    <Header />
    <div className="home-container">
      <img
        className="home-image"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </div>
)

export default Home
