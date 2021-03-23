import React from 'react';
import s from './HeaderLogo.module.css'

const HeaderLogo = (props) => {
    // debugger;
    let logoElement = props.headerLogo.map(elem => <h1 className={s.logo}> {elem.headerLogo} </h1>);
    return (
        <>
            {logoElement}
        </>
    )
}

export default HeaderLogo;