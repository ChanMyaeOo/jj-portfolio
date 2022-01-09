import React from 'react'
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from './styles'

const WdDevFaq = () => {
    const classes = useStyles()
    return (
        <div className={classes.faq}>
            <h1 className={classes.header}>Frequently Asked Questions</h1>
            <p className={classes.content}>
                FAQs about WordPress Development, Plugins & Hosting with information about our services, the benefits of working with WP Agency and how you can hire us for your next WordPress development project.
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
                            Can you migrate a website to WordPress from another CMS?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                We can migrate Joomla or Drupal websites into WordPress as well as other CMS systems or static HTML websites if required.
                            </p>
                            <br />
                            <p>
                                Our WordPress developer would look at your existing website architecture and identify any outstanding issues to ensure these are resolved once the website has been migrated over. 
                            </p>
                            <br/>
                            <p>This can be a simple process for small websites or a complicated process for large websites with advanced functionality. We would ensure the migration was possible before starting the project.</p>
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
                            Do you install a page builder plugin into WordPress?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                Page builders such as Elementor, WPBakery and DIVI allow WordPress websites to be managed and built much easier and quicker than by coding alone.
                            </p>
                            <br/>
                            <p>They typically come with many elements offering functionality such as icon boxes, banners and image galleries and resize to mobile, tablet and desktop devices.</p>
                            <br/>
                            <p>The potential downsides is they can slow a website down if not properly built by an experienced WordPress developer. </p>
                            <br/>
                            <p>We ensure WordPress websites we build are optimised to only load the required elements and files to ensure fast loading times.</p>
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
                            Do you develop WordPress websites to enhance SEO?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                               We design and develop all WordPress websites with SEO in mind. This starts with the structure of your website by creating pages that target your audience on Google.
                            </p>
                            <br />
                            <p>
                                Content can be optimised to ensure the correct keywords appear on your web pages and ensure your website isn't over optimised which can have a negative impact on your rankings.
                            </p>
                            <br />
                            <p>
                               Our WordPress developers build websites to enhance technical SEO aspects the website are enhanced.
                            </p>
                            <br />
                           
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
                            Are there booking plugins available for WordPress?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                There are several booking and appointment plugins available for WordPress which are suitable for online booking of classes, holidays, hotels, activities, events and professional services.
                            </p>
                            <br/>
                            <p>Our WordPress developer can discuss your needs to decide the best plugins and solution for your needs.</p>
                            <br/>
                            <p>A popular and advanced booking plugin is <a href="https://www.startbooking.com/">Start Booking.</a> </p>
                           
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
                            Does WordPress work with eCommerce?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                WooCommerce is a very popular and powerful plugin used for WordPress eCommerce.
                            </p>
                            <br/>
                            <p>Our WordPress developers can design, develop and provide hosting and maintenance for small or large WooCommerce websites.</p>
                            <br/>
                            <p>You can learn more about <a href="https://woocommerce.com/">WooCommerce</a> here and the extensions offered.</p>

                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default WdDevFaq
