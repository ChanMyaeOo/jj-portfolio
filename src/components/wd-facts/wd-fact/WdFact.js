import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from './styles'

const WdFact = ({ FactIcon }) => {
    const classes = useStyles()
    return (
        <Grid item lg={3} md={6} sm={6} className={classes.wdWrap}>
            <FactIcon className={classes.wdFactIcon} />
            <h3 className={classes.wdTitle}>Jobs Boards</h3>
            <p className={classes.wdContent}>
                WordPress sites are great for creating jobs boards for your
                company to showcase our latest job openings, or for other
                recruitment agencies within the industry.
            </p>
        </Grid>
    );
};

export default WdFact;
