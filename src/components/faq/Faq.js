import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./styles";

const Faq = () => {
    const classes = useStyles();
    return (
        <div className={classes.faq}>
            <h1 className={classes.header}>Frequently Asked Questions</h1>
            <p className={classes.content}>
                If you need to hire a WordPress Agency to design and develop a
                website for you, or you’re getting ready to hire a WordPress web
                designer, you’ll want to read these FAQs first.{" "}
            </p>

            <div className={classes.root}>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon className={classes.expandIcon} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                            How much does a WordPress website cost?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                The price of a WordPress site will depend on two
                                factors: whether you hire a WordPress agency or
                                freelance designers, and the cost of the
                                plugins, theme and assets.{" "}
                            </p>
                            <br />
                            <p>
                                If you choose a WordPress agency, the cost of a
                                WordPress website will depend on what features
                                you want, the size of the team and what agency
                                charges.
                            </p>
                            <br />
                            <p>
                                A freelance WordPress designer may charge less
                                but won't necessarily have all the skills needed
                                in design, WordPress development and the
                                capacity to deliver the project on time.
                            </p>
                            <br />
                            <p>
                                Business websites from an experienced freelance
                                web designer may range from £1500 to £6000+. A
                                London WordPress agency would typically start
                                from £3000 to £20,000+ or significantly more
                                depending upon the size of the website project.
                            </p>
                            <br />
                            <p>
                                You can contact WP Design to discuss your
                                WordPress project and receive a free quotation.
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon className={classes.expandIcon} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                            What types of WordPress website do you build?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                We are experts in building complex WordPress
                                websites including business websites, news and
                                blogs, online courses, portfolio site, online
                                communities, booking platforms, recruitment
                                sites, eCommerce websites etc. We build
                                WordPress websites tailored to your needs and
                                goals improving the overall user experience of
                                your website, providing technical support and
                                more. We use WordPress to build SEO friendly
                                websites that work on all devices to help our
                                clients take their business to the next level
                                online.
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon className={classes.expandIcon} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                            Do you create multilingual WordPress websites?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                A multilingual website has the ability to
                                provide information in more than one language.
                                It is a useful tool for businesses that do or
                                want to operate internationally, and can help
                                boost your site's search engine rankings.
                            </p>
                            <br />
                            <p>
                                Having a multilingual WordPress website can
                                strengthen branding, compatibility and
                                interoperability.
                            </p>
                            <br />
                            <p>
                                We design and developer WordPress websites using
                                the WPML multilingual plugin.
                            </p>
                            <br />
                            <p>
                                Get a quote by contacting us to discuss your
                                requirements.
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon className={classes.expandIcon} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                            Do you design responsive WordPress websites?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                Responsive design means that the website is
                                optimised for mobile devices, tablets and
                                desktop computers.
                            </p>
                            <br />
                            <p>
                                With responsive design, all website visitors can
                                access the content of the site depending on
                                their screen size. It has become an essential
                                requirement that all websites are optimised for
                                mobile devices.
                            </p>
                            <br />
                            <p>
                                Every WordPress website we build is mobile
                                responsive and easy to update.
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;
