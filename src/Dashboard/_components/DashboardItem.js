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

const DashboardItem = ({ title, link, dynamic, reducerKey, content }) => {

    const dispatch = useDispatch()
    const { loading, data } = useSelector(({ dashboardReducer }) => ({
        loading: dashboardReducer[reducerKey]?.loading,
        data: dashboardReducer[reducerKey]?.data
    }))

    useEffect(() => {
        if (dynamic) {
            dispatch(getScraperData(link, reducerKey))
        }
    }, [dynamic, link, reducerKey, dispatch])

    return (
        <StyledCard title={title} extra={<a href={link}>More</a>}>
            <StyledSpinner spinning={dynamic ? loading : false}>
                <pre>
                    {dynamic ? data : content}
                </pre>
            </StyledSpinner>
        </StyledCard>
    )
}

DashboardItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    reducerKey: PropTypes.string.isRequired,
    content: PropTypes.object
};

DashboardItem.defaultProps = {
    dynamic: false,
    content: <></>
}

export default DashboardItem