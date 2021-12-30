import React from 'react'
import useStyles from './styles'

const PageTitle = ({ title }) => {
    const classes = useStyles()
    return (
        <div className={classes.titleWrap}>
            <h3>{title}</h3>
        </div>
    )
}

export default PageTitle
