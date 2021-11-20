import React from 'react'
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const StyledContainer = styled.div`
    margin: 50px;
`;

const DynamicContentContainer = ({ content }) => {
    return ( 
        <StyledContainer>
            <ReactMarkdown>
                {content}
            </ReactMarkdown>
        </StyledContainer>
    )
}

export default DynamicContentContainer