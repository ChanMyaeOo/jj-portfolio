import React from 'react'
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import CodeIcon from '@material-ui/icons/Code';
import DevicesIcon from '@material-ui/icons/Devices';
import { Link } from 'react-router-dom'
import useStyles from './styles'

const Business = () => {
    const classes = useStyles()
    return (
        <div className={classes.business}>
            <h1 className={classes.header}>WordPress Websites for Business</h1>
            <p className={classes.content}>WP Agency is an Award Winning London WordPress Agency providing amazing, responsive and bespoke websites for businesses. Our web designers works closely with you to understand your business, target audience and objectives.</p>

            <div className={classes.serviceWrap}>
                <div className={classes.service}>
                    <EmojiFoodBeverageIcon className={classes.icon} />
                    <h3 className={classes.serviceHeader}>WordPress Web Design</h3>
                    <p className={classes.serviceText}>WordPress websites that don’t just look good, they’re designed to perform, generate leads and conversions with responsive design so they work on any device.</p>
                    <Link to="/web-design" className={classes.serviceBtn}>Learn More</Link>
                </div>

                <div className={classes.service}>
                    <CodeIcon className={classes.icon}/>
                    <h3 className={classes.serviceHeader}>WordPress Development</h3>
                    <p className={classes.serviceText}>WordPress themes and plugin development customised to your needs with WordPress API integration and secure WordPress optimisation, hosting and technical support.</p>
                    <Link to="/wordpress-development" className={classes.serviceBtn}>Learn More</Link>
                </div>

                <div className={classes.service}>
                    <DevicesIcon className={classes.icon}/>
                    <h3 className={classes.serviceHeader}>Digital Marketing</h3>
                    <p className={classes.serviceText}>If you're looking to improve your Google rank and generate sales leads from your target customers, we can create and implement an effective SEO and PPC marketing strategy.</p>
                    <Link to="/digital-marketing" className={classes.serviceBtn}>Learn More</Link>
                </div>
            </div>
        </div>
    )
}

export default Business
