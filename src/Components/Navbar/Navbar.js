import React from 'react';
import {Link, withRouter} from 'react-router-dom';


const Navbar = () => {
    return(

        <div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/BadRoll'>BadRoll</Link></li>
            <li><Link to='/GoodRoll'>GoodRoll</Link></li>
            <li><Link to='/DIY'>DIY</Link></li>
        </ul>
    </div>
    )
}

export default withRouter(Navbar);