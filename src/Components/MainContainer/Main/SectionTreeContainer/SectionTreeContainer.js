import React from 'react';
import SectionTree from './SectionTree/SectionTree'

const SectionTreeContainer = (props) => {
// debugger;
    return (
        <>
            <SectionTree sectionTreeData={props.sectionTreeData}/>
        </>
    )
}

export default SectionTreeContainer;