import React from 'react';
import SectionOne from './SectionOne/SectionOne'

const SectionOneContainer = (props) => {
// debugger;
    return (
        <>
            <SectionOne sectionOneData={props.sectionOneData}/>
        </>
    )
}

export default SectionOneContainer;