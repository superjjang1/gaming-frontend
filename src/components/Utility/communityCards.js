import React, {Component} from 'react';
import './communityCard.css';


class CommunityCard extends Component {
    render() {
        const { name , type , description, displayname } = this.props.community
        console.log(this.props.community.displayname)
        return(
            <div className="container-fluid">
                <div className = "row">
                    <div className="col s6">
                        <div className="card-panel blue-grey white-text z-depth-2">
                            <div className ="name-community card-title">Name: {name}</div>
                            <hr/>
                            <div className="type-community">Type: {type}</div>
                            <hr/>
                            <div className="description-community">Description: {description}</div>
                            <hr/>
                            <div className="description-community">Creator: {displayname}</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommunityCard;