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

  const gitInfo = useSelector((store) => store.userGit.data);
  console.log("respuesta de gitInfo", gitInfo);

  const newGit = [];
  gitInfo.forEach((obj) => {
    if (!newGit.some((o) => o.item === obj.item)) {
      newGit.push({ ...obj });
    }
  });
  console.log("metodo", newGit);
  return (
    <div className={classes.info}>
      {newGit.map((infos) => {
        return (
          <div key={infos.id}>
            <img
              variant="square"
              src={infos.owner.avatar_url}
              className={classes.media}
            />

            <Typography variant="h5">{infos.owner.name}</Typography>
            <Typography variant="body2" style={{ color: "#424242" }}>
              {infos.owner.login}
            </Typography>
            <Button
              size="large"
              variant="outlined"
              className={classes.buttonFollow}
            >
              Follow
            </Button>
            <Typography variant="body2" color="initial">
              {infos.owner.profile}
            </Typography>
          </div>
        );
      })}

      <div></div>
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
