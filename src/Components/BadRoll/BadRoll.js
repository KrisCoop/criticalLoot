import React, {useState} from 'react';

import Navbar from './../Navbar/Navbar';
import './BadRoll.css'

const BadRoll = () => {

    let [imageSource, updateImageSource] = useState('https://st2.depositphotos.com/1724125/6601/v/950/depositphotos_66010155-stock-illustration-treasure-chest.jpg')
    let [itemName, updateItemName] = useState('Screaming Lockpick')
    let [description, updateDescription] = useState('Reliably giving thieves heart attacks since the 2nd Age.')

    const buttonClick = () => {
        console.log('you clicked me!')
    }

    return(
        <div className="BadRollMain">
            <Navbar/>
            <div className="BadLoot">
                <img src={imageSource}/>
                <h2>{itemName}</h2>
                <p>{description}</p>
                {/* set the background image as the scroll artwork */}
            </div>
            <div className="ButtonDiv">
                <button onClick={() => buttonClick}>Roll Again!</button>
            </div>
        </div>
    )
}

export default BadRoll;