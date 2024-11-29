import React from 'react'
import { Layout } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import Navbar from './Navbar/_components/Navbar';
import Windy from './Windy/_components/Windy'
import Rasp from './Rasp/_components/Rasp';
import Dashboard from './Dashboard/_components/Dashboard'
import configureStore from './store';
import WindObservations from './WindObservations/_components/WindObservations';
import Analytics from './Core/_components/Analytics';
import Authentication from './Core/_components/Authentication';
import ManageContent from './DynamicContent/_components/ManageContent';
import AddContent from './DynamicContent/_components/AddContent';
import AdminRoute from './Core/_components/AdminRoute';
import DynamicRoutes from './Core/_components/DynamicRoutes';
import Webcams from './Webcams/_components/Webcams';
import SiteHallelujah from './sites/SiteHallelujah';
import AppFooter from './AppFooter';

const { Content } = Layout;

const App = () => {
    const store = configureStore()

    return (
        <Provider store={store}>
            <Router>
                <Analytics/>
                <Authentication />
                <Layout style={{ minHeight: '100vh' }}>
                    <Navbar />
                    <Layout className="site-layout">
                        <Content>
                            <Switch>
                                <Route exact path="/" component={Dashboard} />
                                <Route exact path="/windy" component={Windy} />
                                <Route exact path="/rasp" component={Rasp} />
                                <Route exact path="/windObservations" component={WindObservations} />
                                <Route exact path="/webcams" component={Webcams} />
                                <Route exact path="/sites/hallelujah" component={SiteHallelujah} />
                                <AdminRoute exact path="/manage" component={ManageContent} />
                                <AdminRoute exact path="/add" component={AddContent} />
                                <DynamicRoutes />
                            </Switch>
                        </Content>
                        <AppFooter />
                    </Layout>
                </Layout>
            </Router>
        </Provider>
    )
}

export default App