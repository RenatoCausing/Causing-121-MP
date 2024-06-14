import React from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text thq-heading-1">{props.heading1}</h1>
          <p className="hero9-text1 thq-body-large">{props.content1}</p>
          <div className="hero9-actions">
            <button type="button" className="hero9-button thq-button-filled">
              <span className="hero9-text2 thq-body-small">
                {props.action1}
              </span>
            </button>
            <button className="hero9-button1 thq-button-outline">
              <span className="hero9-text3 thq-body-small">
                {props.action2}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  content1: 'Explore the Services I Offer',
  image1Src:
    'https://images.unsplash.com/photo-1548236747-047a3b12bab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzk0NTc2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'View Music Choices',
  image1Alt: 'Portfolio Image',
  heading1: 'Welcome to My Website',
  action2: 'Create Todo List',
}

Hero9.propTypes = {
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
}

export default Hero9
