import React from 'react';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
import s from './SectionFour.module.css';
import g_s from '../../../../../Style.module.css';
import cambridgeLogo from '../../../../../images/Cambridge.png';
import harvardLogo from '../../../../../images/harvard_logo.png';
import mitLogo from '../../../../../images/mit_logo.png';
import uclaLogo from '../../../../../images/ucla_logo.png';

const SectionFour = (props) => {
    // debugger;
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 2
            }
        },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    };

    let sectionTitleElement = props.sectionFourData.titleData.map(elem =>
        <h2 className={s.title}>{elem.title}</h2>);

    return (
        <section className={`${s.section_four} ${g_s.section}`}>
            <div className={g_s.container}>
                <div className={g_s.wrapper}>
                    <div className={g_s.section_title}>
                        {sectionTitleElement}
                    </div>
                    <div className={s.content}>
                        <Slider {...settings}>
                            <div className={`${s.item} ${s.item_1}`}>
                                <img src={cambridgeLogo} alt='Cambridge'/>
                                <a href='#'>Cambridge</a>
                            </div>
                            <div className={`${s.item} ${s.item_2}`}>
                                <img src={harvardLogo} alt='Harvard'/>
                                <a href='#'>Harvard</a>
                            </div>
                            <div className={`${s.item} ${s.item_3}`}>
                                <img src={mitLogo} alt='MIT'/>
                                <a href='#'>MIT</a>
                            </div>
                            <div className={`${s.item} ${s.item_4}`}>
                                <img src={uclaLogo} alt='UCLA'/>
                                <a href='#'>UCLA</a>
                            </div>
                            <div className={`${s.item} ${s.item_5}`}>
                                <img src={mitLogo} alt='MIT'/>
                                <a href='#'>MIT</a>
                            </div>

                        </Slider>
                        {/*<div className={`${s.item} ${s.item_1}`}>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionFour;