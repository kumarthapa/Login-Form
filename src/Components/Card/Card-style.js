import { makeStyles } from "@material-ui/core";

const cardStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    margin: theme.spacing(1),
    border: '1px solid gray'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root2: {
    flexGrow: 1,
  },
}));

export default cardStyles;
