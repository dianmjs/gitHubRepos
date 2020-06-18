import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  header: {
    backgroundColor: "#24292e",
    fontSize: "14px",
  },
  offset: theme.mixins.toolbar,

  media: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  todoInput: {
    width: "50vw",
    padding: "10px",
    margin: " 0 10px 0 10px",
  },
  button: {
    margin: theme.spacing(2),
    color: "#24292e",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backgroundImage: "linear-gradient(-180deg,#fafbfc,#eff3f6 90%)",
  },
  inputRepo: {
    width: "50vw",
    padding: "10px",
    margin: " 0 10px 0 10px",
  },
  conte: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  buttonRepo: {
    margin: "2px 15px 9px 14px",
    color: "#24292e",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backgroundImage: "linear-gradient(-180deg,#fafbfc,#eff3f6 90%)",
  },
  menuButton: {
    display: "flex",
  },
  textRepo: {
    flexGrow: 1,
  },
}));
