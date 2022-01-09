import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from './styles'

const WdFact = ({ FactIcon, factTitle, factContent }) => {
    const classes = useStyles()
    return (
        <Grid item lg={3} md={6} sm={6} className={classes.wdWrap}>
            <FactIcon className={classes.wdFactIcon} />
            <h3 className={classes.wdTitle}>{factTitle}</h3>
            <p className={classes.wdContent}>
                {factContent}
            </p>
        </Grid>
    );
};

export default WdFact;
