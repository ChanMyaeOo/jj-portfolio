import React from 'react'
import WdAgency from '../../../components/wd-agency/WdAgency'
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';

const ContentAudit = () => {
    const agFactTitle1 = "Grammar & Spelling"
    const agFactContent1 = "Error-free communication is key to maintaining your brand reputation. Our grammar and spell checker will scan your WordPress website and create a report on issues to be addressed and amended if required. It will help ensure high levels of customer service are delivered to all audiences regardless of language."
    const agFactTitle2 = "Duplicate Content"
    const agFactContent2 = "Plagiarised and duplicate content can have a negative impact on your WordPress website's digital marketing campaigns. Our plagiarism checker can find out if your content has been stolen or your content has been copied. We also check for duplicate content within your website to ensure it is within safe parameters."
    const agFactTitle3 = "Readability"
    const agFactContent3 = "This readability audit tool will scan your WordPress web pages and check them against defined parameters checking for tone, use of passive voice, complexity, formality, clarity, paragraph length and more. This makes it easier for you to manage and plan your online content to improve the readability and customer experience."
    const wdAgTitle = "Website Content Audit"
    const wdAgContent = "By performing a content audit, you will understand your online footprint and define an actionable plan for creating more engaging pages for Google algorithms to index."
    return (
         <WdAgency
                agFactTitle1={agFactTitle1}
                agFactContent1={agFactContent1}
                AgIcon1={SpellcheckIcon}
                agFactTitle2={agFactTitle2}
                agFactContent2={agFactContent2}
                AgIcon2={FileCopyIcon}
                agFactTitle3={agFactTitle3}
                agFactContent3={agFactContent3}
                AgIcon3={ChromeReaderModeIcon}
                title={wdAgTitle}
                content={wdAgContent}
                count={3}
            />
    )
}

export default ContentAudit
