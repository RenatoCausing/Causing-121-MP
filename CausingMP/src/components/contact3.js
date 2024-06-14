import React from 'react'

import PropTypes from 'prop-types'

import './contact3.css'

const Contact3 = (props) => {
  return (
    <div className="contact3-contact20 thq-section-padding">
      <div className="contact3-max-width thq-section-max-width">
        <div className="contact3-section-title">
          <span className="contact3-text thq-body-small">{props.content2}</span>
          <div className="contact3-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact3.defaultProps = {
  content2:
    'I am Renato C. Causing II, a BS Computer Science Student from UP Manila. I dedicate this site to the Greatest of All Time, my sunshine, my lebonbon, and pookie bear Lebron James.',
  content5: 'Follow me on Instagram, Twitter, and LinkedIn.',
  content4: 'You can also connect with me on social media.',
  content3: 'Looking forward to hearing from you!',
  content1: 'Feel free to reach out to me for any inquiries or collaborations.',
  heading1: 'LEBRON IS THE GOAT!',
  email1: 'example@email.com',
  phone1: '+1234567890',
  address1: '123 Street Name, City, Country',
}

Contact3.propTypes = {
  content2: PropTypes.string,
  content5: PropTypes.string,
  content4: PropTypes.string,
  content3: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  email1: PropTypes.string,
  phone1: PropTypes.string,
  address1: PropTypes.string,
}

export default Contact3
