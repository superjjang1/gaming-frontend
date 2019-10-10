import React from 'react'
import CommunityCard from './communityCards';

function Communities(props) {
    const baseCards = props.communities.map((communities, i)=>{
        return (
            <div key={i} className="col s3">
                <CommunityCard community={communities}/>
            </div>
        )
    })
    return baseCards
}

export default Communities;
