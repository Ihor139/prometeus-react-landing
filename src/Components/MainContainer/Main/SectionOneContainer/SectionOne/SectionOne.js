import React from 'react';
import s from './SectionOne.module.css'
import g_s from '../../../../../Style.module.css'
import SectionOneForm from "./SectionOneForm/SectionOneForm";

const SectionOne = (props) => {
    // debugger;
    let titleElement = props.sectionOneData.titleData.map(elem => <h1 className={s.title}>{elem.title}</h1>);
    let subtitleElement = props.sectionOneData.subtitleData.map(elem => <h2
        className={s.subtitle}>{elem.subtitle}</h2>);

    return (
        <section className={`${s.section_one} ${g_s.section}`}>
            <div className={g_s.container}>
                <div className={g_s.wrapper}>
                    <div className={s.title_wrapper}>
                        <div>
                            {titleElement}
                            {subtitleElement}
                        </div>
                    </div>
                    <SectionOneForm/>
                </div>
            </div>
        </section>
    )
}

export default SectionOne;