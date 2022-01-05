import React from 'react'
import { Grid } from '@material-ui/core'
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import useStyles from './styles'

const AgencyFact = () => {
    const classes = useStyles()
    return (
            <div className={classes.agWrap} >
                <DeveloperBoardIcon className={classes.agIcon} />
                <h3 className={classes.agTitle}>WordPress Development</h3>
                <p className={classes.agContent}>We specialise in WordPress development of customised themes and plugins to create WordPress websites based on design files. We also integrate new features and web applications into existing WordPress websites.</p>
            </div>
    )
}

export default AgencyFact
