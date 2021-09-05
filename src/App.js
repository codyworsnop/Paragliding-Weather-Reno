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
import Dashboard from './Dashboard/_components/Dashboard'
import configureStore from './store';

const { Content, Footer } = Layout;

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
                                <Route exact path="/windy" component={Windy} />
                                <Route exact path="/" component={Dashboard} />
                            </Switch>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            <p>Cody Worsnop ©2021</p>
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        </Provider>
    )
}

export default App