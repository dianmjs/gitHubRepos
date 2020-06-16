import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import useStyles from "./Theme";
import Octocat from "./Image/Octocat.jpg";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const SearchItem = () => {
  const classes = useStyles();
  return (
    <Grid justify="center">
      <Grid item>
        <Card className={classes.pic}>
          <CardMedia className={classes.media} image={Octocat} />
        </Card>
      </Grid>
      <Grid item>
        <form>
          <TextField
            id="outlined-basic"
            placeholder="Find a repository..."
            variant="outlined"
          />
          <Button color="primary" variant="contained">
            Search
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default SearchItem;
