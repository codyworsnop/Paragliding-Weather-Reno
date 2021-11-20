import { Card, Col, Row } from 'antd';
import React from 'react'
import styled from 'styled-components'
import DashboardItem from '../../Dashboard/_components/DashboardItem';

const Container = styled(Row)`
    padding: 20px;
`;

// todo: fix the issue where width needs to be 100% with height of 400px; 
const Webcam = styled.iframe`
    width: 100%;
    height: 420px;
    border: none;
    overflow: hidden;
`;

const Webcams = () => { 
    return (

        <Container gutter={[16, 16]}>
            <Col xs={24} sm={12}>
                <DashboardItem title="Slide Bowl" link="https://skirose.com/the-mountain-web-cams/" content={
                    <Webcam src={'https://live3.brownrice.com/embed/mtroseslidebowl'} />} />
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem title="Mt Rose Summit" link="https://skirose.com/the-mountain-web-cams/" content={
                    <Webcam src={'https://live3.brownrice.com/embed/mtrosesummit'} />} />
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem title="West Shore Cafe" link="https://www.youtube.com/watch?v=thHgzWlveqs&feature=emb_title" content={
                    <Webcam src={'https://www.youtube.com/embed/thHgzWlveqs'} />} />
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem title="North Tahoe Event Center" link="https://tahoetopia.com/webcam/north-tahoe-event-center-kings-beach" content={<Webcam src={'https://portal.hdontap.com/s/embed/?stream=northtahoepud_ttv-TOPIA'} />} />
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem title="Kings Beach Pier" link="https://tahoetopia.com/webcam/kings-beach-north-tahoe-watersports-cam" content={<Webcam src={'https://portal.hdontap.com/s/embed/?stream=kingsbeach_ttv-TOPIA'} />} />
            </Col>
        </Container>
    )
}

export default Webcams