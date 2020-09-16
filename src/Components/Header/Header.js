import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import logo from '../../images/Logo.png'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  iconBtn: {
    marginRight: theme.spacing(2),
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
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
<div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" color="inherit" className={classes.iconBtn}  >
            <img src={logo} height="50" width="150" alt=""/>
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
    <Button color="secondary">Login</Button>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>

    </div>
  );
};

export default Header;