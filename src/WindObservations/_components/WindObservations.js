import React from 'react'
import styled from 'styled-components'

const StyledWindObservations = styled.iframe`
    width: 100%; 
    height: 100%;
    border: none;
`;

const WindObservations = () => (
    <StyledWindObservations src="https://www.wrh.noaa.gov/map/?&zoom=5&scroll_zoom=false&center=40,-97&boundaries=false,false,false,false,false,false,false,false,false&tab=observation&hazard=true&hazard_type=all&hazard_opacity=70&obs=true&obs_type=weather&elements=temp,wind,gust&temp_filter=-80,130&gust_filter=0,150&rh_filter=0,100&elev_filter=-300,14000&precip_filter=0.01,18&obs_popup=true&obs_density=60&obs_provider=ALL" />
)
export default WindObservations

