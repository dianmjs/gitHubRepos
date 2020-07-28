import React from "react";
import { Typography, List, ListItem } from "@material-ui/core";
import useStyles from "./Theme";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import Moment from "react-moment";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { infoReposAccion } from "../redux/usuarioGit";

const Lists = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const gitRepos = useSelector((store) => store.userGit.data);
  console.log("el repo", gitRepos);

  return (
    <div>
      <List>
        {gitRepos.map((items) => {
          return (
            <ListItem key={items.id} className={classes.line}>
              <div>
                <Typography
                  variant="h5"
                  color="initial"
                  className={classes.textRepo}
                >
                  {items.name}
                </Typography>
                <Typography variant="body1" className={classes.textRepo2}>
                  {items.description}
                </Typography>
                <div className={classes.reposLenguage}>
                  {items.language ? (
                    <Typography variant="body2" className={classes.point}>
                      <FiberManualRecordIcon style={{ color: "#651fff" }} />
                      {items.language}
                    </Typography>
                  ) : null}

                  {items.forks_count ? (
                    <Typography
                      variant="body2"
                      color="initial"
                      className={classes.count}
                    >
                      <DeviceHubIcon className={classes.iconCount} />
                      {items.forks_count}
                    </Typography>
                  ) : null}

                  <Typography variant="body2" color="initial">
                    Update on{" "}
                    <Moment from={new Date()}>{items.created_at}</Moment>
                  </Typography>
                </div>
              </div>
            </ListItem>
          );
        })}
        <div className={classes.buttonNext}>
          <ButtonGroup disableElevation color="primary">
            <Button>Previous</Button>
            <Button onClick={() => dispatch(infoReposAccion(num))}>Next</Button>
          </ButtonGroup>
        </div>
      </List>
    </div>
  );
};

export default Lists;
