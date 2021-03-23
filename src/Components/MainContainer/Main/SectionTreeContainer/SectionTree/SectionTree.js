import React from 'react';
import s from './SectionTree.module.css';
import g_s from '../../../../../Style.module.css';
import logo1 from '../../../../../images/Logo1.png';
import logo2 from '../../../../../images/Logo2.png';
import logo3 from '../../../../../images/Logo3.png';
import logo4 from '../../../../../images/Logo4.png';

const SectionTree = (props) => {
    // debugger;
    let sectionTitleElement = props.sectionTreeData.titleData.map(elem =>
        <h2 className={s.title}>{elem.title}</h2>);
    let sectionSubtitleElement = props.sectionTreeData.subtitleData.map(elem =>
        <h2 className={s.subtitle}>{elem.subtitle}</h2>);

    return (
        <section className={`${s.section_tree} ${g_s.section}`}>
            <div className={g_s.container}>
                <div className={g_s.wrapper}>
                    <div className={g_s.section_title}>
                        {sectionTitleElement}
                        {sectionSubtitleElement}
                    </div>
                    <div className={s.content}>
                        <div className={`${s.item} ${s.item_1}`}>
                            <div className={s.course_description}>
                                <h2>Основи програмування</h2>
                                <p>After the first 50 completed projects to make a mistake with the deadlines almost
                                    unreal. </p>
                                <p><a className={s.course_info} href="#">Read more....</a></p>
                                <div className={s.registration_wrapper}>
                                    <a className={s.registration_link} href="#">Записатися на курс</a>
                                </div>
                            </div>
                            <div className={s.image}>
                                <img src={logo1} alt="Algoritms"/>
                            </div>
                        </div>
                        <div className={`${s.item} ${s.item_2}`}>
                            <div className={s.course_description}>
                                <h2>Розробка та аналіз алгоритмів</h2>
                                <p>After the first 50 completed projects to make a mistake with the deadlines almost
                                    unreal. </p>
                                <p><a className={s.course_info} href="#">Read more....</a></p>
                                <div className={s.registration_wrapper}>
                                    <a className={s.registration_link} href="#">Записатися на курс</a>
                                </div>
                            </div>
                            <div className={s.image}>
                                <img src={logo2} alt="Code"/>
                            </div>
                        </div>
                        <div className={`${s.item} ${s.item_3}`}>
                            <div className={s.course_description}>
                                <h2>Економіка для всіх</h2>
                                <p>After the first 50 completed projects to make a mistake with the deadlines almost
                                    unreal. </p>
                                <p><a className={s.course_info} href="#">Read more....</a></p>
                                <div className={s.registration_wrapper}>
                                    <a className={s.registration_link} href="#">Записатися на курс</a>
                                </div>
                            </div>
                            <div className={s.image}>
                                <img src={logo3} alt="workspace"/>
                            </div>
                        </div>
                        <div className={`${s.item} ${s.item_4}`}>
                            <div className={s.course_description}>
                                <h2>Історія України</h2>
                                <p>After the first 50 completed projects to make a mistake with the deadlines almost
                                    unreal. </p>
                                <p><a className={s.course_info} href="#">Read more....</a></p>
                                <div className={s.registration_wrapper}>
                                    <a className={s.registration_link} href="#">Записатися на курс</a>
                                </div>
                            </div>
                            <div className={s.image}>
                                <img src={logo4} alt="war"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTree;