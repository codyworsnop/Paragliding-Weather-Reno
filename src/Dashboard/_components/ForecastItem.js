import { Split } from '@bedrock-layout/split';
import { Divider } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledStack = styled.div`
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-content: center;

    p {
        margin: 0px;
    }
`;

const ForecastItem = ({ forecast }) => {

    return <StyledStack style={{ margin: '15px' }}>
        <p>{forecast.name}</p>
        <img src={forecast.icon} style={{ width: "80px", margin: "auto" }} alt="forecast" />
        <Split fraction='auto-end' >
            <p>{forecast.shortForecast}</p>
            <Divider type='horizontal' />
            <div style={{ display: "flex", flexDirection: "row" }}>
                <p>{forecast.temperature} {forecast.temperatureUnit}</p>
                <Divider type='vertical' />
                <p>{forecast.windSpeed}</p>
            </div>
        </Split>
    </StyledStack>
};

ForecastItem.propTypes = {
    forecast: PropTypes.object,
};

export default ForecastItem;    
