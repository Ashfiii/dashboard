import { Avatar } from '@material-ui/core';
import React from 'react';
import './LeftSection.css';
import TelegramIcon from '@material-ui/icons/Telegram';
import userphoto from "../../images/avatar.jpg";
import { Link } from 'react-router-dom';

const LeftSection = () => {
    
    return (
        <div className="leftsection">
            <div className="leftsection__avatargroup">
                <Avatar src={userphoto} className="leftsection__avatar" alt="Ashfaque Alam"></Avatar>
                <Link to='/'>
                    <div className="leftsection__namedetails">
                        <h3>Ashfaque Alam</h3>
                        <p>alam192@gmail.com</p>
                    </div>
                </Link>
            </div>
            <div className="leftsection__verticalnav">
                <p>Motivation</p>
                <div className="leftsection__navgroup">
                    <p>Productivity</p>
                    <button className="leftsection__button">Home</button>
                </div>
                <p>Design</p>
                <p>Study</p>
            </div>
            <div className="leftsection__block">
                <TelegramIcon />
                <div className="leftsection__innerblock">
                    <p>Pro account is powerful.</p>
                    <p>Buy now</p>
                    <button className="leftsection__innerbutton">Buy Now</button>
                </div>
            </div>
            <h2>Logout</h2>
        </div>
    )
}

export default LeftSection
