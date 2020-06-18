import React from "react";
import useStyles from "./Theme";
import Octocat from "./Image/Octocat.jpg";
import {
  Grid,
  Divider,
  Typography,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import BusinessIcon from "@material-ui/icons/Business";
import RoomIcon from "@material-ui/icons/Room";
import LinkIcon from "@material-ui/icons/Link";

const Repos = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container justify="center" direction="row">
        <Grid item xs={12} sm={2} md={2}>
          <div>
            <img variant="square" src={Octocat} className={classes.media} />
          </div>
          <div>
            <Typography variant="h6" gutterBottom>
              Git User
            </Typography>
            <Typography variant="body2" color="text.secondary">
              git user alias
            </Typography>
          </div>
          <div>
            <Button size="large" variant="outlined" color="default">
              Follow
            </Button>
          </div>
          <div>
            <Typography variant="body2" color="initial">
              Software engineer at Company
            </Typography>
          </div>
          <br />
          <div>
            <ListItem button>
              <ListItemIcon>
                <BusinessIcon style={{ color: "#424242" }} />
                <ListItemText
                  primary="Company.io"
                  style={{ color: "#424242" }}
                />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <RoomIcon style={{ color: "#424242" }} />
                <ListItemText
                  primary="Medellin,Colombia"
                  style={{ color: "#424242" }}
                />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LinkIcon style={{ color: "#424242" }} />
                <ListItemText
                  primary="Company.io"
                  style={{ color: "#424242" }}
                />
              </ListItemIcon>
            </ListItem>
            <br />
            <div>
              <Typography variant="body2" color="initial">
                Block or report user
              </Typography>
              <Divider />
            </div>
          </div>
        </Grid>
        <Grid item item xs={7} sm={10} md={10}>
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
        </Grid>
      </Grid>
    </div>
  );
};

export default Repos;
