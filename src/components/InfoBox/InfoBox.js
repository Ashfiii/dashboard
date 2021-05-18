import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';


function InfoBox({ title, count, Icon, percent}) {
  const percentage = 66; 
  return (
    <Card className="infobox__card">
      <CardContent className="infobox__cardcontent">
        <Typography className="infobox__title">
          {title}
        </Typography>
        <h2 className="infobox__count">
          {count}
        </h2>
        <Typography className="infobox__group">
          <Icon />
          <span className="infobox__percent">{percent}</span>
        </Typography>
      </CardContent>
      <CardContent className="infobox__graph">
        <Typography className="infobox__typography">
          <MoreHorizIcon />
          
          <CircularProgressbar
            value={percentage}
            // text={`${percentage}%`}
            styles={buildStyles({
              strokeLinecap: 'butt',
              pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
              textColor: 'white',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
         
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;