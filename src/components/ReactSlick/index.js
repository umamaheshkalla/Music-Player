import {Component} from 'react'
import Carousel from 'react-elastic-carousel'

import './index.css'

class ReactSlider extends Component {
  render() {
    return (
      <Carousel className="container">
        <div className="carousel-images">
          <img
            alt="carousel-img"
            src="https://irshad-github.github.io/static/13.png"
          />
        </div>
        <div className="carousel-images">
          <img
            alt="carousel-img"
            src="https://irshad-github.github.io/static/5.jpg"
          />
        </div>
        <div className="carousel-images">
          <img
            alt="carousel-img"
            src="https://irshad-github.github.io/static/3.jpg"
          />
        </div>
        <div className="carousel-images">
          <img
            alt="carousel-img"
            src="https://irshad-github.github.io/static/13.png"
          />
        </div>
        <div className="carousel-images">
          <img
            alt="carousel-img"
            src="https://irshad-github.github.io/static/5.jpg"
          />
        </div>
        <div className="carousel-images">
          <img
            alt="carousel-img"
            src="https://irshad-github.github.io/static/3.jpg"
          />
        </div>
        <div className="carousel-images">
          <img
            alt="carousel-img"
            src="https://irshad-github.github.io/static/4"
          />
        </div>
        <div className="carousel-images">
          <img
            alt="carousel-img"
            src="https://irshad-github.github.io/static/13.png"
          />
        </div>
      </Carousel>
    )
  }
}

export default ReactSlider
