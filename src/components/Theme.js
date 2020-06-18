import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
  textRepo: {
    color: "#0366d6",
    padding: "28px 1px",
  },
  textRepo2: {
    color: "#424242",
  },
  list: {
    display: "flex",
    alignItems: "center",
  },
  summary: {
    
  },
  buttonFollow: {
    // maxWidth: "100%",
    position: "static",
    top: "0px !important",
    left: "16px",
    width: "196px",
    height: "26px",
    margin: "36px -6px 2px 0px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    color: "#24292e",
    backgroundImage: "linear-gradient(-180deg,#fafbfc,#eff3f6 90%)",
  },
  point: {
    display: "flex",
    // margin: "18px 3px",
    alignItems: "center",
    color: "#424242",
    margin: "2px 2px 24px -4px",
    padding: "10px 0px",
  },
  contecRepo: {
    margin: "1px -12px 3px 35px",
  },
  buttonBack: {
    margin: theme.spacing(1),
  },
}));
