import React from 'react';
import s from './NavLink.module.css'

const NavLink = (props) => {
    return (
        <>
            <li className={s.link}>{props.value}</li>
        </>
    );
}

export default NavLink;