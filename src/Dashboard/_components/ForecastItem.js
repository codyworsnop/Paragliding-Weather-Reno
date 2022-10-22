import { Stack } from '@bedrock-layout/stack';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledStack = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;

    p {
        margin: 0px;
    }
`;

const ForecastItem = ({ forecast }) => {

    console.log(forecast.main.dt_txt)
    return <StyledStack>
        <p>{forecast.dt_txt}</p>
        <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} style={{ width: "50px"}} />
        <p>{forecast.weather[0].main}</p>
    </StyledStack>
};

ForecastItem.propTypes = {
    forecast: PropTypes.object,
};

export default ForecastItem;    