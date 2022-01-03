import React from 'react'
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from './styles'

const DesignFaq = () => {
    const classes = useStyles()
    return (
        <div className={classes.faq}>
            <h1 className={classes.header}>Frequently Asked Questions</h1>
            <p className={classes.content}>
                FAQs about WordPress web design, wireframing, images & content and how you can hire us for your next WordPress design project.
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
                            What software packages are used to design the websites?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                We used Adobe XD and Photoshop for wireframing and designs of websites. This enables us to share the website designs with our clients online for each viewing, discussion and feedback. 
                            </p>
                            <br />
                            <p>
                                Adobe XD offers many benefits over Photoshop by combining desktop and mobile designs into one file. The desktop and mobile designs can be linked to enable our clients to view the site as if it were using the website. Adobe Photoshop and Illustrator are used to create illustrations and edit photographs before importing into Adobe XD.
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
                            How are images sourced for the website design?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                Our web designers create a desktop and mobile version of every page of the website.
                            </p>
                            <br/>
                            <p>The mobile design is optimised to enable clearer viewing on a small device by rearranging or disabling design elements.</p>
                            <br/>
                            <p>A mobile specific menu is created to allow easier navigation of the website.</p>
                            <br/>
                            <p>Our London web designers work with our developer to ensure the designs are compatible with WordPress.</p>
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
                            Do you offer logo design and branding?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                               We offer branding and logo design to our clients or we can work with existing brand guidelines.
                            </p>
                            <br />
                            <p>
                                Often our client's have a logo and want to update their branding with a new colour scheme or fonts.
                            </p>
                            <br />
                            <p>
                               Our web designer at our WordPress web agency can discuss your requirements with you during the proposal stage.
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
                            Can you design the website for mobile devices?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                Every WordPress site designed by us is mobile responsive as standard. You can update and change as you go, on your browser of choice.
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
                            How is the website content written?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                The wireframing stage of the web design project will outline what content is required.
                            </p>
                            <br/>
                            <p>Often our client's will provide content and we can adjust this to fit the website.</p>
                            <br/>
                            <p>We also recommend working with an experienced copywriter to create SEO optimised content. This will help the website rank on Google and provide a professional tone to the website.</p>
                            <br/>
                            <p>We can recommend a copywriter or work with an existing copywriter.</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default DesignFaq
