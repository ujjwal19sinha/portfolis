import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { useStyles } from './HeaderStyles'
import Navbar from './navbar'

export default function Headers() {
  const classes = useStyles()
  return (
    <Box className={classes.HeaderWraper}>
      <Navbar />
      <Box className={classes.Headercontainer}></Box>
      <Typography variant="h2">hello</Typography>
    </Box>
  )
}
