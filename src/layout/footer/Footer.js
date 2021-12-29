import React from 'react'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import useStyles from './styles'

const Footer = () => {
    const classes = useStyles();
    return (
        <div>
        <div className={classes.footerTop}>
            <div className={classes.touchWrap}>
                <h3 className={classes.touchHeader}>Get In Touch</h3>
                <p className={classes.touchContact}>Contact us to discuss your requirement and receive a quotation for your WordPress web design and development project. </p>
                <h3 className={classes.addressHeader}>Address</h3>
                <h4 className={classes.addressName}>WP Agency London</h4>
                <p className={classes.addressContact}>20 Jerusalem Passage, London EC1V 4JP</p>
                <h3 className={classes.phone}>Phone Number</h3>
                <div className={classes.phoneWrap}>
                   <PhoneAndroidIcon className={classes.phoneIcon} />
                   <span className={classes.phoneSpan}>020 7126 8370</span> 
                </div>

                <h3 className={classes.email}>Email</h3>
                <div className={classes.emailWrap}>
                    <EmailIcon className={classes.emailIcon} />
                    <span className={classes.emailSpan}>info@wpagency.london</span>
                </div>
            </div>

            <div className={classes.quoteWrap}>
                <h3 className={classes.quote}>Request a Quote</h3>
                <p className={classes.quoteContact}>Please leave details about your WordPress design and development project and we will contact you shortly.</p>
                <form className={classes.form}>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Phone" />
                    <textarea placeholder="Message" className={classes.quoteArea}>

                    </textarea>
                    <input type="submit" value="SEND REQUEST" className={classes.quoteBtn} />
                </form>
            </div>
        </div>
        </div>
    )
}

export default Footer
