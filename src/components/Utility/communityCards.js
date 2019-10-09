import React from 'react';
import './communityCard.css';

function communityCard(props){
    const {name, type, description} = this.props.community
        return (
            <div className="base-card col s12">
                <div className="image">
                    <h1>hahahha</h1>
                </div>
                <div className="city-name">{name}</div>
                <div className="price">{type}</div>
                <div className="city-name">{description}</div>
            </div>
        )
}
export default communityCard;