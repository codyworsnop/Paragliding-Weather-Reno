import React from 'react'
import { Card, Col, Row } from 'antd';
import styled from 'styled-components'

const Container = styled(Row)`
    padding: 20px;
    height: 100%;
`;

// oof this was hard to figure out
// https://www.w3schools.com/howto/howto_css_aspect_ratio.asp
const Webcam = styled.iframe`

    width: 100%;
    height: 100%;
    position: absolute;
    border: none;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;

const StyledCard = styled(Card)`
    border-radius: 4px;
    box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);

    .ant-card-body {
        padding-top: 56.25%; /* 16:9 aspect ratio */
        position: relative;
        width: 100%;
    }
`;

const Webcams = () => {
    return (
        <Container gutter={[16, 16]}>
            <Col xs={24} sm={12}>
                <StyledCard title="Slide Bowl" extra={<a href={"https://skirose.com/the-mountain-web-cams/"}>More</a>}>
                    <Webcam src={'https://live3.brownrice.com/embed/mtroseslidebowl'} />
                </StyledCard>
            </Col>
            <Col xs={24} sm={12}>
                <StyledCard title="Mt Rose Summit" extra={<a href={"https://skirose.com/the-mountain-web-cams/"}>More</a>}>
                    <Webcam src={'https://live3.brownrice.com/embed/mtrosesummit'} />
                </StyledCard>
            </Col>
            <Col xs={24} sm={12}>
                <StyledCard title="West Shore Cafe" extra={<a href={"https://www.youtube.com/watch?v=thHgzWlveqs&feature=emb_title"}>More</a>}>
                    <Webcam src={'https://www.youtube.com/embed/thHgzWlveqs'} />
                </StyledCard>
            </Col>
            {/* <Col xs={24} sm={12}>
                <StyledCard title="North Tahoe Event Center" extra={<a href={"https://tahoetopia.com/webcam/north-tahoe-event-center-kings-beach"}>More</a>}>
                    <Webcam src={'https://portal.hdontap.com/s/embed/?stream=northtahoepud_ttv-TOPIA'} />
                </StyledCard>
            </Col>
            <Col xs={24} sm={12}>
                <StyledCard title="Kings Beach Pier" extra={<a href={"https://tahoetopia.com/webcam/kings-beach-north-tahoe-watersports-cam"}>More</a>}>
                    <Webcam src={'https://portal.hdontap.com/s/embed/?stream=kingsbeach_ttv-TOPIA'} />
                </StyledCard>
            </Col> */}
        </Container>
    )
}

export default Webcams