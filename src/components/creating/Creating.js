import React from "react";
import { Link } from 'react-router-dom'
import useStyles from "./styles";
import Works from '../works/Works'


const Creating = ({ title, content}) => {
    const classes = useStyles();

    return (
        <div className={classes.creating}>
            <h1 className={classes.header}>{title}</h1>
            <p className={classes.content}>
               {content}
            </p>
            <Works />
            <Link to='/' className={classes.workBtn}>view our work</Link>
        </div>
    );
};

export default Creating;
