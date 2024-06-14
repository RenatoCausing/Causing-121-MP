import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar4 from '../components/navbar4'
import Hero9 from '../components/hero9'
import Features1 from '../components/features1'
import Contact3 from '../components/contact3'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portly Meek Hippopotamus</title>
        <meta property="og:title" content="Portly Meek Hippopotamus" />
      </Helmet>
      <Navbar4></Navbar4>
      <Hero9 image1Src="/hq720-1500w.jpg"></Hero9>
      <Features1 rootClassName="features1-root-class-name"></Features1>
      <Contact3></Contact3>
    </div>
  )
}

export default Home
