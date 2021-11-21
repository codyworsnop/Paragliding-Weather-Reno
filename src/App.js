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
import { Footer } from 'antd/lib/layout/layout';
import AddContent from './DynamicContent/_components/AddContent';
import AdminRoute from './Core/_components/AdminRoute';
import DynamicRoutes from './Core/_components/DynamicRoutes';
import Webcams from './Webcams/_components/Webcams';

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
                                <AdminRoute exact path="/manage" component={ManageContent} />
                                <AdminRoute exact path="/add" component={AddContent} />
                                <DynamicRoutes />
                            </Switch>
                        </Content>
                        <Footer style={{ backgroundColor: '#001528', color: 'white', fontSize: '0.8em' }}>
                        Feedback? Contact <a href="mailto:jworsnop1@gmail.com?subject=ParaglidingWeatherReno.com Feedback">Jeff Worsnop</a>. 
                        <br></br>
                        <br></br>

                        The objective of this website is to provide pilots with weather information about the Reno Tahoe Regional area.
                        The information contained in this website is not maintained by the site, and is not guaranteed to be accurate, timely, or sound.
                        None of the information given here is owned by paraglidingweatherreno.com, as these are merely links to various official sources such as the National Weather Service in Reno.
                        Paragliding is an inherently dangerous sport. Nothing in this site should be construed as encouragement or endorsement of you, the pilot, engaging in the activity of Paragliding.
                        Due to the immense complexity of weather, and atmospheric science in general, I encourage each pilot  to  use their judgment and training to decide whether you are capable of flying in the given or anticipated conditions.
                        The final decision to engage in Paragliding rests entirely with you, the pilot in command.
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        </Provider>
    )
}

export default App