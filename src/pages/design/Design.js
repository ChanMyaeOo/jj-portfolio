import React from 'react'
import Hero from '../../components/hero/Hero'
import WpDesign1 from '../../images/wp-design1.png'
import WpDesign2 from '../../images/wp-design2.webp'
import WpDesign3 from '../../images/wp-design3.webp'
import WpDesign4 from '../../images/wp-design4.webp'
import useStyles from './styles'

const Design = () => {
    const title = "London WordPress Web Design"
    const content = "WP Agency is an Award-Winning London web design agency. We design and develop beautiful high-performing WordPress websites that generate leads. We work with you to break down your goals and find solutions that match your needs and budget."
    const classes = useStyles()
    return (
        <div style={{ background: '#f2f2f2'}}>
            <Hero title={title} content={content} HeroImg1={WpDesign1} HeroImg2={WpDesign2} HeroImg3={WpDesign3} HeroImg4={WpDesign4}/>

            <div className={classes.wpContentWrap}>
                <h3 className={classes.wdTitle}>London Web Designers</h3>
                <p className={classes.wdContent}>Our London web designers create beautiful, responsive WordPress websites with engaging user experiences. We design, code and build websites from the ground up following a collaborative design and development process.</p>
            </div>
        </div>
    )
}

export default Design
