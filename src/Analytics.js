import { logEvent, setCurrentScreen } from '@firebase/analytics';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import { analytics } from './firebase';

const Analytics = () => {

    const history = useHistory();

    const logCurrentPage = () => {
        setCurrentScreen(analytics, window.location.pathname)
        logEvent(analytics, 'screen_view')
    };
    
    useEffect(() => {
        logCurrentPage(); // log the first page visit
        history.listen(() => {
            logCurrentPage();
        });
    }, [history]);
    return (<></>);
};

export default Analytics