import React from 'react';
import TournamentCard from './TournamentCard';
import {Link} from 'react-router-dom';

function Tournaments(props){
    const baseCards = props.tournaments.map((tournaments,i)=>{
        // console.log(tournaments);
        return(
            <div key = {i} className="col s6">
                <Link to={`/tournaments/${tournaments.id}`}>
                    <TournamentCard tournament={tournaments}/>
                </Link>
            </div>
        )
    })
    return baseCards
}

export default Tournaments;