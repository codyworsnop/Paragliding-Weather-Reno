import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import DashboardItem from './DashboardItem'
import { GetSoundingsDateLink } from '../../SoundingsUtil';

const Container = styled(Row)`
    padding: 20px;
`;

const FitImage = styled.img`
    max-width:100%;
    height: auto;
`;

const Dashboard = () => {

    return (
        <Container gutter={[16, 16]}>
            <Col xs={24} sm={12}>
                <DashboardItem
                    dynamic={true}
                    dynamicConfig={{
                        reducerKey: "area-forecast",
                        link: "https://forecast.weather.gov/product.php?site=REV&issuedby=REV&product=AFD&format=CI&version=1&glossary=1",
                        tag: "pre"
                    }}
                    link="https://forecast.weather.gov/product.php?site=REV&issuedby=REV&product=AFD&format=CI&version=1&glossary=1"
                    title="Area Forecast Discussion" />
            </Col>

            <Col xs={24} sm={12}>
                <DashboardItem
                    dynamic={true}
                    title="Soaring Guidance"
                    dynamicConfig={{
                        reducerKey: "soaring-guidance",
                        link: "https://www.wrh.noaa.gov/total_forecast/getprod.php?wfo=rev&sid=rev&pil=srg",
                        tag: "pre"
                    }}
                    link="https://www.wrh.noaa.gov/total_forecast/getprod.php?wfo=rev&sid=rev&pil=srg" />
            </Col>

            <Col xs={24} sm={12}>
                <DashboardItem title="Slide Peak" link="https://www.wrh.noaa.gov/rev/remotedata/" content={<FitImage src="https://www.wrh.noaa.gov/images/rev/remote/slideW.png" alt="" />} />
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem title="Peavine Peak" link="https://www.wrh.noaa.gov/rev/remotedata/" content={<FitImage src="https://www.wrh.noaa.gov/images/rev/remote/pvpn2W.png" alt="" />} />
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem title="Virginia Peak" link="https://www.wrh.noaa.gov/rev/remotedata/" content={<FitImage src="https://www.wrh.noaa.gov/images/rev/remote/rgxW.png" alt="" />} />
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem title="DRI Slide Wind" link="https://wrcc.dri.edu/weather/slide.html" content={<FitImage src="https://wrcc.dri.edu/cgi-bin/g2sage.pl?slid" alt="" />} />
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem title="DRI Slide Temp" link="https://wrcc.dri.edu/weather/slide.html" content={<FitImage src="https://wrcc.dri.edu/cgi-bin/g1sage.pl?slid+0" alt="" />} />
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem
                    title="Soundings"
                    link="https://www.spc.noaa.gov/exper/soundings/"
                    content={<>
                    <FitImage src={GetSoundingsDateLink()} alt=""/>
                    <br></br>
                    <p style={{ fontSize: '1.5em' }}>See additional <a href="https://rucsoundings.noaa.gov/">Interactive RUC Soundings here</a></p>
                    </>}/>
            </Col>
            {/* https://www.wrh.noaa.gov/images/rev/remote/pvpn2T.png */}
            {/* <Col xs={24} sm={12}>
                <DashboardItem
                    title="More Soundings"
                    link="https://www.spc.noaa.gov/exper/soundings/"
                    content="Currently not available. Please use more link." />
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem
                    title="Wunderground"
                    link="https://www.wunderground.com/weather/us/nv/reno/KNVRENO457?utm_source=HomeCard&utm_content=Button&cm_ven=HomeCardButton"
                    content="Currently not available. Please use more link." />
            </Col> */}
            {/* <Col xs={24} sm={12}>
                <DashboardItem
                    title="Spooner Summit Conditions"
                    link="https://www.wrh.noaa.gov/mesowest/timeseries.php?sid=SPRNV&num=72&banner=NONE"
                    content="Currently not available. Please use more link." />
            </Col> */}
        </Container>
    )
}

export default Dashboard