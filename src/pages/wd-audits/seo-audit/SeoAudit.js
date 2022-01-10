import React from 'react'
import WdAgency from '../../../components/wd-agency/WdAgency'
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const SeoAudit = () => {
    const agFactTitle1 = "Onsite SEO Audit"
    const agFactContent1 = "Our Onsite SEO Audit is an analysis of each page's code and technical elements used by Google to crawl, index, and rank a website. It shows issues that prevent content from being found by search engines, guidelines for improvement, and recommendations. The service helps you create an effective SEO strategy for your WordPress website."
    const agFactTitle2 = "Backlinks Profile"
    const agFactContent2 = "Our backlink audit tool will help you identify all the backlinks pointing to every website within your WordPress website. We check if the quality links are still pointing at your website and identify low quality backlinks so that action can be taken to disavow them to stop them from being counted as a link by Google Webmaster Tools."
    const agFactTitle3 = "Google Rank Tracker"
    const agFactContent3 = "Our Rank Tracking reports monitor the position your website for a list of keywords. We compare your WordPress web site to your competitors and see their content which is creating the most traffic for them. This way you can improve your website in the areas that make an impact for your business. We create weekly ranking reports with an overview of the improvements."
    const wdAgTitle = "SEO Audit"
    const wdAgContent = "Our SEO audit includes many different diagnostic tests, including the areas of content, architecture, user experience, technical SEO, marketing, and backlinks."
    return (
        <WdAgency
                agFactTitle1={agFactTitle1}
                agFactContent1={agFactContent1}
                AgIcon1={ImageSearchIcon}
                agFactTitle2={agFactTitle2}
                agFactContent2={agFactContent2}
                AgIcon2={SettingsBackupRestoreIcon}
                agFactTitle3={agFactTitle3}
                agFactContent3={agFactContent3}
                AgIcon3={TrendingUpIcon}
                title={wdAgTitle}
                content={wdAgContent}
                count={3}
            />
    )
}

export default SeoAudit
