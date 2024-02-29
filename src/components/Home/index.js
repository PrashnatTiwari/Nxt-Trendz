import {Component} from 'react'

import './index.css'

import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-bg-container">
          <div>
            <h1 className="home-main-heading">
              Clothes That Get YOU
              <br /> Noticed
            </h1>
            <p className="home-paragraph">
              Fashion is part of daily air and it does not quite help that it
              changes <br />
              all the time.Clothes always have been a marker of the era and we
              are in <br />a revolution. Your fashion makes you been seen and
              heared that way you <br />
              are. So, celeberate the seasons new and exiting fashion in your
              own
              <br /> way
            </p>
            <button className="shopnow-button" type="button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            className="home-main-image"
            alt=" clothes that get you noticed"
          />
        </div>
      </>
    )
  }
}

export default Home
