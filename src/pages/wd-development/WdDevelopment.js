import React from "react";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import PowerIcon from "@material-ui/icons/Power";
import StorageIcon from "@material-ui/icons/Storage";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import WdImg1 from "../../images/wdd1.webp";
import WdImg2 from "../../images/wdd2.webp";
import WdImg3 from "../../images/wdd3.png";
import WdImg4 from "../../images/wdd4.webp";
import Hero from "../../components/hero/Hero";
import WdAgency from "../../components/wd-agency/WdAgency";
import useStyles from "./styles";
import ApiIntegration from './api-integration/ApiIntegration'
import WpMultilingual from './wp-multilingual/WpMultilingual'
import WdHosting from './wd-hosting/WdHosting'
import Stage from '../../components/stage/Stage'
import Stage1Img from '../../images/wd-dev1.png'
import Stage2Img from '../../images/wd-dev2.png'
import Stage3Img from '../../images/wd-dev3.png'
import Stage4Img from '../../images/wd-dev4.png'
import WdDivider from '../../components/wd-divider/WdDivider'
import AutorenewIcon from '@material-ui/icons/Autorenew';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import RateReviewIcon from '@material-ui/icons/RateReview';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import MmsIcon from '@material-ui/icons/Mms';
import WdFacts from '../../components/wd-facts/WdFacts'
import Creating from '../../components/creating/Creating'
import Experts from '../../components/experts/Experts'
import WdDevFaq from './wd-dev-faq/WdDevFaq'



