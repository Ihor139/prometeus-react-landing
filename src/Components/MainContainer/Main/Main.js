import React from 'react';
import SectionOneContainer from './SectionOneContainer/SectionOneContainer'
import SectionTwoContainer from "./SectionTwoContainer/SectionTwoContainer";
import SectionTreeContainer from "./SectionTreeContainer/SectionTreeContainer";
import SectionFourContainer from "./SectionFourContainer/SectionFourContainer";
import SectionFiveContainer from "./SectionFiveContainer/SectionFiveContainer";
import SectionSixContainer from "./SectionSixContainer/SectionSixContainer";
import SectionSevenContainer from "./SectionSevenContainer/SectionSevenContainer";

const Main = (props) => {
// debugger;
    return (
        <>
            <SectionOneContainer sectionOneData={props.mainData.sectionOneData}/>
            <SectionTwoContainer sectionTwoData={props.mainData.sectionTwoData}/>
            <SectionTreeContainer sectionTreeData={props.mainData.sectionTreeData}/>
            <SectionFourContainer sectionFourData={props.mainData.sectionFourData}/>
            <SectionFiveContainer/>
            <SectionSixContainer/>
            <SectionSevenContainer/>
        </>
    )
}

export default Main;