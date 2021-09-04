import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import DashboardItem from './DashboardItem'

const Container = styled(Row)`
    padding: 20px;
`;
const Dashboard = () => {
    return (
        <Container gutter={[16, 16]}>
            <Col xs={24} sm={12}>
                <DashboardItem title="Area Forecast Discussion" link="https://forecast.weather.gov" content="" />
            </Col>

            <Col xs={24} sm={12}>
                <DashboardItem title="Soaring Guidance" link="https://www.wrh.noaa.gov/total_forecast/getprod.php?wfo=rev&sid=rev&pil=srg" content="" />
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem title="RASP" link="https://rasp.nfshost.com/sierra-nevada/" content="" />
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem title="Soundings" link="https://rucsoundings.noaa.gov/" content="" />
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem title="More Soundings" link="https://www.spc.noaa.gov/exper/soundings/" content="" />
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem title="Wind forecast?" link="https://www.wrh.noaa.gov/map/?&zoom=5&scroll_zoom=false&center=40,-97&boundaries=false,false,false,false,false,false,false,false,false&tab=observation&hazard=true&hazard_type=all&hazard_opacity=70&obs=true&obs_type=weather&elements=temp,wind,gust&temp_filter=-80,130&gust_filter=0,150&rh_filter=0,100&elev_filter=-300,14000&precip_filter=0.01,18&obs_popup=true&obs_density=60&obs_provider=ALL" content="" />
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem title="Wunderground" link="https://www.wunderground.com/weather/us/nv/reno/KNVRENO457?utm_source=HomeCard&utm_content=Button&cm_ven=HomeCardButton" content="" />
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem title="Something or rather" link="https://www.wrh.noaa.gov/mesowest/timeseries.php?sid=SPRNV&num=72&banner=NONE" content="" />
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem title="Slide weather" link="https://wrcc.dri.edu/weather/slide.html" content="" />
            </Col>

        </Container>
    )
}

export default Dashboard