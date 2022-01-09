import React from 'react'
import { Link } from 'react-router-dom'
import TableChartIcon from '@material-ui/icons/TableChart';
import PublicIcon from '@material-ui/icons/Public';
import MultilingualImg from '../../../images/multilingual.png'
import useStyles from './styles'

const WpMultilingual = () => {
    const classes = useStyles()
    return (
        <div className={classes.wpMultiContainer}>
            <h3 className={classes.multiTitle}>WordPress Multilingual Plugin</h3>
            <p className={classes.multiContent}>WPML is the most powerful, professional WordPress plugin to create multilingual websites and blogs compatible with all existing WordPress themes. Our WordPress developers configure the multilingual plugin to provide content translation for posts, pages, products, BuddyPress and bbPress, custom post types, widgets and navigation menus.</p>
            <div className={classes.wpMultiWrap}>
                <div className={classes.multiServiceContainer}>
                    <div className={classes.multiServiceWrap}>
                        <TableChartIcon className={classes.multiIcon} />
                        <div>
                            <h4 className={classes.multiSubTitle}>One Website, Multiple Languages</h4>
                            <p className={classes.multiCont1}>Target different language audiences</p>
                            <p className={classes.multiCont2}>The WPML plugin gives you the ability to create a separate web page for each language as well as localize it for different countries or regions.</p>
                        </div>
                    </div>

                    <div className={classes.multiServiceWrap}>
                        <PublicIcon className={classes.multiIcon} />
                        <div>
                            <h4 className={classes.multiSubTitle}>One Website, Multiple Languages</h4>
                            <p className={classes.multiCont1}>Target different language audiences</p>
                            <p className={classes.multiCont2}>The WPML plugin gives you the ability to create a separate web page for each language as well as localize it for different countries or regions.</p>
                        </div>
                    </div>
                </div>

                <img src={MultilingualImg} alt="multilingual" className={classes.multiImg}/>
            </div>
            <Link to="/" className={classes.multiBtn}>learn more about the wpml plugin</Link>
        </div>
    )
}

export default WpMultilingual
