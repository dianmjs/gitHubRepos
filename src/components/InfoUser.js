import React from "react";
import { Typography, Divider, Avatar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useStyles from "./Theme";
import BusinessIcon from "@material-ui/icons/Business";
import RoomIcon from "@material-ui/icons/Room";
import LinkIcon from "@material-ui/icons/Link";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

export const InfoUser = (props) => {
  console.log(props.data);
  const classes = useStyles();

  return (
    <div className={classes.info}>
      <div>
        <img
          variant="square"
          src={props.data.avatar_url}
          className={classes.media}
        />
      </div>
      <div>
        <Typography variant="h5">{props.data.name}</Typography>
        <Typography variant="body2" style={{ color: "#424242" }}>
          {props.data.login}
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
          {props.data.profile}
        </Typography>
      </div>
      <br />
      <div>
        {props.data.company ? (
          <Typography variant="body2" color="initial" className={classes.list}>
            <BusinessIcon style={{ color: "#424242" }} />
            {props.data.company}
          </Typography>
        ) : null}

        {props.data.location ? (
          <Typography variant="body2" color="initial" className={classes.list}>
            <RoomIcon style={{ color: "#424242" }} />
            {props.data.location}
          </Typography>
        ) : null}

        {props.data.blog ? (
          <Typography
            variant="body2"
            color="primary"
            className={classes.list}
            href={props.data.blog}
          >
            <LinkIcon style={{ color: "#424242" }} />
            {props.data.blog}
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
      {/* <div>
        <Typography variant="h6" className={classes.orga}></Typography>
        <Avatar variant="square" className={classes.organizations}></Avatar>
        <Divider />
      </div>*/}
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
