import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Toolbar, AppBar, IconButton, Button, Typography } from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons'

function App() {
  return (
    <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className='menuButton' color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className='title'>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
  )
}

export default App
