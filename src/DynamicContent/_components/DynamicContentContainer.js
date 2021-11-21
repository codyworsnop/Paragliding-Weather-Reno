import React from 'react'
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
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

DynamicContentContainer.propTypes = {
    content: PropTypes.string.isRequired,
};

export default DynamicContentContainer