import React from 'react'
import { Link } from 'react-router-dom'
import WpEngine from '../../images/wp-eng.png'
import useStyles from './styles'

const Ad = () => {
    const classes = useStyles();
    return (
        <div className={classes.ad}>
            <img src={WpEngine} alt="wordpress engine" className={classes.wpImg}/>
            <p className={classes.content}>Get 3 months free when you sign up for WP Engine.</p>
            <Link to="/" className={classes.adBtn}>click here</Link>
        </div>
    )
}

export default Ad
