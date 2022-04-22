import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: (props) => ({
    marginTop: `${props.abc}px`,
  }),
  box: {
    fontSize: "50px",
    color: theme.palette.primary,
  },
}));
