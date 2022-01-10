import React from 'react'
import CodeIcon from '@material-ui/icons/Code';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import SpeedIcon from '@material-ui/icons/Speed';
import WdAgency from '../../../components/wd-agency/WdAgency'
import WdDivider from '../../../components/wd-divider/WdDivider'

const WdDevAudit = () => {
    const agFactTitle1 = "Code, Theme & Plugins Audit"
    const agFactContent1 = "The code and plugin audit will identify crashes, conflicts, errors and slow loading of your WordPress website or WordPress dashboard. We review the plugins and WordPress theme that is installed to ensure compatibility with the website and suitability of the chosen plugins. The setup of WordPress, page builder, theme and plugins will be checked and errors highlighted. The aim is to produce a report that identifies issues within your website so they can be dealt with."
    const agFactTitle2 = "Hosting & Security Audit"
    const agFactContent2 = "Our hosting and security audit will examine your current hosting setup to ensure it is the most suitable solution for your needs. We check that your server is configured correctly including the caching, memory allocation, caching, CDN, backups and SSL certificates. We test your WordPress website for security vulnerabilities on both the server and WordPress installation. We provide a feedback report that identifies issues with your hosting and recommendations to fix these."
    const agFactTitle3 = "WebSite Speed Audit"
    const agFactContent3 = "Our website speed audit will test each page on your WordPress website for loading times. We identity large image files, unused fonts, CSS and JS files or all pages along with the setup of your caching, CDN, DNS & server. This enables us to create a report on specific issues that are affecting the website and individual web page loading speed with suggestions to improve the loading speed and Google PageRank score of your WordPress website on desktop, tablet and mobile devices."
    const wdAgTitle = "WordPress Development Audit"
    const wdAgContent = "An in-depth WordPress website audit will reveal any weaknesses in your website structure, code, plugins, theme, hosting & security. We create a detailed report and recommendations to fix issues."
    return (
        <WdAgency
                agFactTitle1={agFactTitle1}
                agFactContent1={agFactContent1}
                AgIcon1={CodeIcon}
                agFactTitle2={agFactTitle2}
                agFactContent2={agFactContent2}
                AgIcon2={LockOpenIcon}
                agFactTitle3={agFactTitle3}
                agFactContent3={agFactContent3}
                AgIcon3={SpeedIcon}
                title={wdAgTitle}
                content={wdAgContent}
                count={3}
            />
    )
}

export default WdDevAudit
