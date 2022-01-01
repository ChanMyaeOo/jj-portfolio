import React from 'react'
import Hero from '../../components/hero/Hero'
import WpDesign1 from '../../images/wp-design1.png'
import WpDesign2 from '../../images/wp-design2.webp'
import WpDesign3 from '../../images/wp-design3.webp'
import WpDesign4 from '../../images/wp-design4.webp'
import Stage from '../../components/stage/Stage'
import Stage1Img from '../../images/wd-stage1.png'
import useStyles from './styles'

const Design = () => {
    const title = "London WordPress Web Design"
    const content = "WP Agency is an Award-Winning London web design agency. We design and develop beautiful high-performing WordPress websites that generate leads. We work with you to break down your goals and find solutions that match your needs and budget."
    const classes = useStyles()
    const stagePara1 = "We aim to understand your business by researching your business and market to give us a better understanding of what you’re all about and what your customers want."
    const stagePara2 = "We go through an extensive discovery phase to find out exactly what our clients need. Our web designer carries out research on your products, services, details of your company along with your local area in which you are targeting your services. We research your competitors, what they have done well and what areas might need improvement."
    const stagePara3 = "Further to this, we will learn who your target audience are, how they might better find you online, what search words they use to find what they are looking for then create a strategic plan for your WordPress website design that will be engaging, speak directly to your target market and encourage interactions with the company."
    return (
        <div style={{ background: '#f2f2f2'}}>
            <Hero title={title} content={content} HeroImg1={WpDesign1} HeroImg2={WpDesign2} HeroImg3={WpDesign3} HeroImg4={WpDesign4}/>

            <div className={classes.wpContentWrap}>
                <h3 className={classes.wdTitle}>London Web Designers</h3>
                <p className={classes.wdContent}>Our London web designers create beautiful, responsive WordPress websites with engaging user experiences. We design, code and build websites from the ground up following a collaborative design and development process.</p>
            </div>

            <Stage stage="Stage 1" title="Website Research" paraCount={3} para1={stagePara1} para2={stagePara2} para3={stagePara3} stageBtn="arrange a call with our web designer" stageImgUrl={Stage1Img}/>

        </div>
    )
}

export default Design
