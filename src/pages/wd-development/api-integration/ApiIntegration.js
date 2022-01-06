import React from 'react'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PaymentIcon from '@material-ui/icons/Payment';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WebIcon from '@material-ui/icons/Web';
import useStyles from './styles'

const ApiIntegration = () => {
    const classes = useStyles()
    return (
        <div className={classes.apiWrap}>
                <h3 className={classes.apiTitle}>WordPress API Integration</h3>
                <p className={classes.apiContent}>Our WordPress developers create technical solutions to help you get more out of your WordPress website. We provide services for WordPress API integration to monitoring the flow of data and integrate with 3rd party applications..</p>
                <div className={classes.apiServiceWrap}>
                    <div className={classes.apiService}>
                        <MonetizationOnIcon className={classes.apiServiceIcon}/>
                        <div>
                            <h4 className={classes.apiServiceTitle}>Connect CRM System with WordPress</h4>
                            <p className={classes.apiServiceSubTitle}>Manage Customer Interactions</p>
                            <p className={classes.apiServiceContent}>Integrating a CRM with WordPress streamlines your marketing and sales efforts. In addition, a CRM will help you capture leads and nurture them from the first visit on your website.</p>
                        </div>
                    </div>

                    <div className={classes.apiService}>
                        <PaymentIcon className={classes.apiServiceIcon}/>
                        <div>
                            <h4 className={classes.apiServiceTitle}>Accept Payments with WordPress</h4>
                            <p className={classes.apiServiceSubTitle}>Accept debit or credit card purchases</p>
                            <p className={classes.apiServiceContent}>If you have a WordPress eCommerce website  and want to offer your customers online payment options, you’ll need to integrate a payment gateway like PayPal and Stripe.</p>
                        </div>
                    </div>

                    <div className={classes.apiService}>
                        <YouTubeIcon className={classes.apiServiceIcon}/>
                        <div>
                            <h4 className={classes.apiServiceTitle}>Social Media API for WordPress</h4>
                            <p className={classes.apiServiceSubTitle}>Improve Social Connections</p>
                            <p className={classes.apiServiceContent}>An app designed using a Social Media API would have access to profile information and social connections, and would allow the user to post activities directly on users’ profiles/newsfeeds, where permitted.</p>
                        </div>
                    </div>

                    <div className={classes.apiService}>
                        <WebIcon className={classes.apiServiceIcon}/>
                        <div>
                            <h4 className={classes.apiServiceTitle}>Online Booking With WordPress</h4>
                            <p className={classes.apiServiceSubTitle}>Two-way calendar sync</p>
                            <p className={classes.apiServiceContent}>Online booking systems can help you grow your business by allowing customers to make reservations, schedule classes, and book vacations directly from your WordPress website.</p>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default ApiIntegration
