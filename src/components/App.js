import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { SpacexMissions } from './SpacexMissions';
import { Rocket } from './Rocket';
import './app.css'

export function App() {

    return (
        <div id="app">
            <h2><Link className='link' to='/'>SpaceX Missions</Link></h2>

            <Switch>
                <Route path='/' component={SpacexMissions}></Route>
                <Route path='/:id' component={Rocket}></Route>
            </Switch>
        </div >
    )
}