import React, {useState} from 'react';

const UserInterface = ({display, setDisplay}) => {
    const [selectedOp, setSelectedOp] = useState('<div>');
    const [textInput, setTextInput] = useState('');
    const [preview, setPreview] = useState('');

    // Need to think about how to deal with nested tags
    const tags = {Division:'<div>',Heading:'<h1>',Paragraph:'<p>'};
    const headings = {Heading1:'<h1>',Heading2:'<h2>',Heading3:'<h3>',Heading4:'<h4>',Heading5:'<h5>',Heading6:'<h6>', Back:''}

    const makePreview = (e) => {
        e.preventDefault();
        const addition = selectedOp + textInput + selectedOp[0] + '/' + selectedOp.substring(1);
        setPreview(addition);
    }

    const commitChanges = (e) => {
        e.preventDefault();
        setDisplay([...display, preview]);
    }
    return(
        <div>
            <h1> User Interface </h1>
            {   
                selectedOp.includes('<h') ? 
                <select id="selectedOp" onChange={(e)=>setSelectedOp(e.target.value)} value={selectedOp}>
                    {Object.entries(headings).map(heading => <option value={heading[1]}>{heading[0]}</option>)}
                </select> : 
                <select id="selectedOp" onChange={(e)=>setSelectedOp(e.target.value)} value={selectedOp}>
                    {Object.entries(tags).map(tag => <option value={tag[1]}>{tag[0]}</option>)}
                </select>
            }
            <textarea d="textInput" onChange={(e)=>setTextInput(e.target.value)} value={textInput}></textarea>
            <button onClick={(e)=>makePreview(e)}>Add</button>
            <h2> Preview </h2> 
            <div dangerouslySetInnerHTML={{__html: preview}} />
            <button onClick={(e)=>commitChanges(e)}>Make Changes</button>
        </div>
    )
}

export default UserInterface;