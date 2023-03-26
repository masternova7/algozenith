import React from 'react';
import { FTIMG, HEROIMG } from '../../assets';
import './hero.styles.css';

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className="hero-content">
                <h1>Be better at DSA & CP</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div className="hero-actions">
                    <button className="join-btn">Join now →</button>
                    <button className='view-btn'>View curriculam</button>
                </div>

                <div className="hero-features">
                    <div className="ft ft-1">
                        <img src={FTIMG} alt="" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="ft ft-1">
                        <img src={FTIMG} alt="" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="ft ft-1">
                        <img src={FTIMG} alt="" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="ft ft-1">
                        <img src={FTIMG} alt="" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
            <img className='hero-img' src={HEROIMG} alt="" />
            {/* <div className="overlay-bg"></div> */}
        </div>
    )
}

export default Hero;