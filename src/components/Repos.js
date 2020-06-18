import React from "react";
import useStyles from "./Theme";
import { Grid, Divider, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { InfoUser } from "../components/InfoUser";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Repos = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container justify="center" direction="row">
        <Grid item>
          <InfoUser />
        </Grid>
        <Grid item className={classes.contecRepo}>
          <form noValidate autoComplete="off">
            <TextField
              required
              placeholder="Find a repository..."
              variant="outlined"
              // value={input}
              type="text"
              size="small"
              className={classes.inputRepo}
              // onChange={onChangeHanler}
            />

            <Button
              variant="outlined"
              type="submit"
              className={classes.buttonRepo}
            >
              Language: ALL #
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
                dotfiles
              </Typography>
              <Typography variant="body1" className={classes.textRepo2}>
                Forked from emacs-lsp/lsp-mode
              </Typography>
              <Typography variant="body2" className={classes.point}>
                <FiberManualRecordIcon style={{ color: "#651fff" }} /> hit user
              </Typography>
            </div>
            <Divider />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Repos;
