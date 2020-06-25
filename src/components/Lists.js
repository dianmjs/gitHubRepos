import React from "react";
import { Divider, Typography, List, ListItem } from "@material-ui/core";
import useStyles from "./Theme";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

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
                      <Typography variant="body2" className={classes.point}>
                        <FiberManualRecordIcon style={{ color: "#651fff" }} />
                        {items.language}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="initial"
                        className={classes.count}
                      >
                        {items.fork}
                      </Typography>
                      <Typography variant="body2" color="initial">
                        Update {items.updated_at}
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
