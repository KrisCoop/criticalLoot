import React, {useState} from 'react';

import Navbar from './../Navbar/Navbar';
import './GoodRoll.css'

const GoodRoll = () => {

    let [imageSource, updateImageSource] = useState('https://st2.depositphotos.com/1724125/6601/v/950/depositphotos_66010155-stock-illustration-treasure-chest.jpg')
    let [itemName, updateItemName] = useState('Sword of Ludicrous Godly Sharpness')
    let [description, updateDescription] = useState('This sword is so sharp, it cuts through reality, time and dimension. You reach a higher plane of understanding, no longer desiring to fight or adventure for loot, and exit the game peacefully as an exalted being.')

    const buttonClick = () => {
        console.log('you clicked me!')
    }

    return(
        <div className="GoodRollMain">
            <Navbar/>
            <div className="GoodLoot">
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

export default GoodRoll;