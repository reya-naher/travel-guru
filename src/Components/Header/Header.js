import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import black from '../../images/Logo.png';
import white from '../../images/white.png'
import { useContext } from 'react';
import { UserContext } from '../../App';
// import { handleSignOut } from '../Login/LoginManager';


const useStyles = makeStyles((theme) => ({
  btnSignIn: {
    backgroundColor: "#FFBD33",
    marginRight: "5px",
    borderRadius: "10px",
    padding: "5px 10px"
  },
  btnSignOut: {
    backgroundColor: "#FFBD33",
    marginRight: "5px",
    borderRadius: "10px",
    padding: "5px 10px",
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  iconBtnImg: {
    marginRight: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },

  },
  grow: {
    flexGrow: 1,
  },
  iconBtn: {
    marginRight: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      marginRight: "5px"
    },
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
    [theme.breakpoints.down('xs')]: {
      display:'none'
    },
  },
  searchBlack: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "fade(theme.palette.common.black, 0.50)",
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(4),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      display:'none'
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchIconBlack: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "black"
  },
  inputRoot: {
    color: 'white',
  },
  inputRootBlack: {
    color: "black"
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
  const {setLoggedInUser} = useContext(UserContext)
  const path = useLocation().pathname

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton edge="start" color="inherit" className={classes.iconBtnImg}>
              <img src={(path === "/" || path === "/loginuser") ? white : black} height="50" width="150" alt="" />
            </IconButton>
          </Link>
          {path === "/" ? <div className={classes.search}>
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
          </div> :
            <div className={classes.searchBlack}>
              <div className={classes.searchIconBlack}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Your Destination…"
                classes={{
                  root: classes.inputRootBlack,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>}

          {path === "/" ?
            <Typography
              variant="h6"
              className={classes.iconBtn}>
              <Link style={{ color: "white" }} to="/">News</Link>
            </Typography> :
            <Typography
              variant="h6"
              className={classes.iconBtn}>
              <Link style={{ color: "black" }} to="/">News</Link>
            </Typography>
          }

          {path === "/" ?
            <Typography
              variant="h6"
              className={classes.iconBtn}>
              <Link style={{ color: "white" }} to="/">Destination</Link>
            </Typography> :
            <Typography
              variant="h6"
              className={classes.iconBtn}>
              <Link style={{ color: "black" }} to="/">Destination</Link>
            </Typography>
          }

          {path === "/" ?
            <Typography
              variant="h6"
              className={classes.iconBtn}>
              <Link style={{ color: "white" }} to="/">Blog</Link>
            </Typography> :
            <Typography
              variant="h6"
              className={classes.iconBtn}>
              <Link style={{ color: "black" }} to="/">Blog</Link>
            </Typography>
          }

          {path === "/" ?
            <Typography
              variant="h6"
              className={classes.iconBtn}>
              <Link style={{ color: "white" }} to="/">Contact</Link>
            </Typography> :
            <Typography
              variant="h6"
              className={classes.iconBtn}>
              <Link style={{ color: "black" }} to="/">Contact</Link>
            </Typography>
          }

          {/* <button className={classes.btn}
            onClick={() => handleSignOut()}>G Sign Out</button> */}

          <Link to="/userlogin">
            <button className={classes.btnSignIn}>Sign In</button>
          </Link>
          <button
            className={classes.btnSignOut}
            onClick={() => setLoggedInUser({})}>
            Sign Out
            </button>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>

    </div>
  );
};

export default Header;