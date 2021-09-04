import React from 'react'
import { Card } from 'antd'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledCard = styled(Card)`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
`;
const DashboardItem = ({title, link, content}) => {
    return (
        <StyledCard title={title} extra={<a href={link}>More</a>}>
            {content}
        </StyledCard>
    )
}

DashboardItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired
};

export default DashboardItem