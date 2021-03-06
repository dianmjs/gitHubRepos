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
    width: "196px",
    height: "196px",
  },
  todoInput: {
    width: "39vw",
    //boxShadow: "1px 1px 5px #ab47bc",
  },
  button: {
    margin: "2px 15px 9px 14px",
    backgroundColor: "#fff",
  },

  conte: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    paddingLeft: "8px!important",
  },
  buttonRepo: {
    margin: "1px 1px 7px 17px",
    padding: " 7px 7px",
    color: "#24292e",
    borderRadius: "4px",
    borderColor: "rgba(27,31,35,.15)",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backgroundImage: "linear-gradient(-180deg,#fafbfc,#eff3f6 90%)",
  },
  textRepo: {
    color: "#0366d6",
    padding: "9px 2px",
  },
  textRepo2: {
    color: "#424242",
    margin: "-19px 5px 6px 4px",
    padding: "3px 5px 10px 1px",
  },
  list: {
    display: "flex",
    alignItems: "center",
  },
  SearchRepo: {
    margin: "109px 3px -7px 15px",
    padding: "0px 38px",
    display: "flex",
  },
  buttonFollow: {
    position: "static",
    top: "0px !important",
    left: "16px",
    width: "196px",
    height: "26px",
    margin: "17px 3px 8px 2px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    color: "#24292e",
    fontSize: 16,
    backgroundImage: "linear-gradient(-180deg,#fafbfc,#eff3f6 90%)",
  },
  point: {
    display: "flex",
    alignItems: "center",
    color: "#424242",
    margin: "2px 2px 24px -4px",
    padding: "10px 0px",
    marginRight: "16px!important",
  },
  contecRepo: {
    margin: "1px -12px 3px 35px",
    paddingLeft: "8px!important",
  },
  buttonBack: {
    margin: theme.spacing(1),
    backgroundColor: "#fff",
  },
  info: {
    paddingRight: "16px!important",
  },
  orga: {
    margin: "8px 5px 5px 3px",
    height: "44px",
  },
  organizations: {
    margin: "2px 3px 3px 3px",
    color: "#424242",
  },
  reposLenguage: {
    display: "flex",
    alignItems: "center",
    color: "#424242",
  },
  count: {
    marginRight: "16px!important",
    color: "#424242",
  },
  iconCount: {
    margin: "8px 6px 13px 2px",
    color: "#586069!important",
    fontSize: "17px!important",
    transform: "rotate(180deg)",
  },
  line: {
    borderBottom: "1px solid #e1e4e8!important",
  },
  inputIndex: {
    margin: "1px -12px 3px 35px",
    display: "flex",
  },
  inputRepo: {
    width: "48vw",
    padding: "5px 16px",
    margin: " 0 10px 0 10px",
  },
  loading: {
    justifyContent: "center",
    display: "flex",
    padding: "10px 3px 3px 5px",
    margin: "154px 10px 62px -9px",
  },
  buttonNext: {
    marginTop: "16px",
    marginBottom: "16px",
    textAlign: "center",
  },
}));
