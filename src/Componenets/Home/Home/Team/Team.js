import React from 'react';
import './team.css';

const Team = ({team}) => {
    const {name , img} = team;
    return (
        
        <div className="team">
            <img className="img-fluid" src={img} alt="" />
            <h2 className="p-3">{name}</h2>
        </div>
    );
};

export default Team;