import React from 'react';
import {Link, withRouter} from 'react-router-dom';


const Navbar = () => {
    <div>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/BadRoll'><li>BadRoll</li></Link>
            <Link to='/GoodRoll'><li>GoodRoll</li></Link>
            <Link to='/DIY'><li>DIY</li></Link>
        </ul>
    </div>
}

export default withRouter(Navbar);