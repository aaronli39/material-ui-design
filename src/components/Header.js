import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(() => ({
    typo: {
        flex: 5
    },
    icon: {
        flex: 1
    }
}))

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typo}>
                    This is our header
                </Typography>
                <AcUnitRoundedIcon className={classes.icon} />
            </Toolbar>
        </AppBar>
    )
}

export default Header
