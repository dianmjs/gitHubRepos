import React from "react";
import { Divider, Typography, List, ListItem } from "@material-ui/core";
import useStyles from "./Theme";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import Moment from "react-moment";

const Lists = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Divider />
      <List>
        {props.repo
          .filter((nameRepo) => {
            return nameRepo.name.indexOf(props.repoFilter.toLowerCase()) >= 0;
          })
          .map((items) => {
            return (
              <ListItem key={items.id} className={classes.line}>
                <div>
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
                </div>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};

export default Lists;
