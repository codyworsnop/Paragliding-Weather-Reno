import React, { useEffect } from 'react'
import { Card, Spin } from 'antd'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { getScraperData } from '../_actions/DashboardActions'

const StyledCard = styled(Card)`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
    overflow: auto;
`;

const StyledSpinner = styled(Spin)`
    justify-content: center;
`;

const DashboardItem = ({ title, dynamic, content, link, dynamicConfig }) => {

    const dispatch = useDispatch()
    
    const { loading, data } = useSelector(({ dashboardReducer }) => {
        if (dynamic) {
            return {
                loading: dashboardReducer[dynamicConfig.reducerKey]?.loading,
                data: dashboardReducer[dynamicConfig.reducerKey]?.data
            }
        } else {
            return {
                loading: false,
                data: null
            }
        }
    })

    useEffect(() => {
        if (dynamic) {
            dispatch(getScraperData(dynamicConfig.link, dynamicConfig.reducerKey, dynamicConfig.tag))
        }
    }, [dynamicConfig, dispatch])

    return (
        <StyledCard title={title} extra={<a href={link}>More</a>}>
            <StyledSpinner spinning={dynamic ? loading : false}>
                <pre style={{ fontSize: "0.7vmax"}}>
                    {dynamic ? data : content}
                </pre>
            </StyledSpinner>
        </StyledCard>
    )
}

DashboardItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    content: PropTypes.any,
    dynamicConfig: PropTypes.object
};

DashboardItem.defaultProps = {
    dynamic: false,
    content: "Not available. Please see more.",
    dynamicConfig: null
}

export default DashboardItem