import React from 'react';
import s from './SectionFive.module.css';
import g_s from '../../../../../Style.module.css';

const SectionFive = (props) => {
    // debugger;

    // let sectionTitleElement = props.sectionFourData.titleData.map(elem =>
    //     <h2 className={s.title}>{elem.title}</h2>);

    return (
        <section className={`${s.section_five} ${g_s.section}`}>
            <div className={g_s.container}>
                <div className={`${g_s.wrapper} ${s.wrapper}`}>
                    <div className={s.content}>
                        {/*<div className={g_s.section_title}>*/}
                        {/*    /!*{sectionTitleElement}*!/*/}
                        {/*    <h2 className={s.title}></h2>*/}
                        {/*</div>*/}

                        <div className={s.section_title}>
                        <h2>Сертифікат від Гарварду</h2>
                        </div>
                        <div className={s.description}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type.</p>
                        </div>
                        <div className={s.get_wrapper}>
                            <a className={s.get_link} href="#">Отримати!</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionFive;