import React from 'react';
import { Footer } from 'antd/lib/layout/layout';
import { Route, Switch } from 'react-router';

const AppFooter = () => (
  <Switch>
    <Route exact path="/">
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
    </Route>
  </Switch>
)

export default AppFooter;