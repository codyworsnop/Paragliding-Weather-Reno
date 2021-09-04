import React from 'react'
import { Layout } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbar from './Navbar';
import Windy from './Windy'
import Dashboard from './Dashboard'

const { Content, Footer } = Layout;

const App = () => {
    return (
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
    )
}

export default App