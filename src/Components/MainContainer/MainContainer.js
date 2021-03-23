import React from 'react';
import Main from "./Main/Main";

const MainContainer = (props) => {
// debugger;
    return (
        <main>
            <Main mainData={props.mainData}/>
        </main>
    );
}

export default MainContainer;