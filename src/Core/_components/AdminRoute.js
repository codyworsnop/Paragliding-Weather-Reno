import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { Redirect, Route, useLocation } from 'react-router';
import { Spin } from 'antd';

const Centered = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const AdminRoute = (props) => {
    const location = useLocation();
    const [bypassRole, setBypassRule] = useState(true)
    const { user, role, loading } = useSelector(({ authReducer }) => ({
        user: authReducer.user,
        role: authReducer.role
    }))

    useEffect(() => {

        // This is just a hack. There's a race condition between the page loading and the auth claims loading. If they haven't loaded within
        // two seconds then we'll just assume they'll never load. Routing between normal page navigation works fine so probably don't need to address this.
        const timer = setTimeout(() => {
            setBypassRule(false)
        }, 5000)
    }, [])

    if (!role && bypassRole) {
        return <Centered><Spin /></Centered>
    }

    return role?.admin ? (
        <Route {...props} />) : (
        <Redirect to={{ pathname: '/', state: { from: location } }} />
    )
}

export default AdminRoute