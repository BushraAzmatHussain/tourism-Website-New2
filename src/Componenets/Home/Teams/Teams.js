import React, { useEffect, useState } from 'react';
import Team from '../Home/Team/Team';
import './teams.css';

const Teams = () => {
    const [teams, setTeams] = useState([])
    useEffect(()=>{
        fetch('team.json')
        .then(res => res.json())
        .then(data => setTeams(data));
    },[])
    return (
        <div id="teams">
            <h2 className="p-5 m-3 fw-bold">Our Team</h2>
            <div className="team-container">
                
                {
                    teams.map(team =><Team
                    key={team.id}
                    team={team}
                    ></Team>)
                }

            </div>
        </div>
    );
};

export default Teams;