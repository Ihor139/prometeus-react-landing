import React from 'react';
import s from './SectionTwo.module.css'
import g_s from '../../../../../Style.module.css'

//?????????????????????????????????????????????????????????????????
import clockIcon from '../../../../../images/ClockIcon.png';
import planetIcon from '../../../../../images/GlobeIcon.png';
import lyreIcon from '../../../../../images/LyreIcon.png';
import iphoneIcon from '../../../../../images/iPhoneIcon.png';
import manIcon from '../../../../../images/ManIcon.png';
// ???????????????????????????????????????????????????????????????????

const SectionTwo = (props) => {
    // debugger;
    let sectionTitleElement = props.sectionTwoData.titleData.map(elem =>
        <h1 className={s.title}>{elem.title}</h1>);

    return (
        <section className={`${s.section_two} ${g_s.section}`}>
            <div className={g_s.container}>
                <div className={g_s.wrapper}>
                    <div className={g_s.section_title}>
                        {sectionTitleElement}
                    </div>
                    <div className={s.content}>
                        <div className={`${s.item} ${s.item_1}`}>
                            <img src={clockIcon} alt="clock icon"/>
                            <h2>Будь-коли</h2>
                            <p>Навчайтесь у зручний для Вас час. Відеолекції, тести та форум доступні цілодобово.</p>
                        </div>
                        <div className={`${s.item} ${s.item_2}`}>
                            <img src={planetIcon} alt="planet icon"/>
                            <h2>Будь-де</h2>
                            <p>Проходьте курси, не виходячи з дому чи в дорозі. Все, що Вам знадобиться, – це доступ до
                                інтернету.</p>
                        </div>
                        <div className={`${s.item} ${s.item_3}`}>
                            <img src={lyreIcon} alt="lyre icon"/>
                        </div>
                        <div className={`${s.item} ${s.item_4}`}>
                            <img src={iphoneIcon} alt="iphone icon"/>
                            <h2>Будь-який пристрій </h2>
                            <p>Навчайтесь на комп’ютері, планшеті чи телефоні: сайт підлаштується під Ваш пристрій. </p>
                        </div>
                        <div className={`${s.item} ${s.item_5}`}>
                            <img src={manIcon} alt="man icon"/>
                            <h2>Будь-хто</h2>
                            <p>Наші курси абсолютно безкоштовні – захмарні ціни більше ніколи не стануть на заваді
                                найкращій освіті.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo;