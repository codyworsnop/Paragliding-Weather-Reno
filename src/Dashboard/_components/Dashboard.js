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
                <DashboardItem 
                dynamic={true}
                reducerKey="area-forecast"
                title="Area Forecast Discussion"
                link="https://forecast.weather.gov/product.php?site=REV&issuedby=REV&product=AFD&format=CI&version=1&glossary=1" />
            </Col>

            <Col xs={24} sm={12}>
                <DashboardItem 
                 dynamic={true}
                 reducerKey="soaring-guidance"
                 title="Soaring Guidance"
                 link="https://www.wrh.noaa.gov/total_forecast/getprod.php?wfo=rev&sid=rev&pil=srg" />
            </Col>

            <Col xs={24} sm={12}>
                <DashboardItem title="Slide weather" link="https://wrcc.dri.edu/weather/slide.html" content={<img src="https://wrcc.dri.edu/cgi-bin/g2sage.pl?slid" alt=""/>}/>
            </Col>
                        <Col xs={24} sm={12}>
                <DashboardItem 
                dynamic={false}
                reducerKey="ruc-soundings"
                 title="Soundings" 
                 link="https://rucsoundings.noaa.gov/" 
                 content="Currently not available. Please use more link."/>
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem 
                title="More Soundings"
                 link="https://www.spc.noaa.gov/exper/soundings/"
                  content="Currently not available. Please use more link."/>
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem 
                title="Wunderground"
                link="https://www.wunderground.com/weather/us/nv/reno/KNVRENO457?utm_source=HomeCard&utm_content=Button&cm_ven=HomeCardButton"
                content="Currently not available. Please use more link."/>
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem
                title="Something or rather"
                link="https://www.wrh.noaa.gov/mesowest/timeseries.php?sid=SPRNV&num=72&banner=NONE"
                content="Currently not available. Please use more link." />
            </Col>

        </Container>
    )
}

export default Dashboard