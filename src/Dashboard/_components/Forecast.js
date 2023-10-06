import { React, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getForecast } from '../_actions/DashboardActions';
import ForecastItem from './ForecastItem';
import styled from 'styled-components'
import { Split } from '@bedrock-layout/split';

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
            forecast && forecast.properties.periods.map(forecast =>
                <Split key={forecast.dt}>
                    <ForecastItem forecast={forecast} key={forecast.dt} />
                </Split>
            )
        }
    </Container>
}

export default Forecast;