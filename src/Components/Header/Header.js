import React from 'react';
import './Header.css';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../images/Logo.png';
import { useContext } from 'react';
import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#FFBD33",
    marginRight: "5px",
    borderRadius: "10px",
    padding: "5px 10px"
  },
  iconBtnImg: {
    marginRight: theme.spacing(10),

  },
  grow: {
    flexGrow: 1,
  },
  iconBtn: {
    marginRight: theme.spacing(10),
    color: "#FFBD33"
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#FFBD33"
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  }
}));

const Header = () => {
  const classes = useStyles();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const signOut = () => {
    setLoggedInUser({});
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" className={classes.iconBtnImg}  >
            <img src={logo} height="50" width="150" alt="" />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Your Destination…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Typography variant="h6" color="inherit" className={classes.iconBtn}>
            News
    </Typography>
          <Typography variant="h6" color="inherit" className={classes.iconBtn}>
            Destination
    </Typography>
          <Typography variant="h6" color="inherit" className={classes.iconBtn}>
            Blog
    </Typography>
          <Typography variant="h6" color="inherit" className={classes.iconBtn}>
            Contact
    </Typography>
          {/* <button className={classes.btn}
            onClick={() => setLoggedInUser({})}>Sign Out</button> */}
          <button className={classes.btn}
            onClick={() => signOut()}>Sign Out</button>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>

    </div>
  );
};

export default Header;