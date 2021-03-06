import React from 'react'
import CommunityCard from './communityCards';
import {Link} from 'react-router-dom';
import Slick from './Slick';

function Communities(props) {
    let baseCards = props.communities.map((communities, i)=>{
        return (
            <div key={i} className="col s6">
            <Link to={`/community/${communities.id}`}>
                <CommunityCard community={communities}/>
            </Link>
            </div>
        )
    })
    return (
        <div>
            <Slick elements ={baseCards}/>
        </div>
    )
}

export default Communities;
