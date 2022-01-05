import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import AgencyFact from './agency-fact/AgencyFact'
import useStyles from './styles'

const WdAgency = () => {
    const classes = useStyles()
    return (
        <div>
            <h3>WordPress Development Agency</h3>
            <p>We’re a London WordPress development agency who create bespoke projects, building user friendly WordPress websites and optimising their performance. Whether you’re a new or established business, we can help grow your online presence.</p>

            <Link to='/'>Discuss your project with our developers</Link>

            <div className={classes.wdAgWrap}>
                <AgencyFact />
                <AgencyFact />
                <AgencyFact />
                <AgencyFact />
                <AgencyFact />
                <AgencyFact />
            </div>
        </div>
    )
}

export default WdAgency
