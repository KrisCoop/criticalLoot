import React from 'react';

import dice1 from './../../Assets/dice1.png'
import {link, withRouter} from 'react-router-dom'
import './Home.css'

const Home = () => {
    return(
        <div className='HomeMain'>
            <div className='Home Intro'> 
                <h1>Loot the Room!</h1>
            </div>

            <div className='Home Options'>
                <Link to='/BadRoll'>
                    <div className='Home Buttons'>
                        <img src={dice1}/>
                        <p>Bad Roll</p>
                    </div>
                </Link>
                
                <Link to='/GoodRoll'>
                    <div className='Home Buttons'>
                        <img src={dice1}/>
                        <p>Good Roll</p>
                    </div>
                </Link>
                
                <Link to='/DIY'>
                    <div className='Home Buttons'>
                        <img src={dice1}/>
                        <p>Make Your Own Loot</p>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default withRouter(Home);