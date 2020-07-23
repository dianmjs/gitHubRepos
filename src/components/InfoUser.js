import React from "react";
import { Typography, Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useStyles from "./Theme";
import BusinessIcon from "@material-ui/icons/Business";
import RoomIcon from "@material-ui/icons/Room";
import LinkIcon from "@material-ui/icons/Link";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useDispatch, useSelector } from "react-redux";
import { obtenerUsuarioAccion } from "../redux/usuarioGit";

export const InfoUser = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const gitInfo = useSelector((store) => store.userGit.data);

  return (
    <div className={classes.info}>
      <div>
        <img variant="square" src={gitInfo.avatar} className={classes.media} />
      </div>
      <div>
        <Typography variant="h5">{gitInfo.nombre}</Typography>
        <Typography variant="body2" style={{ color: "#424242" }}>
          {gitInfo.alias}
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
          {gitInfo.profile}
        </Typography>
      </div>
      <br />
      <div>
        {gitInfo.compañia ? (
          <Typography variant="body2" color="initial" className={classes.list}>
            <BusinessIcon style={{ color: "#424242" }} />
            {gitInfo.compañia}
          </Typography>
        ) : null}

        {gitInfo.location ? (
          <Typography variant="body2" color="initial" className={classes.list}>
            <RoomIcon style={{ color: "#424242" }} />
            {gitInfo.location}
          </Typography>
        ) : null}
        {gitInfo.blog ? (
          <Typography
            variant="body2"
            color="primary"
            className={classes.list}
            href={gitInfo.blog}
          >
            <LinkIcon style={{ color: "#424242" }} />
            {gitInfo.blog}
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
