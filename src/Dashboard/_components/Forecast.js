import { React, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getForecast } from '../_actions/DashboardActions';
import ForecastItem from './ForecastItem';
import styled from 'styled-components'
import _ from 'lodash';
import { Divider } from 'antd';
import moment from 'moment';
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

    const forecastToUse = []
    const result = []
    const groupedByDay = _.groupBy(forecast?.list, forecast => moment.unix(forecast.dt).date())

    Object.values(groupedByDay).forEach(dayForecast => {

        const timeGroup = {}

        dayForecast.forEach(item => {

            const time = moment.unix(item.dt).hour()
    

            if (time >= 0 && time <= 10) {
                if (timeGroup["morning"]) {
                    timeGroup["morning"].push(item)
                } else {
                    timeGroup["morning"] = [item]
                }

            } else if (time > 10 && time < 18) {
                if (timeGroup["day"]) {
                    timeGroup["day"].push(item)
                } else {
                    timeGroup["day"] = [item]
                }
            } else {
                if (timeGroup["night"]) {
                    timeGroup["night"].push(item)
                } else {
                    timeGroup["night"] = [item]
                }
            }
        })

        result.push(timeGroup)
    })

    result.forEach(day => {
        if (day["morning"]) {
            forecastToUse.push(
                {
                    min: Math.min(...day["morning"].map(item => item.main.temp_min)),
                    max: Math.max(...day["morning"].map(item => item.main.temp_max)),
                    icon: day["morning"][0].weather[0].icon,
                    description: day["morning"][0].weather[0].main,
                    dt: day["morning"][0].dt,
                    time: moment.unix(day["morning"][0].dt).format('MMMM Do YYYY, h:mm:ss a'),
                    timeDescriptor: "Morning"
                }
            )
        }
        if (day["day"]) {
            forecastToUse.push(
                {
                    min: Math.min(...day["day"].map(item => item.main.temp_min)),
                    max: Math.max(...day["day"].map(item => item.main.temp_max)),
                    icon: day["day"][0].weather[0].icon,
                    description: day["day"][0].weather[0].main,
                    dt: day["day"][0].dt,
                    time: moment.unix(day["day"][0].dt).format('MMMM Do YYYY, h:mm:ss a'),
                    timeDescriptor: "Day"
                }
            )
        }
        if (day["night"]) {
            forecastToUse.push(
                {
                    min: Math.min(...day["night"].map(item => item.main.temp_min)),
                    max: Math.max(...day["night"].map(item => item.main.temp_max)),
                    icon: day["night"][0].weather[0].icon,
                    description: day["night"][0].weather[0].main,
                    dt: day["night"][0].dt,
                    time: moment.unix(day["night"][0].dt).format('MMMM Do YYYY, h:mm:ss a'),
                    timeDescriptor: "Night"
                }
            )
        }
    })

    forecastToUse.sort(function (a, b) {
        return a.dt - b.dt
    })

    return <Container>
        {
            forecastToUse.map(forecast =>
                <Split key={forecast.dt}>
                    <ForecastItem forecast={forecast} key={forecast.dt} />
                    <Divider type='vertical' style={{ height: "75px" }} />
                </Split>
            )
        }
    </Container>
}

export default Forecast;