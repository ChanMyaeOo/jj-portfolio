import React from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../../components/page-title/PageTitle'
import useStyles from './styles'

const About = () => {
    const classes = useStyles()
    return (
        <div>
           <PageTitle title="About Us" />
           <div className={classes.aboutWrap}>
                <h3>About WP Agency</h3>
                <p>An award-winning WordPress agency helps you develop websites that are tailored to your business, audience, and objectives.</p>
                <br/>
                <p>We want to make the website creation process as straightforward and enjoyable as possible, no matter how complicated your idea is. Our mission is to help you kick-start your business or project by creating a stunning WordPress website that looks amazing on all devices.</p>
                <h4>WordPress Web Design For Your Business:</h4>
                <p>We are based in London, UK, providing bespoke WordPress websites for businesses around the globe. We create well coded, fast loading WordPress websites built with the latest cutting edge technology to convert your visitors into sales.</p>
                <br/>
                <p>We develop WordPress and WooCommerce websites using Elementor, WP Bakery or Divi page builders along with custom WordPress themes and plugin development.</p>
                <br/>
                <p>We have experience installing and customising hundreds WordPress plugins with functionality including job boards, booking systems, paid membership, e-commerce, forums and advanced multi-page forms. </p>
                <br/>
                <p>Please contact us using my email or contact form to discuss your WordPress theme and plugin development project further and provide you with a quotation.</p>
                <div className={classes.btnWrap}>
                    <Link to="/portfolio" className={classes.aboutWork}>view our work</Link>
                    <Link to="/contact" className={classes.aboutQuote}>get a quote</Link>
                </div>
           </div>
        </div>
    )
}

export default About
