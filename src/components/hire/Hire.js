import React from 'react'
import HearingIcon from '@material-ui/icons/Hearing';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import GamesIcon from '@material-ui/icons/Games';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import useStyles from './styles'

const Hire = () => {
    const classes = useStyles()
    return (
        <div className={classes.hire}>
            <h1 className={classes.header}>Why You Should Hire Us</h1>
            <div className={classes.headerContentWrap}>
                <div className={classes.headerContent}>
                    <HearingIcon className={classes.headerIcon} />
                    <div>
                        <h3 className={classes.subHeader}>Active Listening</h3>
                        <p className={classes.subContent}>We understand the importance of listening to our clients requirements so they can fully express their ideas to gain a better understanding of their goals before applying our knowledge and experience to the WordPress project.</p>
                    </div>
                </div>

                <div className={classes.headerContent}>
                    <AllInclusiveIcon className={classes.headerIcon}/>
                    <div>
                        <h3 className={classes.subHeader}>Idea Discussion</h3>
                        <p className={classes.subContent}>We enjoy listening to and discussing business, WordPress functionality and marketing ideas with our clients to create clarity, highlight issues, opportunities and create a plan of actionable steps to realise their ideas.</p>
                    </div>
                </div>

                <div className={classes.headerContent}>
                    <GamesIcon className={classes.headerIcon}/>
                    <div>
                        <h3 className={classes.subHeader}>Multi-Skilled</h3>
                        <p className={classes.subContent}>We are a multi-skilled WordPress agency with experience in business, web design, WordPress development, photography, illustration, digital marketing and many more areas which is invaluable to a small business looking to grow.</p>
                    </div>
                </div>

                <div className={classes.headerContent}>
                    <TrendingUpIcon className={classes.headerIcon} />
                    <div>
                        <h3 className={classes.subHeader}>Business Minded</h3>
                        <p className={classes.subContent}>We understand that no matter how well a website is developed or designed, its main purpose is to generate enquiries and sales. This thinking enables us to create WordPress websites that help our clients grow their business.</p>
                    </div>
                </div>

                <div className={classes.headerContent}>
                    <SettingsBackupRestoreIcon className={classes.headerIcon} />
                    <div>
                        <h3 className={classes.subHeader}>Problem Solving</h3>
                        <p className={classes.subContent}>We're natural problem solvers, a necessary skill as WordPress developers. We use these skills daily to find solutions for our clients requirements, deal with technical issues and offer clients valuable advice & solutions.</p>
                    </div>
                </div>

                <div className={classes.headerContent}>
                    <GraphicEqIcon className={classes.headerIcon} />
                    <div>
                        <h3 className={classes.subHeader}>Detailed Quotations</h3>
                        <p className={classes.subContent}>A specialist within our WordPress Agency will discuss your web design and WordPress development project with you in-depth to ensure we offer the ideal solution which we itemise within the quotation by time and cost.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hire
