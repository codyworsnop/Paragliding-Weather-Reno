import React from 'react'
import styled from 'styled-components'

const StyledRasp= styled.iframe`
    width: 100%; 
    height: 100%;
    border: none;
`;

const Rasp = () => (
    <StyledRasp src="https://rasp.nfshost.com/sierra-nevada/" />
)

export default Rasp