import React from 'react';
import s from './SectionSix.module.css';
import g_s from '../../../../../Style.module.css';
import developer_1 from '../../../../../images/Developer_icon_1.png'
import developer_2 from '../../../../../images/Developer_icon_2.png'
import developer_3 from '../../../../../images/Developer_icon_3.png'
import developer_4 from '../../../../../images/Developer_icon_4.png'
import facebook_icon from '../../../../../images/facebook_icon.png'
import twitter_icon from '../../../../../images/twitter_icon.png'
import google_icon from '../../../../../images/google_plus_icon.png'

const SectionSix = (props) => {
    // debugger;

    // let sectionTitleElement = props.sectionFourData.titleData.map(elem =>
    //     <h2 className={s.title}>{elem.title}</h2>);

    return (
        <section className={`${s.section_six} ${g_s.section}`}>
            <div className={g_s.container}>
                <div className={g_s.wrapper}>
                    <div className={g_s.section_title}>
                        <h2>Розробники</h2>
                    </div>
                    <div className={s.content}>
                        <div className={s.developers}>
                            <div className={s.developer}>
                                <img src={developer_1} alt="Daniel Raynolds"/>
                                <h2 className={s.name_developer}>Daniel Raynolds</h2>
                                <p>After the first 50 completed projects to make a mistake with the deadlines almost
                                    unreal. After the first hundred projects to break the promises already
                                    impossible.</p>
                                <div className={s.developer_socail}>
                                    <a href="#">
                                        <img src={facebook_icon} alt="facebook"/>
                                    </a>
                                    <a href="#">
                                        <img src={twitter_icon} alt="twitter"/>
                                    </a>
                                    <a href="#">
                                        <img src={google_icon} alt="google"/>
                                    </a>
                                </div>
                            </div>

                            <div className={s.developer}>
                                <img src={developer_2} alt="Nick Parson"/>
                                <h2 className={s.name_developer}>Nick Parson</h2>
                                <p>After the first 50 completed projects to make a mistake with the deadlines almost
                                    unreal. After the first hundred projects to break the promises already
                                    impossible.</p>
                                <div className={s.developer_socail}>
                                    <a href="#">
                                        <img src={facebook_icon} alt="facebook"/>
                                    </a>
                                    <a href="#">
                                        <img src={twitter_icon} alt="twitter"/>
                                    </a>
                                    <a href="#">
                                        <img src={google_icon} alt="google"/>
                                    </a>
                                </div>
                            </div>

                            <div className={s.developer}>
                                <img src={developer_3} alt="William Stanley"/>
                                <h2 className={s.name_developer}>William Stanley</h2>
                                <p>After the first 50 completed projects to make a mistake with the deadlines almost
                                    unreal. After the first hundred projects to break the promises already
                                    impossible.</p>
                                <div className={s.developer_socail}>
                                    <a href="#">
                                        <img src={facebook_icon} alt="facebook"/>
                                    </a>
                                    <a href="#">
                                        <img src={twitter_icon} alt="twitter"/>
                                    </a>
                                    <a href="#">
                                        <img src={google_icon} alt="google"/>
                                    </a>
                                </div>
                            </div>

                            <div className={s.developer}>
                                <img src={developer_4} alt="Sarah Noel"/>
                                <h2 className={s.name_developer}>Sarah Noel</h2>
                                <p>After the first 50 completed projects to make a mistake with the deadlines almost
                                    unreal. After the first hundred projects to break the promises already
                                    impossible.</p>
                                <div className={s.developer_socail}>
                                    <a href="#">
                                        <img src={facebook_icon} alt="facebook"/>
                                    </a>
                                    <a href="#">
                                        <img src={twitter_icon} alt="twitter"/>
                                    </a>
                                    <a href="#">
                                        <img src={google_icon} alt="google"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSix;