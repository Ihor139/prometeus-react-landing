import React from 'react';
import NavLink from "./NavLink/NavLink";
import s from "./HeaderNav.module.css";

const HeaderNav = (props) => {
// debugger;
    let navElements = props.navLinksData.map(links => <NavLink value={links.value}/>)
    return (
        <>
            <ul className={s.navigation}>
                {navElements}
            </ul>
        </>
    );
}

export default HeaderNav;