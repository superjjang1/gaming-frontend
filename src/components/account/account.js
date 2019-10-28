import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './account.css';
// import { truncateSync } from 'fs';
import Communities from '../Utility/Communities';

class Account extends Component {
    state ={
        test : true,
        communiteas: []
    }
    componentDidMount(){
        const communitea = axios.get(`${window.apiHost}/my-account`);
        communitea.then((resp)=>{
            let communiteas = resp.data;
            console.log(communiteas);
            this.setState({communiteas})
        })
        console.log(this.state.communiteas)
    }
    
    render() { 
        // console.log(this.props);
        const {displayname, imageUrl, bannerUrl, profile} = this.props.auth;
        // console.log(bannerUrl);
        const bannerImage = `${window.apiHost}${bannerUrl}`;
        const profileImage = `${window.apiHost}${imageUrl}`;
        const defaultImage = `https://i.imgur.com/C2Cu4b0.jpg`;
        // console.log(bannerImage);
        

        return (<>
            <div className="container-fluid">
            <div className="topContainer">
                    <div className="cover_image">
                        {bannerUrl
                        ?
                    <img src={bannerImage} alt="nopic"/>
                        :
                    <img src={defaultImage} alt="default"/>
                        }
                    {/* <div className="uploader" > */}


                        {/* <input id="banner-image" type="file" ref="fileUploader1" accept="image/*" style={{display:"none"}} onChange={this.changeBannerUrl}/> */}
                        {/* <Button onClick={this.onButtonClick2} variant="contained" component="span" className="btn right"  >Upload</Button> */}
                        {/* <p onClick={this.onButtonClick2}>submit banner</p> */}
                    {/* </div> */}
                    </div>
                    <div className="profileContainer row">
                        <div className="col s3">
                                <div className="profileuploader">
                                    {imageUrl
                            ?
                            <img src={profileImage} alt="nopic" className="circle left"/>
                            :
                            <img src={defaultImage} alt ="default" className = "circle left"/>
                        }
                        <div className="profileName left">{displayname}</div>
                                {/* <input id="profile-image" type="file" ref="fileUploader" accept="image/*" style={{display:"none"}} onChange={this.changeProfileUrl}/> */}
                        {/* <Button onClick={this.onButtonClick} variant="contained" component="span" className="btner right">+</Button> */}
                        {/* <p onClick={this.onButtonClick}>submit profile</p> */}
                                </div>
                        </div>
                        <div className="col s9 left">
                            <div className="description">
                                
                                    {profile}
                                    
                                
                            </div>
                        </div>
                    </div>
                </div>
            <Link to="/my-account/edit"> Update your profile </Link>
            <br/>
            {/* <Communities communities ={this.state.communiteas}/> */}

            </div>
            
        </>);
    }
}
function mapStateToProps(state){
    return {
        auth: state.auth
    }
}
 
export default connect(mapStateToProps,null)(Account);

