import React from 'react';
import s from './SectionSeven.module.css';
import g_s from '../../../../../Style.module.css';
import developer_1 from '../../../../../images/Developer_icon_1.png'
import developer_2 from '../../../../../images/Developer_icon_2.png'
import developer_3 from '../../../../../images/Developer_icon_3.png'
import developer_4 from '../../../../../images/Developer_icon_4.png'
import facebook_icon from '../../../../../images/facebook_icon.png'
import twitter_icon from '../../../../../images/twitter_icon.png'
import google_icon from '../../../../../images/google_plus_icon.png'

const SectionSeven = (props) => {
    // debugger;

    // let sectionTitleElement = props.sectionFourData.titleData.map(elem =>
    //     <h2 className={s.title}>{elem.title}</h2>);

    return (
        <section className={`${s.section_seven} ${g_s.section}`}>
            <div className={g_s.container}>
                <div className={g_s.wrapper}>
                    <div className={g_s.section_title}>
                        <h2 className={s.title}>ЗАРЕЄСТРУЙСЯ ЗАРАЗ</h2>
                        <h2 className={s.subtitle}>Та отримай задоволення від навчання</h2>
                    </div>
                    <div className={s.content}>
                        <div className={s.form}>
                            <form action="#" method="post ">
                                <input className="email_registr " type="email " name="email " id="email_registr "
                                       placeholder="Email: "/>
                                <input className="password_registr " type="password " name="password_registr "
                                       id="password_registr " placeholder="Password: "/>
                                <button className="submit_registr " id="submit_registr " type="submit ">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSeven;