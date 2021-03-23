import React from 'react';
import s from './Footer.module.css'
import g_s from "../../../Style.module.css";
import facebookRed from '../../../images/facebook_footer_red.png'
import twitterRed from '../../../images/twitter_footer_red.png'
import googleRed from '../../../images/google_plus_footer_red.png'
import facebookBlue from '../../../images/facebook_footer_blue.png'
import twitterBlue from '../../../images/twitter_footer_blue.png'
import googleBlue from '../../../images/google_plus_footer_blue.png'

const Footer = (props) => {
// debugger;
    return (
        <div className={g_s.container}>
            <div className={g_s.wrapper}>
                <div className={s.content}>
                    <div className={s.designers}>
                        <h2>
                            <span>Made with love by</span>
                            <a href="#">Alex Kuzmenko</a>
                        </h2>
                        <h2>
                            <span>Ispired by</span>
                            <a href="#">PROMETHEUS</a>
                        </h2>
                    </div>
                    <div className={s.social}>
                        <div className={s.socail_row}>
                            <a href="#">
                                <img src={facebookRed} alt="twitter "/>
                            </a>
                            <a href="#">
                                <img src={twitterRed} alt="facebook "/>
                            </a>
                            <a href="#">
                                <img src={googleRed} alt="google "/>
                            </a>
                        </div>
                        <div className={s.socail_row}>
                            <a href="#">
                                <img src={facebookBlue} alt="twitter "/>
                            </a>
                            <a href="#">
                                <img src={twitterBlue} alt="facebook "/>
                            </a>
                            <a href="#">
                                <img src={googleBlue} alt="google "/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;