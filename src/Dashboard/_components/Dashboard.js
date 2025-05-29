import { React, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Row, Col } from 'antd'
import styled from 'styled-components'
import DashboardItem from './DashboardItem'
import { GetSoundingsDateLink } from '../../SoundingsUtil';
import Chart from './Chart'
import Forecast from './Forecast';
import { getProduct, getProducts } from "../_actions/DashboardActions";
import { getScraperData } from '../_actions/DashboardActions'

const Container = styled(Row)`
    padding: 20px;
`;

const FitImage = styled.img`
    max-width:100%;
    height: auto;
`;

const fetchScraperData = (link, key, tag) => 
    getScraperData(link, key, tag)

const Dashboard = () => {

    const dispatch = useDispatch();
    const { products, product } = useSelector(({ dashboardReducer }) => ({
        products: dashboardReducer.products,
        product: dashboardReducer.product
    }), shallowEqual)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

    useEffect(() => {
        if (products) { 
            const productId = products.sort((a, b) => a.issuanceTime - b.issuanceTime)[0].id
            if (productId) {
                dispatch(getProduct(productId))
            }
        }
    }, [dispatch, products])
    
    return (
        <Container gutter={[16, 16]}>
            <Col xs={24} sm={24}>
                <DashboardItem
                    title="Forecast"
                    link="https://forecast.weather.gov/MapClick.php?lat=39.5296329&lon=-119.8138027&site=all&smap=1&searchresult=Reno%2C%20NV%2C%20USA#.Y0nNhxZlAWM"
                    content={<Forecast /> } />
            </Col>
            
            <Col xs={24} sm={12}>
                <DashboardItem
                    dynamic={true}
                    dynamicConfig={{
                        reducerKey: "area-forecast",
                        fetch: fetchScraperData,
                        link: "https://forecast.weather.gov/product.php?site=REV&issuedby=REV&product=AFD&format=CI&version=1&glossary=1",
                        tag: "pre"
                    }}
                    link="https://forecast.weather.gov/product.php?site=REV&issuedby=REV&product=AFD&format=CI&version=1&glossary=1"
                    title="Area Forecast Discussion" />
            </Col>

            <Col xs={24} sm={12}>
                <DashboardItem
                    title="Soaring Guidance"
                    link="https://www.weather.gov/wrh/TextProduct?product=srgrev"
                    content={product?.productText} />
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
                    content={<FitImage src={GetSoundingsDateLink()} alt=""/>}
                    extraContent={
                    <>
                        <br></br>
                        <p style={{ fontSize: '1.5em' }}>See additional <a rel="noreferrer" target={"_blank"} href="https://rucsoundings.noaa.gov/">Interactive RUC Soundings here</a></p>
                    </>
                    }/>
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem
                    title="Basic Soundings"
                    link="https://topaflyers.com/weather/soundings"
                    content={<FitImage src="https://topaflyers.com/weather/soundings/rev.png"/>}/>
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem
                    title="Barometric Pressure"
                    disableLink
                    content={<Chart />}/>
            </Col>
            <Col xs={24} sm={12}>
                <DashboardItem
                    title="Hourly Graphical Forecast"
                    link="https://forecast.weather.gov/MapClick.php?lat=39.5296&lon=-119.8138&unit=0&lg=english&FcstType=graphical"
                    content={<FitImage src="https://forecast.weather.gov/meteograms/Plotter.php?lat=39.5296&lon=-119.8138&wfo=REV&zcode=NVZ003&gset=18&gdiff=8&unit=0&tinfo=PY8&ahour=0&pcmd=11011111111110100000000000000000000000000000000000000000000&lg=en&indu=1!1!1!&dd=&bw=&hrspan=48&pqpfhr=6&psnwhr=6"/>}/>
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
