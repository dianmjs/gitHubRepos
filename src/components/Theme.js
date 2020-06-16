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
  pic: {
    maxWidth: 120,
  },
  media: {
    height: 190,
  },
  todoInput: {
    borderCcolor: "#2188ff",
    outline: "none",
    boxShadow:
      "inset 0 1px 2px rgba(27,31,35,.075), 0 0 0 0.2em rgba(3,102,214,.3)",
  },
}));
