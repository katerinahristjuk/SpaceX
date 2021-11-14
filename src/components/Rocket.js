import React from 'react';
import './rocket.css'

export function Rocket(props) {

    return (
        <div id='rocket' onClick={() => { props.closeSelection() }}>
            <h2>{props.name}</h2>
            <h4><span>Mission</span> </h4>
            <h4><span>Country origin:</span> {props.rocketCountry} </h4>
            <h2><span>Rocket:</span> {props.rocketName} </h2>
            <p><span>{props.rocketDescription}</span></p>
        </div>
    )
}