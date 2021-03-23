import React, {useEffect, useState} from 'react';
import s from "./HeaderContainer.module.css";
import g_s from "../../Style.module.css";
import Header from "./Header/Header";

const HeaderContainer = (props) => {
// debugger;

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, [])

    return (
        <header className={`${s.header} ${scroll ? (s.scroll) : ''}`}>
            <div className={g_s.container}>
                <div className={g_s.wrapper}>
                    <div className={s.content}>
                        <Header headerData={props.headerData}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderContainer;