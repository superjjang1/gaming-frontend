import React from 'react'
import CommunityCard from './communityCards';
import {Link} from 'react-router-dom';

function Communities(props) {
    const baseCards = props.communities.map((communities, i)=>{
        console.log(communities);
        return (
            <div key={i} className="col s6">
            <Link to={`/community/${communities.id}`}>
                <CommunityCard community={communities}/>
            </Link>
            </div>
        )
    })
    console.log(props.communities);
    return baseCards
}

export default Communities;
