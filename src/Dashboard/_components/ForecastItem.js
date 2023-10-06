import { Split } from '@bedrock-layout/split';
import { Divider } from 'antd';
import moment from 'moment';
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

    return <StyledStack>
        <p>{forecast.name}</p>
        <img src={forecast.icon} style={{ width: "50px", margin: "auto" }} alt="forecast" />
        <Split fraction='auto-end'>
            <p>{forecast.shortForecast}</p>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Divider type='vertical' />
                {/* <p>{parseInt(forecast.max)}/{parseInt(forecast.min)}F</p> */}
            </div>
        </Split>
    </StyledStack>
};

ForecastItem.propTypes = {
    forecast: PropTypes.object,
};

export default ForecastItem;    