// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="home-containers">
    <Header />
    <div className="not-found-container">
      <img
        className="not-found-image"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <h1 className="not-found-heading">Lost Your Way?</h1>
      <p className="not-found-paragraph">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound
