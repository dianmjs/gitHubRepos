import React from "react";
import { Typography, Divider } from "@material-ui/core";
import Octocat from "./Image/Octocat.jpg";
import Button from "@material-ui/core/Button";
import useStyles from "./Theme";
import BusinessIcon from "@material-ui/icons/Business";
import RoomIcon from "@material-ui/icons/Room";
import LinkIcon from "@material-ui/icons/Link";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

export const InfoUser = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.info}>
      <div>
        <img
          variant="square"
          src={props.avatar_url}
          className={classes.media}
        />
      </div>
      <div>
        <Typography variant="h5">{props.name}</Typography>
        <Typography variant="body2" style={{ color: "#424242" }}>
          {props.alias}
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
          {props.profile}
        </Typography>
      </div>
      <br />
      <div>
        <Typography variant="body2" color="initial" className={classes.list}>
          <BusinessIcon style={{ color: "#424242" }} />
          {props.company}
        </Typography>

        <Typography variant="body2" color="initial" className={classes.list}>
          <RoomIcon style={{ color: "#424242" }} />
          {props.location}
        </Typography>

        <Typography
          variant="body2"
          color="primary"
          className={classes.list}
          href="company.io"
        >
          <LinkIcon style={{ color: "#424242" }} />
          {props.blog}
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
