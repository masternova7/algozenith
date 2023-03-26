import React from 'react';
import { GRAPH, TEXTURE } from '../../assets';
import { Hero, Pricing, PricingContent } from '../../components';
import './home.styles.css';

const Home = () => {
  return (
    <div className='home-page'>
        {/* hero section */}
        <div className='hero-section'>
            <Hero/>
            {/* texture is not transparent */}
            <img className='texture' src={TEXTURE} alt="" />
        </div>

        {/* Pricing Section */}
        <div className='pricing-section'>
          <PricingContent/>
          <Pricing/>
        </div>
        <div className='graph-bg'>
          <img className='graph' src={GRAPH} alt="" />
        </div>
    </div>
  )
}

export default Home;