import React from 'react';
import s from './Footer/Footer.module.css'
import g_s from '../../Style.module.css'
import Footer from "./Footer/Footer";

const FooterContainer = (props) => {
// debugger;

    return (
        <footer className={`${s.footer} ${g_s.section}`}>
            <Footer/>
        </footer>
    );
}

export default FooterContainer;