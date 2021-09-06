import React from 'react'
import styled from 'styled-components'

const StyledWindy = styled.iframe`
    width: 100%; 
    height: 100%;
    border: none;
`;
const Windy = () => {
    return (

        <StyledWindy src="https://embed.windy.com/embed2.html?lat=39.259&amp;lon=-119.858&amp;detailLat=25.493&amp;detailLon=-90.945&amp;width=650&amp;height=450&amp;zoom=9&amp;level=surface&amp;overlay=wind&amp;product=ecmwf&amp;menu=&amp;message=true&amp;marker=true&amp;calendar=now&amp;pressure=&amp;type=map&amp;location=coordinates&amp;detail=&amp;metricWind=mph&amp;metricTemp=%C2%B0F&amp;radarRange=-1" />
    )
}

export default Windy