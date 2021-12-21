import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

const Experts = () => {
    const classes = useStyles()
    return (
        <div className={classes.experts}>
            <h1 className={classes.header}>We are WordPress Experts</h1>
            <p className={classes.content}>We are experienced WordPress agency with skills in coding, usability and SEO. We work with many industries to build websites to suit our clients specific needs.</p>
            <div className={classes.about}>
                <h2>We Help You Grow Online</h2>
                <p>We are a creative design & development WordPress company that is passionate in building websites to help businesses grow. Our WordPress experts design and develop responsive, SEO-optimised websites for business.</p>
                <p>We have built up our skills and experience over many years to make us a leading WordPress Agency in London. We have created websites for companies in many sectors, including financial services, healthcare, management and recruitment consultancies, the public sector, professional services and the legal sector. We understand the unique challenges of designing websites for your particular industry, and apply our knowledge to create an attractive UI.</p>
                <p>We create well-designed, sales-oriented websites. Our websites don’t just look good – they’re designed to perform and generate leads and conversions. </p>
                <p>Contact us us today to speak to a design and development specialist within our WordPress agency and discuss your project further.</p>
                <Link to="/" className={classes.quote}>get a quote</Link>
            </div>
        </div>
    )
}

export default Experts
