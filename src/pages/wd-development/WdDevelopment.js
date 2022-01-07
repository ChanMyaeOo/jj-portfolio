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

const WdDevelopment = () => {
    const classes = useStyles();
    const title = "London WordPress Developers";
    const content =
        "WP Agency is an Award-Winning WordPress development agency based in London. Our WordPress developers build high-performing websites using customised theme and plugins. Over 14+ years of experience – WordPress API Integration, Bug Fixes, Hosting & Support.";
    const wdAgTitle = "WordPress Development Agency";
    const wdAgContent =
        "We’re a London WordPress development agency who create bespoke projects, building user friendly WordPress websites and optimising their performance. Whether you’re a new or established business, we can help grow your online presence.";
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

            <div className={classes.wdDivider}></div>
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
            <div className={classes.wdDivider}></div>

            <ApiIntegration />

            <WpMultilingual />
        </div>
    );
};

export default WdDevelopment;
