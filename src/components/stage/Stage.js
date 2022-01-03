import React from 'react'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Grid } from '@material-ui/core'
import useStyles from './styles'

const Stage = ({ stage, title, stageImgUrl, stageBtn, paraCount, para1, para2, para3, para4}) => {
    const classes = useStyles()
    
    return (
        <Grid container className={classes.stageWrap}>
            <Grid item lg={6} md={6} sm={12}>
                <h3 className={classes.stageCount}>{stage}</h3>
                <h3 className={classes.stageTitle}>{title}</h3>
                {
                    paraCount === 3 && (
                        <>
                            <div className={classes.stageContent}>
                                <p>{para1}</p>
                                <br/>
                                <p>{para2}</p>
                                <br/>
                                <p>{para3}</p>
                                <br/>
                            </div>
                        </>
                    )
                }

                {
                    paraCount === 4 && (
                        <>
                            <div className={classes.stageContent}>
                                <p>{para1}</p>
                                <br/>
                                <p>{para2}</p>
                                <br/>
                                <p>{para3}</p>
                                <br/>
                                <p>{para4}</p>
                            </div>
                        </>
                    )
                }

                <Link to="/" className={classes.btn}>{stageBtn} <ArrowForwardIosIcon className={classes.arrow}/></Link>
            </Grid>

            <Grid item lg={6} md={6} sm={12}>
                <img src={stageImgUrl} alt="stage preview" className={classes.stageImg}/>
            </Grid>

        </Grid>
    )
}

export default Stage
