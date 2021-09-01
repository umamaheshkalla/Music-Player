import {Component} from 'react'

import {Link} from 'react-router-dom'

import {BiHomeCircle} from 'react-icons/bi'

import './index.css'

class TrackItem extends Component {
  render() {
    const {trackInfo} = this.props
    const {artist, name, description, source} = trackInfo
    return (
      <>
        <Link to="/">
          <BiHomeCircle className="home-icon" />
        </Link>
        <div className="track-details">
          <h1>Artist :- {artist}</h1>
          <p>
            <span className="span-element">Name :- </span>
            {name}
          </p>
          <p>
            <span className="span-element">Description :- </span>
            {description}
          </p>
        </div>
        <div className="similar-block">
          <p className="similar-heading">Similar Artists</p>
          <div className="similar-bg-container">
            <Link className="navigate-link" to="/18">
              <div className="similar-artist-block">
                <img
                  className="similar-artist-img"
                  alt="similar-artist"
                  src="https://irshad-github.github.io/static/4.jpg"
                />
                <p>LastLings</p>
              </div>
            </Link>
            <Link className="navigate-link" to="/22">
              <div className="similar-artist-block">
                <img
                  className="similar-artist-img"
                  alt="similar-artist"
                  src="https://irshad-github.github.io/static/5v.jpg"
                />
                <p>Randall</p>
              </div>
            </Link>
            <Link className="navigate-link" to="/3">
              <div className="similar-artist-block">
                <img
                  className="similar-artist-img"
                  alt="similar-artist"
                  src="https://irshad-github.github.io/static/3.jpg"
                />
                <p>The Stark Place</p>
              </div>
            </Link>
            <Link className="navigate-link" to="/8">
              <div className="similar-artist-block">
                <img
                  className="similar-artist-img"
                  alt="similar-artist"
                  src="https://irshad-github.github.io/static/1.jpeg"
                />
                <p>Grandson</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="audio-controls-block">
          <audio controls src={source}>
            <track default kind="captions" src={source} />
            {description}
          </audio>
        </div>
      </>
    )
  }
}
export default TrackItem
