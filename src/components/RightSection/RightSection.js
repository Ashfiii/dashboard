import { Avatar } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import React from 'react';
import './RightSection.css';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import userphoto from "../../images/avatar.jpg";
import userphoto1 from "../../images/avatar1.png";
import userphoto2 from "../../images/avatar2.jpg";

const RightSection = () => {
    return (
        <div className="rightsection">
            <div className="rightsection__header">
                <h1>Motivation</h1>
                <div className="rightsection__avataargroup">
                    <AvatarGroup max={3} className="avataargroup">
                        <Avatar alt="Ashfaque Alam" src={userphoto} />
                        <Avatar alt="Ashfi" src={userphoto1} />
                        <Avatar alt="Ashfaque" src={userphoto2} />
                    </AvatarGroup>
                    <AddCircleOutlineOutlinedIcon />
                </div>
            </div>
            <div className="rightsection__navbar">
                <p>All</p>
                <p>Articles</p>
                <p>Podcast</p>
                <p>Video</p>
                <button className="rightsection__innerbutton">Downloads</button>
            </div>
            <div className="rightsection__posts">
                <div className="rightsection__leftpost">
                    <div className="rightsection__leftpostone">
                        <h2>Your<br />limitation<br />it's only<br />your<br />imagination</h2>
                        <PlayArrowIcon />
                    </div>
                    <div className="rightsection__leftposttwo">
                    </div>
                </div>
    
                <div className="rightsection__rightpost">
                    <div className="rightsection__toprightpost">
                        <div className="rightsection__postone">
                            <h2>Great things<br />never come<br />from comfort zones</h2>
                            <PlayArrowIcon />
                        </div>
                        <div className="rightsection__posttwo">
                            <h1>Dream it.<br />Wish it.<br />Do it.</h1>
                        </div>
                    </div>
                    <div className="rightsection__postthree">
                        <h1>Stay<br />focussed</h1>
                    </div>
                    <div className="rightsection__postfour">
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default RightSection
