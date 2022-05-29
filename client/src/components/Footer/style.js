import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  footer: {
    background: '#2a388f',
    width: '100%',
    padding: '20px 0',
    paddingBottom: '10px',
    color: '#fff',
  },

  container: {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '1200px',
  },

  row: {
    display: 'flex',
    textAlign: 'left',
    margin: '0',
  },

  item: {
    margin: '30px 60px',
    paddingLeft: '10px',
  },

  itemvnvc: {
    margin: '10px 50px',
  },

  label: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 800,
    fontSize: '18px',
    marginBottom: '10px',
  },

  number: {
    color: '#EC6533',
    textDecoration: 'none',
    fontWeight: 900,
    fontSize: '18px',
  },

  time: {
    fontSize: '12px',
    fontWeight: 500,
    textAlign: 'center',
  },

  VNVC: {
    textAlign: 'left',
    fontSize: '16px',
  },

  menu: {
    display: 'flex',
    justifyContent: 'flexStart;',
  },

  line: {
    borderBottom: '1px solid #fff',
    height: '1px',
    marginLeft: '40px',
    marginRight: '40px',
    marginTop: '24px',
  },
}));
