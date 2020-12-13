import React from 'react';
import './Pad.css'

// import sound
import sound1 from './1.wav';
import sound2 from './2.wav';
import sound3 from './3.wav';
import sound4 from './4.wav';
import sound5 from './5.wav';
import sound6 from './6.wav';
import sound7 from './7.mp3';
import sound8 from './8.wav';
import sound9 from './9.wav';
import sound10 from './10.wav';
import sound11 from './11.mp3';
import sound12 from './12.wav';
import sound13 from './13.wav';
import sound14 from './14.wav';
import sound15 from './16.wav';
import sound16 from './ravan.mp3';

// use React map method !
const sound = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13, sound14, sound15, sound16];

const audio = sound;

function Pad() {
    return (
        <div className="container">
            <div className="box">
                {audio.map((item, index,) => {
                    return <div onClick={() => {
                        const audio = new Audio(item);
                        audio.play();
                    }} className='item'>{index + 1}</div>
                })}
            </div>
        </div>
    )
}
export default Pad;