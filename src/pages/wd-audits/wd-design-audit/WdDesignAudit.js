import React from 'react'
import WdAgency from '../../../components/wd-agency/WdAgency'
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import TouchAppIcon from '@material-ui/icons/TouchApp';

const WdDesignAudit = () => {
    const agFactTitle1 = "Webpage Layout"
    const agFactContent1 = "Webpage layout reviews with us will evaluate your current site's usability and make suggestions to improve the user experience. We'll look at your web pages from a range of screens, devices and operating systems to ensure that users can find what they need quickly and easily. Using heatmaps, we'll also be able to see where users are struggling with your site – allowing us to offer valuable feedback."
    const agFactTitle2 = "Design Consistency"
    const agFactContent2 = "Our Design Audit of your WordPress website is carried out by an experienced designer paying attention to aspects such as typography, section and column spacing, icons & illustrations, video quality and colour to discover inconsistencies in the design and provide solutions to fix these. A report on the findings, along with recommendations and a list of problems on your website will also be provided for you to review."
    const agFactTitle3 = "User Conversion"
    const agFactContent3 = "A conversion audit analyzes and reports on your website and landing pages to identify areas that need improvement and possible solutions. It quantifies and provides recommendations for every key online stage of the buying process: from awareness and consideration through lead generation and completion. The end result will be additional qualified leads, increased conversion rates, as well as improved retention rates."
    const wdAgTitle = "WordPress Design Audit"
    const wdAgContent = "Our WordPress design audit helps you make the most of your WordPress theme. We pay attention to all aspects of your WordPress website design, ensuring consistency throughout."
    return (
       <WdAgency
                agFactTitle1={agFactTitle1}
                agFactContent1={agFactContent1}
                AgIcon1={ViewQuiltIcon}
                agFactTitle2={agFactTitle2}
                agFactContent2={agFactContent2}
                AgIcon2={BubbleChartIcon}
                agFactTitle3={agFactTitle3}
                agFactContent3={agFactContent3}
                AgIcon3={TouchAppIcon}
                title={wdAgTitle}
                content={wdAgContent}
                count={3}
            />
    )
}

export default WdDesignAudit
