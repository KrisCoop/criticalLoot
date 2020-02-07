import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Home/Home'
import BadRoll from './Components/BadRoll/BadRoll'
import GoodRoll from './Components/GoodRoll/GoodRoll'
import DIY from './Components/DIY/DIY'

export default (
    <Switch>
        <Route component={BadRoll} path='/BadRoll'/>
        <Route component={GoodRoll} path='/GoodRoll'/>
        <Route component={DIY} path='/DIY'/>
        <Route component={Home} path='/'/>
    </Switch>
)