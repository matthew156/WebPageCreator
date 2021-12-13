import Display from './Display';
import UserInterface from './UserInterface';
import React, {useState} from 'react';

const Editor = () => {
    const [display, setDisplay] = useState([]);

    return(
        <div>
            <h1> Editor </h1>
            <div style={{display:'flex', justifyContent: 'space-evenly'}}>
            <UserInterface display = {display} setDisplay={setDisplay} />
            <Display display = {display}/>
            </div>
        </div>
    )
}

export default Editor;