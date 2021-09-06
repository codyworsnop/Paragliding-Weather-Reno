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

const { Content } = Layout;

const App = () => {
    const store = configureStore()

    return (
        <Provider store={store}>
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Navbar />
                    <Layout className="site-layout">
                        <Content>
                            <Switch>
                                <Route exact path="/" component={Dashboard} />
                                <Route exact path="/windy" component={Windy} />
                                <Route exact path="/rasp" component={Rasp} />
                                <Route exact path="/windObservations" component={WindObservations} />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        </Provider>
    )
}

export default App