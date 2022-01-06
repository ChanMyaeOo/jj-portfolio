import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'

const AgencyFact = ({ AgIcon, agFactTitle, agFactContent }) => {
    const classes = useStyles()
    return (
            <div className={classes.agWrap} >
                <AgIcon className={classes.agIcon} />
                <h3 className={classes.agTitle}>{agFactTitle}</h3>
                <p className={classes.agContent}>{agFactContent}</p>
            </div>
    )
}

export default AgencyFact
