import React from 'react';
import { AZLogo, FTIMG } from '../../assets';
import './pricing.styles.css';

const Pricing = () => {
    return (
        <div className='pricing-card'>
            <div className="pricing-header">
                <div className="pricing-header-content">
                    <p>Premium Victory Batch</p>
                    <h1 className='early-pricing'>₹ 19,999</h1>
                    <h1 className='current-pricing'>₹ 13,999</h1>
                </div>
                <img className='az-logo' src={AZLogo} alt="" />
            </div>
            <div className="pricing-feature">
                <div className="pr-ft-card">
                    <img src={FTIMG} alt="" />
                    <p>100+ Hrs Live Content</p>
                </div>
                <div className="pr-ft-card">
                    <img src={FTIMG} alt="" />
                    <p>50+ Hrs Contest</p>
                </div>
                <div className="pr-ft-card">
                    <img src={FTIMG} alt="" />
                    <p>500+ Problems</p>
                </div>
                <div className="pr-ft-card">
                    <img src={FTIMG} alt="" />
                    <p>Includes an interview bootcamp and access to monitor network</p>
                </div>
                <div className="pr-ft-card">
                    <img src={FTIMG} alt="" />
                    <p>Enjoy access to our content for one year (paid extension available)</p>
                </div>
                <div className="pr-ft-card">
                    <img src={FTIMG} alt="" />
                    <p>Flexible payment options, including no-cost EMI, are available</p>
                </div>
                <div className="join-btn-section">
                    <button className="join-now-btn">Join Now →</button>
                </div>
            </div>
        </div>
    )
}

export default Pricing;