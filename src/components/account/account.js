import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Account extends Component {
    render() { 
        console.log(this.props);
        const {displayname, imageUrl, bannerUrl, profile} = this.props.auth;
        const bannerImage = `${window.apiHost}${bannerUrl}`;
        

        return (<>
            <div className="container-fluid">
            <div className="topContainer">
                    <div className="cover_image">
                    <img src={bannerImage} alt="banner"/>
                    {/* <div className="uploader" > */}
                        {/* <input id="banner-image" type="file" ref="fileUploader1" accept="image/*" style={{display:"none"}} onChange={this.changeBannerUrl}/> */}
                        {/* <Button onClick={this.onButtonClick2} variant="contained" component="span" className="btn right"  >Upload</Button> */}
                        {/* <p onClick={this.onButtonClick2}>submit banner</p> */}
                    {/* </div> */}
                    </div>
                    <div className="profileContainer row">
                        <div className="col s3">
                                <div className="profileuploader">
                            <img src="https://secure.gravatar.com/avatar/e711f05f912d97a74f5860381c6f57ef?r=r&s=256&d=https://s3.amazonaws.com/challonge_app/misc/challonge_fireball_gray.png" alt="profile" className="circle left"/>
                            <div className="profileName left">{displayname}</div>
                                {/* <input id="profile-image" type="file" ref="fileUploader" accept="image/*" style={{display:"none"}} onChange={this.changeProfileUrl}/> */}
                        {/* <Button onClick={this.onButtonClick} variant="contained" component="span" className="btner right">+</Button> */}
                        {/* <p onClick={this.onButtonClick}>submit profile</p> */}
                                </div>
                        </div>
                        <div className="col s9 left">
                            <div className="description">
                                <div className="input-field col s12">
                                    {/* <textarea id="textarea2" className="materialize-textarea" data-length="400" onChange={this.changeDescription}  value={this.state.profile} ></textarea> */}
                                    {/* <label htmlFor="textarea2">400 Character limit</label> */}
                                    {profile}
                                    {imageUrl}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Link to="/my-account/edit"> something </Link>
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

