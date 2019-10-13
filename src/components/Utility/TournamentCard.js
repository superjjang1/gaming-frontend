import React, {Component} from 'react';


class TournamentCard extends Component {
    render() {
        const { date1, date2, date_added, description, game, name, participants, uid} = this.props.tournament
        console.log(this.props.tournament.date1)
        return(
            <div className="container-fluid">
                <div className = "row">
                    <div className="col s6">
                        <div className="card-panel blue-grey white-text z-depth-2">
                            <div className ="name-community card-title">Name: {name}</div>
                            <hr/>
                            <div className="date1">Start Date: {date1}</div>
                            <hr/>
                            <div className="date-end">End Date: {date2}</div>
                            <hr/>
                            <div className="datecreate">Created: {date_added}</div>
                            <hr/>
                            <div className="game">Game Name: {game}</div>
                            <hr/>
                            <div className="participants">Participants: {participants}</div>
                            <hr/>
                            <div className="description-community">Description: {description}</div>
                            <hr/>
                            <div className="description-community">Creator: {uid}</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TournamentCard;