const WdDevelopment = () => {
    const classes = useStyles();
    const title = "London WordPress Developers";
    const content =
        "WP Agency is an Award-Winning WordPress development agency based in London. Our WordPress developers build high-performing websites using customised theme and plugins. Over 14+ years of experience ??? WordPress API Integration, Bug Fixes, Hosting & Support.";
    const wdAgTitle = "WordPress Development Agency";
    const wdAgContent =
        "We???re a London WordPress development agency who create bespoke projects, building user friendly WordPress websites and optimising their performance. Whether you???re a new or established business, we can help grow your online presence.";
    const wdAgBtn = "Discuss your project with our developers";
    const agFactTitle1 = "WordPress Development";
    const agFactContent1 =
        "We specialise in WordPress development of customised themes and plugins to create WordPress websites based on design files. We also integrate new features and web applications into existing WordPress websites.";
    const agFactTitle2 = "WordPress API Integration";
    const agFactContent2 =
        "WordPress API Integration allows us to connect external applications to your WordPress site via an API, enabling the interaction of booking platforms, job boards, payment gateways, interactive maps, video and CRM systems.";
    const agFactTitle3 = "WordPress Hosting & Support";
    const agFactContent3 =
        "WordPress hosting and support from WP Engine and Cloudflare including fast, reliable servers tailored for WordPress sites, daily backups with CDN and caching for faster website loading, SSL certificates for secure load times.";
    const agFactTitle4 = "WordPress Audit";
    const agFactContent4 =
        "Our intelligent WordPress Audit works by checking for a large number of issues in a WordPress site for issues such as broken links, large images, slow page loading time and missing meta descriptions and titles, among other problems.";
    const agFactTitle5 = "WordPress Optimisation";
    const agFactContent5 =
        "We work on your site and improve the loading speed by removing duplicate code from themes, optimising images, removing unused CSS and JS files from your site and optimising your server configuration to help bring you a faster website.";
    const agFactTitle6 = "WordPress Multisite";
    const agFactContent6 =
        "WordPress multisite networks allows multiple subsides to be managed from a single install. Each subsite is independent but takes advantage of the core features of the main WordPress site including themes, widgets and plugins.";
    const stagePara1 = "The WordPress theme is selected and custom developed to fit the functionality requirements of the website design files."
    const stagePara2 = "WordPress theme selection may also differ from a recruitment or bookings websites to another, depending upon the various other functionalities it comes with."
    const stagePara3 = "We select the WordPress plugins to suit your website needs. We tend to use the most popular plugins available to ensure compatibility and future updates and support."
    const stage2Para1 = "Our WordPress developer integrates the web design files in to the selected WordPress theme along with all required WordPress plugins."
    const stage2Para2 = "Elementor Pro is a blazing fast and very flexible page builder that works seamlessly with the WordPress. We use this to setup page and post templates which are configured to work responsively on mobile, tablet and desktop computers."
    const stage2Para3 = "External applications are integrated and tested to ensure compatibility with all installed WordPress plugins. We have a high focus on code quality, cross browser testing and data security."
    const stage3Para1 = "Content is the most important part of every website. We ensure text and images are populated in posts, pages, image galleries and WooCommerce products efficiently."
    const stage3Para2 = "For WordPress website with a significant amount of content such as eCommerce sites, we use an application to automatically populate the website to ensure consistency and save time."
    const stage3Para3 = "Our WordPress developers can also import content from another website using our advanced content migration tools."
    const stage4Para1 = "Our Quality Assurance Testing is the final protocol we follow to ensure the best results with your website before launch."
    const stage4Para2 = "Usability Testing:  We know how important it is to have a great user experience which is why we choose to run a visual check for any design errors, missing content, correct colours and fonts used, images and icons sized correctly and cross browser tests to ensure the WordPress website displays correctly on all devices."
    const stage4Para3 = "Performance Testing:  We run a set of performance tests on all new WordPress websites to ensure they run at optimal speed. We employ a number of best practices throughout the planning and development stages which dramatically improve performance across multiple devices, browser types, and connection speeds."
    const wdFTitle1 = "Image Compression"
    const wdFContent1 = "Image size is usually the main reason for a slow website. We configure lossless image compression plugins as part of our website speed optimisation."
    const wdFTitle2 = "Map Plugins"
    const wdFContent2 = "Store locations, directions to your office or hiking routes can be added to a map and used as an interactive tool for your website visitors increasing user engagement."
    const wdFTitle3 = "SEO Plugins"
    const wdFContent3 = "Optimising your website for search engines is essential to effectively market your website so we configure SEO plugins to maximise your search rankings."
    const wdFTitle4 = "Review Plugins"
    const wdFContent4 = "Reviews of your products or services taken from Google or similar trusted websites can be displayed in a carousel with integrated microdata for SEO."
    const wdFTitle5 = "E-commerce"
    const wdFContent5 = "The WooCommerce plugin converts your website into a sophisticated e-commerce platform to enable visitors to buy directly from your website."
    const wdFTitle6 = "Hero Slider"
    const wdFContent6 = "Sliders are used to introduce a page with one of several images sliding across to show your visitors the range of services, features and benefits your company can provide."
    const wdFTitle7 = "Pricing Table"
    const wdFContent7 = "Allow your website visitors to see the packages you offer with your services, the price and value you offer along with a call to action button."
    const wdFTitle8 = "Contact Forms"
    const wdFContent8 = "Contact forms with set field are essential to gain sales leads from your website by giving visitors the opportunity to easily contact you with relevant details."
    const factTitle= "We Enhance WordPress with Plugins"
    const factContent = "WordPress plugins extend the capabilities of a WordPress website or blog with additional features and functionality. Our WordPress developer will help you choose the right plugins based on your needs and industry."
    const wdCreateTitle = "Developing Websites With WordPress"
    const wdCreateContent = "We create a high-performing and easily-managed WordPress websites with the flexibility of a drag-and-drop Page Builder that is responsive to provide an optimum viewing experience for website visitors on desktop, tablet and mobile devices. "
    const expMainTitle = "More than Just a WordPress Development Agency"
    const expMainContent = "We really love to code and building WordPress themes and Plugins is what we do best. We have developing WordPress websites sites since 2010 giving us a unique perspective on web development from front to backend"
    const expSubTitle = "WordPress Development Done Right"
    const expSubPara1 = "We are a technically and creatively skilled WordPress development agency that specialises in building websites to help you succeed. We design responsive, scalable, SEO-optimised websites that are developed with WordPress."
    const expSubPara2 = "Our expertise and approach can be applied to the specific demands and nuances in your industry. We???ve worked with many sectors, including professional services, financial services, management and recruitment consultancies, the public sector, the legal sector and healthcare. "
    const expSubPara3 = "We develop WordPress and WooCommerce websites using Elementor, WP Bakery or Divi page builders along with custom WordPress themes and plugin development."
    const expSubPara4 = "Please us to discuss your WordPress development project further and provide you with a quotation."
    const expBtn = "get q quote"
    return (
        <div style={{ background: "#f2f2f2" }}>
            <Hero
                title={title}
                content={content}
                HeroImg1={WdImg1}
                HeroImg2={WdImg2}
                HeroImg3={WdImg3}
                HeroImg4={WdImg4}
            />

            <WdAgency
                agFactTitle1={agFactTitle1}
                agFactContent1={agFactContent1}
                AgIcon1={DeveloperBoardIcon}
                agFactTitle2={agFactTitle2}
                agFactContent2={agFactContent2}
                AgIcon2={PowerIcon}
                agFactTitle3={agFactTitle3}
                agFactContent3={agFactContent3}
                AgIcon3={StorageIcon}
                agFactTitle4={agFactTitle4}
                agFactContent4={agFactContent4}
                AgIcon4={ListAltIcon}
                agFactTitle5={agFactTitle5}
                agFactContent5={agFactContent5}
                AgIcon5={DirectionsRunIcon}
                agFactTitle6={agFactTitle6}
                agFactContent6={agFactContent6}
                AgIcon6={CompareArrowsIcon}
                title={wdAgTitle}
                content={wdAgContent}
                btn={wdAgBtn}
                count={6}
            />

            <WdDivider />
            <div className={classes.wdProcessWrap}>
                <h3 className={classes.processTitle}>
                    The Process of building a WordPress site
                </h3>
                <p className={classes.processContent}>
                    Our WordPress development process helps us build robust,
                    scalable sites that run fast. Our methods of customising
                    WordPress, along with our favourite tools for WordPress
                    development, help us deliver innovative platforms that can
                    scale to fit your needs. A typical WordPress development
                    process includes:
                </p>
            </div>
            <WdDivider />

            <Stage stage="Stage 1" title="WordPress Theme & Plugin Selection" paraCount={3} para1={stagePara1} para2={stagePara2} para3={stagePara3} stageBtn="discuss your wordpress plugin requirements" stageImgUrl={Stage1Img}/>
            <WdDivider />
            <Stage stage="Stage 2" title="WordPress Development" paraCount={3} para1={stage2Para1} para2={stage2Para2} para3={stage2Para3} stageBtn="arrange a call with our wordpress developer" stageImgUrl={Stage2Img}/>
            <WdDivider />
            <Stage stage="Stage 3" title="WordPress Content Population" paraCount={3} para1={stage3Para1} para2={stage3Para2} para3={stage3Para3} stageBtn="get a wordpress development quote" stageImgUrl={Stage3Img}/>
            <WdDivider />
            <Stage stage="Stage 4" title="Quality Assurance Testing" paraCount={3} para1={stage4Para1} para2={stage4Para2} para3={stage4Para3} stageBtn="learn more about our wordpress audits" stageImgUrl={Stage4Img}/>
            <div id="plugins" style={{ width: '100%', height: '2px', marginBottom: '40px'}}></div>
            <WdDivider />
            <WdFacts
                showBtn={true}
                factTitle1={wdFTitle1}
                factContent1={wdFContent1}
                factTitle2={wdFTitle2}
                factContent2={wdFContent2}
                factTitle3={wdFTitle3}
                factContent3={wdFContent3}
                factTitle4={wdFTitle4}
                factContent4={wdFContent4}
                factTitle5={wdFTitle5}
                factContent5={wdFContent5}
                factTitle6={wdFTitle6}
                factContent6={wdFContent6}
                factTitle7={wdFTitle7}
                factContent7={wdFContent7}
                factTitle8={wdFTitle8}
                factContent8={wdFContent8}
                title={factTitle}
                content={factContent}
                factIcon1={AutorenewIcon}
                factIcon2={EditLocationIcon}
                factIcon3={YoutubeSearchedForIcon}
                factIcon4={RateReviewIcon}
                factIcon5={LocalGroceryStoreIcon}
                factIcon6={PhotoLibraryIcon}
                factIcon7={InsertChartIcon}
                factIcon8={MmsIcon}
            />
            <WdDivider />
            <div id="api-integrations" style={{ width: '100%', height: '2px', marginBottom: '40px'}}></div>
            <ApiIntegration />
            <WdDivider />
            <div id="wd-multilingual" style={{ width: '100%', height: '2px', marginBottom: '40px'}}></div>
            <WpMultilingual />
            <WdDivider />
            <Creating 
                title={wdCreateTitle}
                content={wdCreateContent}
            />
            <WdDivider />
            <Experts
                expertMainTitle={expMainTitle}
                expertMainContent={expMainContent}
                expertSubTitle={expSubTitle}
                expertSubPara1={expSubPara1}
                expertSubPara2={expSubPara2}
                expertSubPara3={expSubPara3}
                expertSubPara4={expSubPara4}
                expertBtn={expBtn}
            />
            <WdDivider/>
            <WdHosting/>
            <WdDivider/>
            <WdDevFaq/>
            <WdDivider/>
        </div>
    );
};

export default WdDevelopment;
