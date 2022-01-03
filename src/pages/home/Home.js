import React from 'react'
// import useStyles from './styles'
import Hero from '../../components/hero/Hero'
import Business from '../../components/business/Business'
import Creating from '../../components/creating/Creating'
import Experts from '../../components/experts/Experts'
import Hire from '../../components/hire/Hire'
import Ad from '../../components/ad/Ad'
import Faq from '../../components/faq/Faq'
import HeroImg1 from "../../images/hero1.png";
import HeroImg2 from "../../images/hero2.png";
import HeroImg3 from "../../images/hero3.png";
import HeroImg4 from "../../images/hero4.png";

const Home = () => {
    const title = "London WordPress Agency"
    const content = "Strengthen your brand identity with a custom designed WordPress website with plugins and external applications integrated to increase functionality, promote your services and generate sales leads."
    const wdDesignContent = "We help companies grow their online presence through custom WordPress web design & development. Take a look at our portfolio to see what we've done in the past."
    const expMainTitle= "We are WordPress Experts"
    const expMainContent = "We are experienced WordPress agency with skills in coding, usability and SEO. We work with many industries to build websites to suit our clients specific needs."
    const expSubTitle = "We Help You Grow Online"
    const expSubPara1 = "We are a creative design & development WordPress company that is passionate in building websites to help businesses grow. Our WordPress experts design and develop responsive, SEO-optimised websites for business."
    const expSubPara2 = "We have built up our skills and experience over many years to make us a leading WordPress Agency in London. We have created websites for companies in many sectors, including financial services, healthcare, management and recruitment consultancies, the public sector, professional services and the legal sector. We understand the unique challenges of designing websites for your particular industry, and apply our knowledge to create an attractive UI."
    const expSubPara3 = "We create well-designed, sales-oriented websites. Our websites don’t just look good – they’re designed to perform and generate leads and conversions."
    const expSubPara4 = "Contact us us today to speak to a design and development specialist within our WordPress agency and discuss your project further."
    const expBtn = "get q quote"
    return (
        <div>
            <div style={{ background: '#f2f2f2'}}>
                <Hero title={title} content={content} HeroImg1={HeroImg1} HeroImg2={HeroImg2} HeroImg3={HeroImg3} HeroImg4={HeroImg4}/>
                <Business />
            </div>
            <Creating title="Creating Websites with WordPress" content={wdDesignContent}/>
            <Experts expertMainTitle={expMainTitle} expertMainContent={expMainContent} expertSubTitle={expSubTitle} expertSubPara1={expSubPara1} expertSubPara2={expSubPara2} expertSubPara3={expSubPara3} expertSubPara4={expSubPara4} expertBtn={expBtn}/>
            <Hire />
            <Faq />
        </div>
    )
}

export default Home
