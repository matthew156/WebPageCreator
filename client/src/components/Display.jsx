import React, {useState} from 'react';

const Display = ({display}) => {
    const convertToString = (arr) => {
        let resultString = "";
        arr.forEach(element => resultString+=element);
        return resultString;
    }
    return(
        <div>
        <h1> Display </h1>
        <div dangerouslySetInnerHTML={{__html: convertToString(display)}} >
        </div>
        </div>
    )
}

export default Display;