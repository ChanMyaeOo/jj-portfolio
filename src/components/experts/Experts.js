import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

const Experts = ({ expertMainTitle, expertMainContent, expertSubTitle, expertSubPara1, expertSubPara2, expertSubPara3, expertSubPara4, expertBtn }) => {
    const classes = useStyles()
    return (
        <div className={classes.experts}>
            <h1 className={classes.header}>{expertMainTitle}</h1>
            <p className={classes.content}>{expertMainContent}</p>
            <div className={classes.about}>
                <h2>{expertSubTitle}</h2>
                <p>{expertSubPara1}</p>
                <p>{expertSubPara2}</p>
                <p>{expertSubPara3}</p>
                <p>{expertSubPara4}</p>
                <Link to="/" className={classes.quote}>{expertBtn}</Link>
            </div>
        </div>
    )
}

export default Experts
