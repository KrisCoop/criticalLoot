import React from 'react';

const Home = () => {
    return(
        <div className='HomeMain'>
            <div className='Home Intro'> 
                <h1>Loot the Room!</h1>
            </div>

            <div className='Home Options'>
                <div className='Home Buttons'>
                    <img />
                    <p>Bad Roll</p>
                </div>
                <div className='Home Buttons'>
                    <img />
                    <p>Good Roll</p>
                </div>
                <div className='Home Buttons'>
                    <img />
                    <p>Make Your Own Loot</p>
                </div>
            </div>
        </div>
    )
}

export default Home;