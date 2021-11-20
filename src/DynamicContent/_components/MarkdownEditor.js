import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown';
import MdEditor from 'react-markdown-editor-lite'

//editor will act as input only so no need to set value
const MarkdownEditor = ({ value, onChange, ...props }) => { 

    const onEditorChange = (change) => {
        onChange?.(change.text)
    }

    return (
        <MdEditor {...props}
        renderHTML={text => <ReactMarkdown>{text}</ReactMarkdown>} 
        onChange={onEditorChange}/>
    )
}

export default MarkdownEditor