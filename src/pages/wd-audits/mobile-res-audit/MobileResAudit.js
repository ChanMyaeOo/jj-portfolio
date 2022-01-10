import React from 'react'
import WdAgency from '../../../components/wd-agency/WdAgency'
import ComputerIcon from '@material-ui/icons/Computer';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';

const MobileResAudit = () => {
    const agFactTitle1 = "Cross-Browser Testing"
    const agFactContent1 = "Cross Browser Testing identifies if your WordPress website works on multiple operating systems and web browsers. We test your website with the most popular web browsers including Chrome, Firefox, Safari and Microsoft Edge on a variety of operating system versions to check for alignment issues. We create a report and screen shots of the issues with recommendations to fix these."
    const agFactTitle2 = "Responsive Mobile Testing"
    const agFactContent2 = "Responsive Mobile Testing by QA Consultants helps you to identify possible misalignments in your WordPress website for different mobile operating systems including iOS and Android along with Chrome, Safari, Samsung Internet, Android Browser and Firefox. We check website alignment issues and create a report with screen shots & recommendations to fix these."
    const wdAgTitle = "Mobile Responsive Audit"
    const wdAgContent = "Our responsive audit will test and evaluate your website to make sure it works well across all devices and screen sizes. We'll look at interfaces, navigation, and interactions to make sure they meet current standards."
    return (
        <WdAgency
                agFactTitle1={agFactTitle1}
                agFactContent1={agFactContent1}
                AgIcon1={ComputerIcon}
                agFactTitle2={agFactTitle2}
                agFactContent2={agFactContent2}
                AgIcon2={MobileFriendlyIcon}
                title={wdAgTitle}
                content={wdAgContent}
                count={2}
            />
    )
}

export default MobileResAudit
