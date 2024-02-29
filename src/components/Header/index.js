import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="image-logo"
    />
    <div className="link-container">
      <p className="nav-link">Home</p>
      <p className="nav-link">Product</p>
      <p className="nav-link">Cart</p>
      <button className="logout-button" type="button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
