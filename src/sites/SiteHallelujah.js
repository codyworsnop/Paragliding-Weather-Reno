import React from 'react'
import styled from 'styled-components'

const StyledSite = styled.iframe`
    width: 100%; 
    height: 100%;
    border: none;
`;

const SiteHallelujah = () => {  
  return (
    <StyledSite src="https://www.ecowitt.net/home/share?authorize=J63MEW&device_id=cHN5NEpQcFBFZnVGNG8yVm9tWkpGQT09" />
   )
}

export default SiteHallelujah;