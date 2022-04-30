import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  wrapper: {
    fontSize: '16px',
    maxWidth: '350px',
    margin: '0 auto',
    marginTop: '180px',
    boxShadow:
      'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fff',

    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },

  title: {
    fontSize: '1.8em',
    color: theme.palette.grey[800],
  },
}));
