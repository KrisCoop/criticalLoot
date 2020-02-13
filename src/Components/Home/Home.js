import React from 'react';

import dice1 from './../../Assets/dice1.png'
import {Link, withRouter} from 'react-router-dom'
import './Home.css'

const Home = () => {
    return(
        <div className='HomeMain'>
            <div className='Home Intro'> 
                <h1>Loot the Room!</h1>
            </div>

            <div className='Home Options'>
                <Link to='/BadRoll'>
                    <div className='HomeButtons'>
                        <img src={dice1}/>
                        <h1>Bad Roll</h1>
                    </div>
                </Link>
                
                <Link to='/GoodRoll'>
                    <div className='HomeButtons'>
                        <img src={dice1}/>
                        <h1>Good Roll</h1>
                    </div>
                </Link>
                
                <Link to='/DIY'>
                    <div className='HomeButtons'>
                        <img src={dice1}/>
                        <h1>Make Your Own Loot</h1>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default withRouter(Home);