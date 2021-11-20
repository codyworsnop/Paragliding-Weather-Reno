import React from 'react'
import ReactMarkdown from 'react-markdown';
import MdEditor from 'react-markdown-editor-lite'

const MarkdownEditor = ({ value, onChange, ...props }) => { 

    const onEditorChange = (change) => {
        onChange?.(change.text)
    }

    return (
        <MdEditor {...props}
        renderHTML={text => <ReactMarkdown>{text}</ReactMarkdown>} 
        onChange={onEditorChange}
        value={value}/>
    )
}

export default MarkdownEditor