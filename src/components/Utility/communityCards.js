import React, {Component} from 'react';
import './communityCard.css';


class CommunityCard extends Component {
    render() {
        const { name , type , description } = this.props.community
        console.log(this.props.community.uid)
        return(
            <div className="container-fluid">
                <div className = "row">
                    <div className="base-card col s6">
                        <div className="card-panel black-text">
                            <div className ="name-community card-title">name: {name}</div>
                            <div className="type-community">type: {type}</div>
                            <div className="description-community">description: {description}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommunityCard;