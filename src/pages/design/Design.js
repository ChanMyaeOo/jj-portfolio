import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/hero/Hero'
import WpDesign1 from '../../images/wp-design1.png'
import WpDesign2 from '../../images/wp-design2.webp'
import WpDesign3 from '../../images/wp-design3.webp'
import WpDesign4 from '../../images/wp-design4.webp'
import Stage from '../../components/stage/Stage'
import Stage1Img from '../../images/wd-stage1.png'
import Stage2Img from '../../images/wd-stage2.png'
import Stage3Img from '../../images/wd-stage3.png'
import Stage4Img from '../../images/wd-stage4.png'
import Stage5Img from '../../images/wd-stage5.png'
import Stage6Img from '../../images/wd-stage6.png'
import Stage7Img from '../../images/wd-stage7.png'
import useStyles from './styles'
import WdFacts from '../../components/wd-facts/WdFacts'
import DesignFaq from './design-faq/DesignFaq'
import Creating from '../../components/creating/Creating'
import Experts from '../../components/experts/Experts'

import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const Design = () => {
    const title = "London WordPress Web Design"
    const content = "WP Agency is an Award-Winning London web design agency. We design and develop beautiful high-performing WordPress websites that generate leads. We work with you to break down your goals and find solutions that match your needs and budget."
    const classes = useStyles()
    const stagePara1 = "We aim to understand your business by researching your business and market to give us a better understanding of what you’re all about and what your customers want."
    const stagePara2 = "We go through an extensive discovery phase to find out exactly what our clients need. Our web designer carries out research on your products, services, details of your company along with your local area in which you are targeting your services. We research your competitors, what they have done well and what areas might need improvement."
    const stagePara3 = "Further to this, we will learn who your target audience are, how they might better find you online, what search words they use to find what they are looking for then create a strategic plan for your WordPress website design that will be engaging, speak directly to your target market and encourage interactions with the company."
    const stage2Para1 = "Wireframing is an important part of web design process. Wireframes demonstrate the website structure, hierarchy and content layout of a website and how the information on a website will flow through its pages."
    const stage2Para2 = "Wireframe design is a collaborative process enabling clients & our WordPress web designer to step back and consider the bigger picture before adding colours, text, images and illustrations."
    const stage2Para3 = "Wireframes let you review prototypes earlier in the website design process, provide feedback, test ideas and preserve time for the web design phase and fine-tuning."
    const stage2Para4 = "Speak to a web designer in our London WordPress team to discuss your project further."
    const stage3Para1 = "Deciding which colours will work best for your WordPress website design is an important decision, one that can make or break the website’s user experience."
    const stage3Para2 = "The right colour palette can set the tone and mood of your website. It can, literally, transform a website from boring to vibrant and engaging. The wrong colour palette however could drive users away by conveying the wrong message or giving off a bad user experience."
    const stage3Para3 = "Our web designer will create colour palette suited to your business or use an existing brand style guide."
    const stage3Para4 = "Contact us to discuss project requirements for development and web design with our London based web designer."
    const stage4Para1 = "The reason that typeface and font choice is so important for your brand or company is that you want your fonts to evoke positive emotions and provide easy readability at the same time."
    const stage4Para2 = "Choosing a font that has a certain feel may not fit with your industry if it’s too casual or too modern. When you look at financial advising, you want your brand to be taken seriously by the consumer. Therefore, your font choice should reflect this sentiment."
    const stage4Para3 = "We select the ideal font combinations for your WordPress web design or we can use an existing brand style guide."
    const stage4Para4 = "Call us to speak to a web designer from our London WordPress agency to discuss your project further."
    const stage5Para1 = "Photographs on a website can tell a story and can be used to illustrate a point. They give people an idea of what the product is like and the benefit they may gain from using that product or service."
    const stage5Para2 = "Images such as these also help people visualise an item, which means they’re more likely to go ahead and buy it. People respond emotionally to images on your site, which makes them important components of an effective website."
    const stage5Para3 = "Images can be sourced from a photographer or Adobe Stock or similar image library chosen by our WordPress web designer."
    const stage5Para4 = "Speak to a web designer at our London office to discuss your project further."
    const stage6Para1 = "Web Illustration can be anything from simple cartoons reminiscent of the olden days, the big cowboy eared mouse, or even something more complex, like a series of icons representing your products or services."
    const stage6Para2 = "The advantage of using illustration in your web design is that you have a way of connecting with your customers on a much more personal level."
    const stage6Para3 = "We can create illustrations or our WordPress web designers can customise illustrations and icons from Adobe Stock or similar illustration libraries."
    const stage6Para4 = "Speak to a WordPress web designer at our London WordPress Agency to discuss your project further."
    const stage7Para1 = "As smartphones and tablets become more prevalent, web designers and developers face a new challenge: designing for all screen sizes. Responsive web design is the solution to that problem."
    const stage7Para2 = "It’s the practice of building a website that is flexible and can fit into any screen size without losing content or layout clarity. Also known as mobile-first development, responsive design aims to serve a single website to users with different devices, platforms and browsers."
    const stage7Para3 = "We design all websites using Adobe XD to create and present responsive website designs that are uploaded to an website for review and feedback."
    const stage7Para4 = "Arrange a call with a WordPress web designer at our London web design agency to discuss your project further."
    const wdContent = "We provide custom WordPress web design, web development and digital marketing and SEO services for businesses. View our recent web design projects to see how we've helped these companies grow their online presence, gain a competitive advantage and a good return on their investment"
    const expMainTitle= "Web Design for Businesses"
    const expMainContent = "We are experienced WordPress web designers with skills in coding, usability and SEO. We work with many industries to design websites to suit our clients specific needs."
    const expSubTitle = "We Help You Grow Online"
    const expSubPara1 = "We are a creative WordPress design agency that specialises in building websites for businesses that want to succeed. We design scalable, responsive, SEO-optimised websites that are created with WordPress."
    const expSubPara2 = "We apply our web design expertise and approach to the specific demands and nuances of your industry. We’ve worked with many sectors, including financial services, healthcare, management and recruitment consultancies, the public sector, professional services and the legal sector."
    const expSubPara3 = "Our websites don’t just look good – they’re designed to perform, generate sales leads and conversions. If you’re looking to increase your visibility, generate interest or boost revenue, our WordPress web designer can help you to achieve your goals."
    const expSubPara4 = "Contact us to discuss your WordPress project with a web designer at our London web design agency to provide you with a quotation."
    const expBtn = "request a website design quote"
    return (
        <div style={{ background: '#f2f2f2'}}>
            <Hero title={title} content={content} HeroImg1={WpDesign1} HeroImg2={WpDesign2} HeroImg3={WpDesign3} HeroImg4={WpDesign4}/>

            <div className={classes.wpContentWrap}>
                <h3 className={classes.wdTitle}>London Web Designers</h3>
                <p className={classes.wdContent}>Our London web designers create beautiful, responsive WordPress websites with engaging user experiences. We design, code and build websites from the ground up following a collaborative design and development process.</p>
            </div>

            <Stage stage="Stage 1" title="Website Research" paraCount={3} para1={stagePara1} para2={stagePara2} para3={stagePara3} stageBtn="arrange a call with our web designer" stageImgUrl={Stage1Img}/>
            <Stage stage="Stage 2" title="Wireframe Design" paraCount={4} para1={stage2Para1} para2={stage2Para2} para3={stage2Para3} para4={stage2Para4} stageBtn="contact us to discuss your project" stageImgUrl={Stage2Img}/>
            <Stage stage="Stage 3" title="Color Scheme" paraCount={4} para1={stage3Para1} para2={stage3Para2} para3={stage3Para3} para4={stage3Para4} stageBtn="request a website quotation" stageImgUrl={Stage3Img}/>
            <Stage stage="Stage 4" title="Web Typography" paraCount={4} para1={stage4Para1} para2={stage4Para2} para3={stage4Para3} para4={stage4Para4} stageBtn="arrange a call with a designer" stageImgUrl={Stage4Img}/>
            <Stage stage="Stage 5" title="Website Images & Video" paraCount={4} para1={stage5Para1} para2={stage5Para2} para3={stage5Para3} para4={stage5Para4} stageBtn="arrange a call with a designer" stageImgUrl={Stage5Img}/>
            <Stage stage="Stage 6" title="Website Illustrations & Icons" paraCount={4} para1={stage6Para1} para2={stage6Para2} para3={stage6Para3} para4={stage6Para4} stageBtn="message us to get started" stageImgUrl={Stage6Img}/>
            <Stage stage="Stage 7" title="Responsive Web Design" paraCount={4} para1={stage7Para1} para2={stage7Para2} para3={stage7Para3} para4={stage7Para4} stageBtn="start growing your business" stageImgUrl={Stage7Img}/>
            <Creating title="We Design WordPress Websites" content={wdContent}/>
            <Experts expertMainTitle={expMainTitle} expertMainContent={expMainContent} expertSubTitle={expSubTitle} expertSubPara1={expSubPara1} expertSubPara2={expSubPara2} expertSubPara3={expSubPara3} expertSubPara4={expSubPara4} expertBtn={expBtn}/>

            <WdFacts />

            <div className={classes.designRes}>
                <h3 className={classes.designResTitle}>Web Design that Looks Great on Any Screen</h3>
                <p className={classes.designResMain}>Mobile, Tablet, and Desktop – it's now possible to have a perfect website on any device! Responsive web design is an approach to web development focusing on the creation of one web site that can adapt to the device accessing it.</p>
                <br/>
                <p className={classes.designResSub}>During the design phase, we create responsive wireframes and designs using Adobe XD. These designs are linked to enable you to get a feel for the website before it is coded into WordPress and enables you to provide feedback on the website designs.</p>
                <br/>
                <p className={classes.designResSub}>Responsive design is done by reordering and resizing columns, images, text, and design elements for optimal display on desktop, tablet and mobile devices. A mobile and tablet menu is created and any elements that aren’t required on the mobile device are hidden.</p>
                <br/>
                <p className={classes.designResSub}>The image and code are optimised to ensure that your website loads quickly on a range of mobile devices, which is essential for good rankings.</p>
            </div>
            
            <DesignFaq />
        </div>
    )
}

export default Design
