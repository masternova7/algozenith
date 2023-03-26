import React from 'react';
import { FTIMG } from '../../assets';
import './pricingcontent.styles.css';

const Pricingcontent = () => {
  return (
    <div className='pricing-container'>
      <div className="pricing-container-cnt">
        <h1>Invest in skills, <span>earn 10X</span> of what you paid.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="pricing-addition-features">
        <div className="pcf-ft ft-1">
          <img src={FTIMG} alt="" />
          <div>
            <h2>1.2Cr/Year</h2>
            <p>highest fresher package</p>
          </div>
        </div>
        <div className="pcf-ft ft-1">
          <img src={FTIMG} alt="" />
          <div>
            <h2>Multiple 100 Ranks</h2>
            <p>in kickstart last year</p>
          </div>
        </div>
        <div className="pcf-ft ft-1">
          <img src={FTIMG} alt="" />
          <div>
            <h2>1000+ Offers</h2>
            <p>from top companies</p>
          </div>
        </div>
        <div className="pcf-ft ft-1">
          <img src={FTIMG} alt="" />
          <div>
            <h2>Trusted by IITians</h2>
            <p>for their career prep</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricingcontent