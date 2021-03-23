import React from 'react';
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNav from "./HeaderNav/HeaderNav";

const Header = (props) => {
// debugger;
    return (
        <>
            <HeaderLogo headerLogo={props.headerData.headerLogoData}/>
            <HeaderNav navLinksData={props.headerData.navLinksData}/>
        </>
    )
}

export default Header;