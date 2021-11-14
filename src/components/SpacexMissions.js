import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mission } from './Mission';
import { Rocket } from './Rocket';
import './spacexMissions.css';

export function SpacexMissions() {

    const [missions, setMissions] = useState([]);
    const [selectedMission, setSelectedMission] = useState({ id: "", name: "", rocketName: "", rocketCountry: "", rocketDescription: "" });

    useEffect(() => {
        fetch('https://api.spacex.land/graphql/', {
            method: 'POST',

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: `{
                    launchesPast {
                        mission_name
                        launch_date_local
                        launch_site { 
                            site_name_long
                        }
                        links {
                            mission_patch_small
                        }
                        rocket {
                            rocket {
                                name
                                country
                                description
                            }
                        }
                        id
                    }
                }`
            })
        })
            .then(res => res.json())
            .then(json => setMissions(json.data.launchesPast))
            .then(console.log(missions))
            .catch(err => alert(err))
    }, [])

    function selectMission(mission) {
        setSelectedMission(mission)
    }

    function closeSelection() {
        setSelectedMission({ id: "" })
    }
    return (
        <div id='missions'>
            {selectedMission.id === "" ? null :
                <Rocket
                    id={selectedMission.id}
                    name={selectedMission.name}
                    rocketName={selectedMission.rocketName}
                    rocketCountry={selectedMission.rocketCountry}
                    rocketDescription={selectedMission.rocketDescription}
                    closeSelection={closeSelection}
                />
            }

            {!missions.length > 0 ? <h2>Loading...</h2> :
                <div>
                    {missions.map(mission => {
                        return (
                            <Link className='link' to={`/${mission.id}`}>
                                <Mission key={mission.id}
                                    id={mission.id}
                                    name={mission.mission_name}
                                    image={mission.links.mission_patch_small}
                                    date={mission.launch_date_local}
                                    longName={mission.launch_site.site_name_long}
                                    rocketName={mission.rocket.rocket.name}
                                    rocketCountry={mission.rocket.rocket.country}
                                    rocketDescription={mission.rocket.rocket.description}
                                    selectMission={selectMission}
                                />
                            </Link>
                        )
                    })}
                </div>
            }
        </div>
    )
}