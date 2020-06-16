import React from "react";
import AppBar from "@material-ui/core/AppBar";
import GitHubIcon from "@material-ui/icons/GitHub";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./Theme";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.header}>
        <Toolbar>
          <IconButton color="inherit">
            <GitHubIcon style={{ fontSize: 40 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
};

export default Header;
