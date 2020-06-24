import React from "react";
import useStyles from "./Theme";
import { Grid, Divider, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { InfoUser } from "../components/InfoUser";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Repos = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container justify="center" direction="row">
        <Grid item xs={6} sm={3} md={2}>
          <InfoUser data={props.data} />
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <div className={classes.contecRepo}>
            <form noValidate autoComplete="off">
              <TextField
                required
                placeholder="Find a repository..."
                variant="outlined"
                type="text"
                size="small"
                className={classes.inputRepo}
              />

              <Button
                variant="outlined"
                type="submit"
                className={classes.buttonRepo}
              >
                Language #
              </Button>
            </form>
            <div>
              <Divider />
              <div>
                <Typography
                  variant="h5"
                  color="initial"
                  className={classes.textRepo}
                >
                  {props.data.repos_url}
                </Typography>
                <Typography variant="body1" className={classes.textRepo2}>
                  Forked from emacs-lsp/lsp-mode
                </Typography>
                <Typography variant="body2" className={classes.point}>
                  <FiberManualRecordIcon style={{ color: "#651fff" }} />
                  hit user
                </Typography>
              </div>
              <Divider />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Repos;
