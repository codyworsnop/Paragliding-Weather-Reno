import { React, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getForecast } from '../_actions/DashboardActions';
import ForecastItem from './ForecastItem';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    overflow: auto;
`;


const Forecast = () => {
    const dispatch = useDispatch();
    const { forecast } = useSelector(({ dashboardReducer }) => ({
        forecast: dashboardReducer.forecast,
    }))

    useEffect(() => {
        dispatch(getForecast())
    }, [dispatch]);


    return <Container>
        {
            forecast?.list.map(forecast =>
                <ForecastItem forecast={forecast} />
            )
        }
    </Container>
}

export default Forecast;