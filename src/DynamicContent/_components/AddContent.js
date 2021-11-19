import React from 'react'
import ReactMarkdown from 'react-markdown';
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';

const AddContent = () => {
    return (
        <>
        <MdEditor style={{ height: '100%', width: '100%' }} renderHTML={text => <ReactMarkdown>{text}</ReactMarkdown>} />
        </>
    );
};

export default AddContent