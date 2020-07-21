import React from "react";
import { Typography, Divider } from "@material-ui/core";
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
          src={props.datesUser.avatar_url}
          className={classes.media}
        />
      </div>
      <div>
        <Typography variant="h5">{props.datesUser.name}</Typography>
        <Typography variant="body2" style={{ color: "#424242" }}>
          {props.datesUser.login}
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
          {props.datesUser.profile}
        </Typography>
      </div>
      <br />
      <div>
        {props.datesUser.company ? (
          <Typography variant="body2" color="initial" className={classes.list}>
            <BusinessIcon style={{ color: "#424242" }} />
            {props.datesUser.company}
          </Typography>
        ) : null}

        {props.datesUser.location ? (
          <Typography variant="body2" color="initial" className={classes.list}>
            <RoomIcon style={{ color: "#424242" }} />
            {props.datesUser.location}
          </Typography>
        ) : null}

        {props.datesUser.blog ? (
          <Typography
            variant="body2"
            color="primary"
            className={classes.list}
            href={props.datesUser.blog}
          >
            <LinkIcon style={{ color: "#424242" }} />
            {props.datesUser.blog}
          </Typography>
        ) : null}
      </div>
      <br />
      <div>
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
          disableElevation
        >
          Back
        </Button>
      </div>
    </div>
  );
};