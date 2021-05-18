import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import './NewApplicantInfo.css';

const NewApplicantInfo = ({name, designation}) => {
    return (
        <div className="newapplicantinfo">
            <div className="newapplicantinfo__name">
                <AccountCircleIcon />
                <div className="newapplicantinfo__socialgroupname">
                    <h4>{name}</h4>
                    <p>Applied for <span>{designation}</span></p>
                </div>
            </div>
            <div className="newapplicantinfo__socialicons">
                <EmailIcon />
                <CallIcon />
            </div>
            
        </div>
    )
}

export default NewApplicantInfo
