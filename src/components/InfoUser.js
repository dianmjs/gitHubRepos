import React from "react";
import { Typography, Divider, List } from "@material-ui/core";
import Octocat from "./Image/Octocat.jpg";
import Button from "@material-ui/core/Button";
import useStyles from "./Theme";
import BusinessIcon from "@material-ui/icons/Business";
import RoomIcon from "@material-ui/icons/Room";
import LinkIcon from "@material-ui/icons/Link";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

export const InfoUser = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <img variant="square" src={Octocat} className={classes.media} />
      </div>
      <div>
        <Typography variant="h6" gutterBottom>
          Git User
        </Typography>
        <Typography variant="body2" style={{ color: "#424242" }}>
          git user alias
        </Typography>
      </div>
      <div>
        <Button
          size="large"
          variant="outlined"
          className={classes.buttonFollow}
        >
          Follow
        </Button>
      </div>
      <div>
        <Typography variant="body2" color="initial">
          Software engineer at Company
        </Typography>
      </div>
      <br />
      <div >
          <Typography variant="body2" color="initial" className={classes.list}>
            <BusinessIcon style={{ color: "#424242" }} />
            company.io
          </Typography>
       
        <Typography variant="body2" color="initial" className={classes.list}>
          <RoomIcon style={{ color: "#424242" }} />
          Medellin, Colombia.
        </Typography>
        
        <Typography variant="body2" color="primary" className={classes.list} href="company.io">
          <LinkIcon style={{ color: "#424242" }} />
          company.io
        </Typography>
      
      </div>
      <br />
      <div className={classes.summary}>
        <Typography variant="body2" color="initial">
          Block or report user
        </Typography>
        <Divider />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          className={classes.buttonBack}
          startIcon={<ChevronLeftIcon />}
          href="/"
        >
          Back
        </Button>
      </div>
    </div>
  );
};
