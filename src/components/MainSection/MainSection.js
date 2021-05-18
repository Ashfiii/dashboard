import React from 'react';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, Button } from '@material-ui/core';
import './MainSection.css'
import InfoBox from './../InfoBox/InfoBox';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import {Line, Doughnut} from 'react-chartjs-2';
import NearMeIcon from '@material-ui/icons/NearMe';
import ReferralInfo from '../ReferralInfo/ReferralInfo';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NewApplicantInfo from '../NewApplicantInfo/NewApplicantInfo';

const MainSection = () => {

    const applications = {
        labels: ['January', 'February', 'March',
                 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: "Applications Received",
            fill: true,
            lineTension: 0.5,
            backgroundColor: '#ad233a',
            borderColor: 'black',
            borderWidth: 2,
            showLine: true,
            pointBorderWidth: 1,
            pointHitRadius: 1,
            pointBackgroundColor: 'white',
            pointBorderColor: 'white',
            data: [30, 35, 20, 45, 50, 28, 48, 65]
          }
        ]
      }

      const BorderLinearProgress = withStyles((theme) => ({
        root: {
          height: 10,
          borderRadius: 5,
        },
        colorPrimary: {
          backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        },
        bar: {
          borderRadius: 5,
          backgroundColor: '#1a90ff',
        },
      }))(LinearProgress);

      const positions = {
        labels: ['Web Developer', 'Manager', 'Senior Manager', 'React.js Developer'],
        datasets: [
          {
            label: 'Positions',
            backgroundColor: [
              '#fcba03',
              '#2FDE00',
              '#00A6B4',
              '#6800B4'
            ],
            hoverBackgroundColor: [
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: [30, 60, 51, 86]
          }
        ]
      }
    return (
        <div className="mainsection">
            <div className="mainsection__left">
            	<div className="mainsection__headertitle">
                    <h1 className="mainsection__title">Dashboard</h1>
                    <h4>Monday, <span className="mainsection__date">17 May 2021</span></h4>
                </div>
                <div className="mainsection__stats">
                    <InfoBox title="Total Applications" count="2390" Icon={CallMadeIcon} percent="-3.4"/>
                    <InfoBox title="Shortlisted Candidates" count="280" Icon={CallMadeIcon} percent="+4.6"/>
                    <InfoBox title="Total Applications" count="2100" Icon={CallReceivedIcon} percent="-5.6"/>
                </div>
                <div className="mainsection__top">
                    <div className="mainsection__linegraph">
                        <Line className="mainsection__line" data={applications}/>
                    </div>
                    <div className="mainsection__applicationcount">
                        <h4>Total Applications</h4>
                        <div className="mainsection__row1">
                            <div className="mainsection__applicationcolumn">
                                <FiberManualRecordIcon />
                                <p>Applications</p>
                            </div>
                            
                            <BorderLinearProgress variant="determinate" value={80} />
                        </div>
                        <div className="mainsection__row2">
                            <div className="mainsection__applicationcolumn">
                                <FiberManualRecordIcon />
                                <p>Shortlisted</p>
                            </div>
                            <BorderLinearProgress variant="determinate" value={60} />
                        </div>
                        <div className="mainsection__row3">
                            <div className="mainsection__applicationcolumn">
                                <FiberManualRecordIcon />
                                <p>Subjected</p>
                            </div>
                            <BorderLinearProgress variant="determinate" value={70} />
                        </div>
                        <div className="mainsection__row4">
                            <div className="mainsection__applicationcolumn">
                                <FiberManualRecordIcon />
                                <p>On hold</p>
                            </div>
                            <BorderLinearProgress variant="determinate" value={60} />
                        </div>
                    </div>
                </div>
                <div className="mainsection__bottom">
                    <div className="mainsection__referrals">
                        <div className="mainsection__referral">
                            <h2>Referrals and Campaign Stats</h2>
                            <div className="mainsection__campaigndetails">
                                <NearMeIcon />
                                <div>
                                    <h2>40 campaigns sent in total</h2>
                                    <h2>4 campaigns sent in last month</h2>
                                </div>
                            </div>
                        </div>
                        <div className="mainsection__referralinfo">
                            <ReferralInfo title="Users Reached" count="2390" percent="38"/>
                            <ReferralInfo title="Referrals" count="23" percent="34"/>
                            <ReferralInfo title="Shares" count="236" percent="38"/>
                            <ReferralInfo title="Applications" count="230" percent="34"/>
                        </div>
                        <div className="mainsection__buttons">
                            <Button variant="contained" color="primary">Start a new campaign now</Button>
                            <Button variant="contained" color="secondary">Pause all running campaigns</Button>
                        </div>
                        
                    </div>
                    <div className="mainsection__openpositions">
                        <div className="mainsection__positiontitle">
                            <h2>Open positions by department</h2>
                            <MoreHorizIcon />
                        </div>
                        <div className="mainsection__piechart">
                            <Doughnut className="piechart"
                            data={positions}
                        />
                        </div>
                    </div>
                </div>   
            </div>
            <div className="mainsection__right">
                <div className="mainsection__widgets">
                    <NotificationsActiveIcon />
                    <span className="mainsection__username">Ashfaque</span>
                    <Avatar className="mainsection__avatar" alt="Ashfaque"></Avatar>
                </div>
                <div className="mainsection__search">
                    <Button variant="contained" color="primary">+ Add</Button>
                    <SearchIcon />
                    <span className="mainsection__input">Search for application here</span>
                </div>
                <div className="mainsection__applicantsection">
                    <div className="mainsection__applicanttitle">
                        <p>Hello Ashfaque,</p>
                        <p>You have 8 new applicants today</p>
                    </div>
                    <div className="mainsection__applicationinfo">
                        <div className="mainsection__newapplicants">
                            <h3>New Applicants</h3>
                            <ArrowForwardIosIcon />
                        </div>
                        <div className="mainsection__socialicons">
                            <NewApplicantInfo name="Rakesh" designation="Manager"/>
                            <NewApplicantInfo name="Akash" designation="React.js Developer"/>
                            <NewApplicantInfo name="Gary" designation="Web Developer"/>
                            <NewApplicantInfo name="Ankit" designation="Senior Manager"/>
                            <NewApplicantInfo name="Gulshan" designation="Marketing Manager"/>
                            <NewApplicantInfo name="Ashish" designation="Front End Developer"/>
                            <NewApplicantInfo name="Ankit" designation="Web Developer"/>
                        </div>
                    </div>
                   

                </div>
            </div>
        </div>
    )
}

export default MainSection
