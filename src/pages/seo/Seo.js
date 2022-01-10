import React from 'react'
import Hero from '../../components/hero/Hero'
import SeoImg1 from '../../images/seo1.png'
import SeoImg2 from '../../images/seo2.png'
import SeoImg3 from '../../images/seo3.png'
import SeoImg4 from '../../images/seo4.png'
import WdAgency from '../../components/wd-agency/WdAgency'
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import AssessmentIcon from '@material-ui/icons/Assessment';
import useStyles from './styles'
import WdDivider from '../../components/wd-divider/WdDivider'
import Creating from '../../components/creating/Creating'

const Seo = () => {
    const classes = useStyles()
    const title = "WordPress Digital Marketing"
    const content = "We specialise in optimising your WordPress website so search engines can find you better by creating functional, user friendly WordPress websites that are optimised for Google."
    const agFactTitle1 = "Content Optimisation"
    const agFactContent1 = "Search engine optimised content is essential to increase your visibility and ranking on Google. I optimise provided content and can create content for your products and services pages."
    const agFactTitle2 = "Technical SEO"
    const agFactContent2 = "Websites are optimised to ensure they are fast, secure, well developed and excel in technical SEO audits to help rank higher on Google whilst providing a better user experience."
    const agFactTitle3 = "Reporting"
    const agFactContent3 = "Website audits analyses your website to discover technical SEO issues and how well your content is optimised compared to your competitors in order to guide improvements to your website."
    const wdAgTitle = "WordPress SEO & PPC"
    const wdAgContent = "Our WordPress SEO service will help you generate more online leads, enquiries and sales. Our skilled SEO WordPress specialists have proven results creating bespoke solutions tailored to your business needs."
    const wdCreateTitle = "Getting Results for Small Businesses"
    const wdCreateContent = "Using Search Engine Optimisation (SEO) to Increase Your Business's Visibility on the Web is Key to Driving your Digital Marketing Campaigns. Take a look at some of our clients we have helped to grow."
    return (
        <div>
            <Hero 
                title={title}
                content={content}
                HeroImg1={SeoImg1}
                HeroImg2={SeoImg2}
                HeroImg3={SeoImg3}
                HeroImg4={SeoImg4}
            />

            <WdAgency
                agFactTitle1={agFactTitle1}
                agFactContent1={agFactContent1}
                AgIcon1={FindInPageIcon}
                agFactTitle2={agFactTitle2}
                agFactContent2={agFactContent2}
                AgIcon2={ImportantDevicesIcon}
                agFactTitle3={agFactTitle3}
                agFactContent3={agFactContent3}
                AgIcon3={AssessmentIcon}
                title={wdAgTitle}
                content={wdAgContent}
                count={3}
            />

            <div className={classes.seoWrap}>
                <h3 className={classes.seoTitle}>SEO & Google Ads</h3>
                <p>Generating sales leads is a major factor in the success of website design and associated marketing campaigns including Search Engine Optimisation (SEO), Pay-per-Click (PPC) and paid social media advertising. </p>
                <br/>
                <p>Barry Reynolds has many years of experience designing websites with high converting landing pages, creating blogs that generate targetted traffic and has created successful SEO and PPC campaigns that generate significant local and national sales leads.</p>
                <br/>
                <p>The digital marketing campaigns over several years has resulted in tens of millions of pounds of additional sales for London based businesses including medical clinics, waste management, international educational events & programs and several leading skilled trades targetting the commercial sector.</p>
                <br/>
            </div>
            <WdDivider />
            <Creating 
                title={wdCreateTitle}
                content={wdCreateContent}
            />
        </div>
    )
}

export default Seo
