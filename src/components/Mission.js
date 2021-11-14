import React from 'react';
import moment from 'moment';
import './mission.css';

export function Mission(props) {
    return (
        <div id='mission' onClick={() => {
            props.selectMission({
                name: props.name,
                rocketName: props.rocketName,
                rocketCountry: props.rocketCountry,
                rocketDescription: props.rocketDescription
            })
        }}>
            <img width='50%' src={props.image} alt='(N/A from API)' />
            <h3>{props.name}   </h3>
            <h4><span>Launched on:</span> {moment(new Date(props.date)).format("DD-MM-YYYY HH:mm")}</h4>
            <p><span>{props.longName}</span></p>
        </div>
    )
}