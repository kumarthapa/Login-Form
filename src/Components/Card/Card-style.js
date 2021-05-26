import { makeStyles } from "@material-ui/core";

const cardStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: 275,
    margin: theme.spacing(2),
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
}));

export default cardStyles;
