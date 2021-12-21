import React from "react";
import { Link } from 'react-router-dom'
import useStyles from "./styles";
import Works from '../works/Works'


const Creating = () => {
    const classes = useStyles();

    return (
        <div className={classes.creating}>
            <h1 className={classes.header}>Creating Websites with WordPress</h1>
            <p className={classes.content}>
                We help companies grow their online presence through custom
                WordPress web design & development. Take a look at our portfolio
                to see what we've done in the past.
            </p>
            <Works />
            <Link to='/' className={classes.workBtn}>view our work</Link>
        </div>
    );
};

export default Creating;
