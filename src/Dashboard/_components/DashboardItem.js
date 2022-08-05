import React, { useEffect, useRef, useState } from 'react'
import { Card, Spin } from 'antd'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';

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

const ContentWrapper = styled.div`
    cursor: pointer;
`;

const DashboardItem = ({ title, dynamic, content, link, dynamicConfig, extraContent, disableLink }) => {
    const dispatch = useDispatch()
    const { loading, data } = useSelector(({ dashboardReducer }) => {
        if (dynamic) {
            return {
                loading: dashboardReducer[dynamicConfig.reducerKey]?.loading,
                data: dashboardReducer[dynamicConfig.reducerKey]?.data
            }
        } else {
            return {
                loading: content ? false : true,
                data: null
            }
        }
    })

    const loadingRef = useRef(loading)
    var [displayableContent, setDisplayableContent] = useState(dynamic ? data : content)

    useEffect(() => {
        setDisplayableContent(dynamic ? data : content)
        loadingRef.current = loading
    }, [data, content, dynamic, loading])

    useEffect(() => {
        setTimeout(() => {
            if (loadingRef.current) {
                setDisplayableContent("Not available. Please see more." )
            }
        }, 10000)
    }, [])

    useEffect(() => {
        if (dynamic) {
            dispatch(dynamicConfig.fetch(dynamicConfig.link, dynamicConfig.reducerKey, dynamicConfig.tag))
        }
    }, [dispatch, dynamicConfig, dynamic])

    const openAsNewPage = () => {
        window.open(link, '_blank').focus();
    }
    
    return (
        <StyledCard title={title} extra={!disableLink && <a href={link}>More</a>}>
            <ContentWrapper onClick={() => { return !disableLink && openAsNewPage}}>
                <StyledSpinner spinning={loading && !displayableContent}>
                    <pre style={{ fontSize: "0.8vmax" }}>
                        {displayableContent}
                    </pre>
                </StyledSpinner>
            </ContentWrapper>
            {extraContent}
        </StyledCard>
    )
}

DashboardItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    content: PropTypes.any,
    dynamicConfig: PropTypes.object,
    disableLink: PropTypes.bool
};

DashboardItem.defaultProps = {
    dynamic: false,
    content: null,
    dynamicConfig: null,
    disableLink: false,
}

export default DashboardItem