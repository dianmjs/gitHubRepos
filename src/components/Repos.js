import React, { useState, useEffect } from "react";
import useStyles from "./Theme";
import { Grid, Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { InfoUser } from "../components/InfoUser";
import Lists from "../components/Lists";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Repos = () => {
  const classes = useStyles();
  const [repoFilter, setRepoFilter] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [lista, setLista] = useState([]);
  const [repor, setRepo] = useState([]);
  const history = useHistory();

  const gitRepos = useSelector((store) => store.userGit.data);

  /*useEffect(() => {
    Language();
  }, []);*/

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const onchangeRepo = (e) => {
    setRepoFilter(e.target.value);
  };

  /*const getUniquelang = (arr, comp) => {
    const unique = arr
      //Compara los valores del array
      .map((e) => e[comp])
      //llaves de un unico objeto
      .map((e, i, final) => final.indexOf(e) === i && i)
      //Elimina llaves muertas y almacena datos unicos
      .filter((e) => arr[e])
      .map((e) => arr[e]);
    return unique;
  };*/

  /*const Language = () => {
    api.getRepo(datesUser.login).then((resp) => {
      setRepo(resp);
      setLista(getUniquelang(resp, "language"));

      setLoading(false);
    });
  };*/

  const newGit2 = [];
  gitRepos.forEach((obj) => {
    if (!newGit2.some((o) => o.language === obj.language)) {
      newGit2.push({ ...obj });
    }
  });
  console.log("compara los lenguages", newGit2);
  return (
    <div>
      {isLoading && (
        <div>
          <Loader type="Circles" color="#00BFFF" className={classes.loading} />
        </div>
      )}
      {!isLoading && (
        <div>
          <Grid container justify="center" direction="row">
            <Grid item xs={6} sm={3} md={2}>
              <InfoUser />
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
                    onChange={onchangeRepo}
                  />
                  <select
                    className={classes.buttonRepo}
                    onChange={onchangeRepo}
                  >
                    <option selected value="">
                      Language All
                    </option>

                    {newGit2.map((leng) => {
                      return (
                        <option
                          key={leng.id}
                          value={leng.language}
                          onClick={onchangeRepo}
                        >
                          {leng.language}
                        </option>
                      );
                    })}
                  </select>
                </form>
                <Divider />

                <Lists />
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Repos;
