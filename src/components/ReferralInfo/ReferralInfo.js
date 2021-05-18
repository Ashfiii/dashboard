import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./ReferralInfo.css";
import CallMadeIcon from '@material-ui/icons/CallMade';

function ReferralInfo({ title, count, percent}) {
  return (
    <Card className="referralinfo__card">
      <CardContent className="referralinfo__cardcontent">
        <Typography className="referralinfo__title">
          {title}
        </Typography>
        <Typography className="referralinfo__group">
          <CallMadeIcon />
          <span className="referralinfo__percent">{percent}</span>
        </Typography>
        <h1 className="referralinfo__count">
          {count}
        </h1>
      </CardContent>
    </Card>
  );
}

export default ReferralInfo;