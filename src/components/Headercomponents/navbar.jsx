import { AppBar, Toolbar, Typography,Box,Button} from '@material-ui/core'
import React from 'react'
import { useStyles } from './HeaderStyles'

export default function Navbar() {
    const classes = useStyles();
    const navlinks=[
        {label:"Home", Id:"Home"},
        {label:"Education", Id:"Education"},
        {label:"Skills", Id:"Skills"},
        {label:"Contact", Id:"Contact"},
        {label:"About", Id:"About"},
    ];
  return (
    <AppBar className={classes.Navbar}>
  <Toolbar className={classes.ToolBar}>
    <Typography variant="h5" component="h6" >
      {"UJJWAL SINHA"}
    </Typography>
    {/*navlinks */}
    <Box>
        {navlinks.map((item,i)=>(
        <Button className={classes.navlinks} >{item.label}</Button>))}
        </Box>
  </Toolbar>
</AppBar>
  )
}
