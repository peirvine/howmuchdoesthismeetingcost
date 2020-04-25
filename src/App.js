import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './App.css'
import { Toolbar, AppBar, IconButton, Button, Typography, Container, Paper, Grid, Input, Slider } from '@material-ui/core'
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
})

export default function App() {
  const classes = useStyles();
  const [engineer, setEngineer] = useState(0)

  const handleSliderChange = (event, newValue) => {
    setEngineer(newValue);
  }

  const handleInputChange = (event) => {
    setEngineer(event.target.engineer === '' ? '' : Number(event.target.value))
  }

  const handleBlur = () => {
    if (engineer < 0) {
      setEngineer(0);
    }
  }

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Container maxWidth="md">
            <Typography variant="h6" color="grey">
              How Much Is This Meeting Costing Us?
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Paper className="mainBody">
          Please Select How Many of each level:
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              Engineer:
            </Grid>
            <Grid item xs>
              <Slider
                value={typeof engineer === 'number' ? engineer : 0}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
              />
            </Grid>
            <Grid item>
              <Input
                className={classes.input}
                value={engineer}
                margin="dense"
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                  step: 1,
                  min: 0,
                  max: 100,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
            </Grid>
          </Grid>
          {engineer}
        </Paper>
      </Container>
    </>
  )
}
