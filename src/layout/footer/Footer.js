import React from "react";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import { Grid } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LeafLetMap from "../../components/leaflet-map/LeafLetMap";
import useStyles from "./styles";

const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.footerTop}>
                <div className={classes.touchWrap}>
                    <h3 className={classes.touchHeader}>Get In Touch</h3>
                    <p className={classes.touchContact}>
                        Contact us to discuss your requirement and receive a
                        quotation for your WordPress web design and development
                        project.{" "}
                    </p>
                    <h3 className={classes.addressHeader}>Address</h3>
                    <h4 className={classes.addressName}>WP Agency London</h4>
                    <p className={classes.addressContact}>
                        20 Jerusalem Passage, London EC1V 4JP
                    </p>
                    <h3 className={classes.phone}>Phone Number</h3>
                    <div className={classes.phoneWrap}>
                        <PhoneAndroidIcon className={classes.phoneIcon} />
                        <span className={classes.phoneSpan}>020 7126 8370</span>
                    </div>

                    <h3 className={classes.email}>Email</h3>
                    <div className={classes.emailWrap}>
                        <EmailIcon className={classes.emailIcon} />
                        <span className={classes.emailSpan}>
                            info@wpagency.london
                        </span>
                    </div>
                </div>

                <div className={classes.quoteWrap}>
                    <h3 className={classes.quote}>Request a Quote</h3>
                    <p className={classes.quoteContact}>
                        Please leave details about your WordPress design and
                        development project and we will contact you shortly.
                    </p>
                    <form className={classes.form}>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Phone" />
                        <textarea
                            placeholder="Message"
                            className={classes.quoteArea}
                        ></textarea>
                        <input
                            type="submit"
                            value="SEND REQUEST"
                            className={classes.quoteBtn}
                        />
                    </form>
                </div>
            </div>

            <Grid container className={classes.footerBottom}>
                <Grid
                    item
                    lg={4}
                    md={4}
                    sm={6}
                    xs={12}
                    className={classes.gridWrap}
                >
                    <h3 className={classes.fAboutTitle}>About Us</h3>
                    <p className={classes.fAboutContact}>
                        WP Agency is a London WordPress Agency offering web
                        design, WordPress development and digital marketing
                        services for businesses in and around London.
                    </p>
                    <div className={classes.fAboutScheduleWrap}>
                        <div className={classes.fAboutSchedule}>
                            <span>Monday</span>
                            <span>9:00 am – 5:30 pm</span>
                        </div>

                        <div className={classes.fAboutSchedule}>
                            <span>Tuesday</span>
                            <span>9:00 am – 5:30 pm</span>
                        </div>

                        <div className={classes.fAboutSchedule}>
                            <span>Wednesday</span>
                            <span>9:00 am – 5:30 pm</span>
                        </div>

                        <div className={classes.fAboutSchedule}>
                            <span>Thursday</span>
                            <span>9:00 am – 5:30 pm</span>
                        </div>

                        <div className={classes.fAboutSchedule}>
                            <span>Friday</span>
                            <span>9:00 am – 5:30 pm</span>
                        </div>

                        <div className={classes.fAboutSchedule}>
                            <span>Saturday</span>
                            <span>Closed</span>
                        </div>

                        <div className={classes.fAboutSchedule}>
                            <span>Sunday</span>
                            <span>Closed</span>
                        </div>
                    </div>
                </Grid>

                <Grid
                    item
                    lg={4}
                    md={4}
                    sm={4}
                    xs={4}
                    className={classes.gridWrap}
                    className={classes.footerLocation}
                >
                    <h3 className={classes.fLocationTitle}>Our Location</h3>
                    <LeafLetMap />
                </Grid>

                <Grid
                    item
                    lg={4}
                    md={4}
                    sm={6}
                    xs={12}
                    className={classes.gridWrap}
                >
                    <h3 className={classes.fNewsTitle}>Newsletter</h3>
                    <form className={classes.fNewsForm}>
                        <input type="text" placeholder="Your name" />
                        <input type="email" placeholder="Your e-mail address" />
                        <input
                            type="submit"
                            value="SIGN UP"
                            className={classes.fNewsBtn}
                        />
                    </form>
                </Grid>

                <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className={classes.fPolicy}
                >
                    <hr className={classes.fHr} />
                    <div className={classes.fPolicyWrap}>
                        <div className={classes.policyWrap}>
                            <span>Terms & Conditions</span>
                            <span>|</span>
                            <span>Cookie Policy</span>
                            <span>|</span>
                            <span>Privacy Policy</span>
                        </div>
                        <div className={classes.copyright}>
                            &copy; 2021 JJ Portfolio Wordpress Agency
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
