import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div
      className={`features1-layout251 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="features1-text1 thq-heading-2">
              {props.sectionTitle}
            </h2>
          </div>
        </div>
        <div className="features1-content">
          <animate-on-reveal
            animation="fadeInLeft"
            duration="600ms"
            delay="0s"
            direction="normal"
            easing="ease-in"
            iteration="1"
            className=""
          >
            <div
              data-thq-animate-on-reveal="true"
              className="features1-row thq-flex-row"
            >
              <div className="features1-feature3 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src="/s-l1200-300h.webp"
                  className="features1-feature3-image thq-img-ratio-4-3"
                />
                <div className="features1-content1 thq-flex-column">
                  <h3 className="features1-feature3-title thq-heading-3">
                    My Hobbies
                  </h3>
                  <span className="thq-body-small">
                    <span className="">
                      Check out the things I usually do and things that I had
                      fun doing
                    </span>
                    <br className=""></br>
                    <br className=""></br>
                  </span>
                </div>
              </div>
              <div className="features1-feature31 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src="/ab67616d0000b273d58e537cea05c2156792c53d-300h.jpg"
                  className="features1-feature3-image1 thq-img-ratio-4-3"
                />
                <div className="features1-content2 thq-flex-column">
                  <h3 className="features1-feature3-title1 thq-heading-3">
                    Top 5 Music Choices
                  </h3>
                  <span className="thq-body-small">
                    Discover my top music picks
                  </span>
                </div>
              </div>
              <div className="features1-feature2 thq-flex-column">
                <img
                  src="/gettyimages-1489016138-b69c82ea8e044ad78514797af9882740-700w.jpg"
                  alt={props.feature2ImageAlt}
                  className="features1-feature2-image thq-img-ratio-4-3"
                />
                <div className="features1-content3 thq-flex-column">
                  <h3 className="features1-feature2-title">
                    {props.feature2Title}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature2Description}
                  </span>
                </div>
              </div>
            </div>
          </animate-on-reveal>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature2ImageAlt: 'My Hobbies',
  secondaryAction: 'Add Task',
  slogan: 'Website',
  sectionTitle: 'SERVICES',
  feature3Description: 'Discover my top music picks',
  feature3Title: 'My Hobbies',
  feature2Description: 'Create your own to-do list',
  feature2Title: 'Todo List',
  feature3ImageAlt: 'Top 5 Music Choices Image',
  feature1ImageAlt: 'Personal Portfolio Image',
  sectionDescription: 'Explore the key features of this website.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzk0NTc2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageSrc: '8a7e0a99-2539-4c4c-a677-6d361275d56e',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1521133573892-e44906baee46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzk0NTc2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description: 'Website Services',
  mainAction: 'View Designs',
  feature1Title: 'Personal Portfolio',
  rootClassName: '',
}

Features1.propTypes = {
  feature2ImageAlt: PropTypes.string,
  secondaryAction: PropTypes.string,
  slogan: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  mainAction: PropTypes.string,
  feature1Title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Features1
