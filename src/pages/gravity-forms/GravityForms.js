import React from 'react'
import PageTitle from '../../components/page-title/PageTitle'
import WdAgency from '../../components/wd-agency/WdAgency'
import ExtensionIcon from '@material-ui/icons/Extension';
import MoneyIcon from '@material-ui/icons/Money';
import GroupIcon from '@material-ui/icons/Group';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BugReportIcon from '@material-ui/icons/BugReport';
import WdDivider from '../../components/wd-divider/WdDivider'

const GravityForms = () => {
    const agFactTitle1 = "CRM Integration"
    const agFactContent1 = "Gravity Forms integrates with CRM software like Agile CRM, Salesforce CRM, SugarCRM, Pipedrive and Zoho CRM,. It enables you to include detailed customer information like company name, address, contact name and phone number on your forms. We can customise the forms for your specific business needs."
    const agFactTitle2 = "Currency Converter"
    const agFactContent2 = "We can create a currency converter form with Gravity form with multiple country and currency selection, country flags and currency values. You can see real-time currency conversion from a live exchange rate API. We can develop forms to your specific needs for your WordPress website."
    const agFactTitle3 = "Lead Generation Form"
    const agFactContent3 = "Lead Generation Forms can be a powerful tool for your business. We can create a variety of lead generation forms for your WordPress website with multiple design options. These forms can be tailored to your specific needs including integrating with a CRM, Newsletter and SEO & PPC campaigns with tracking."
    const agFactTitle4 = "Job Application Form"
    const agFactContent4 = "Gravity forms is ideal for creating job application forms. These can integrate with Bullhorn, the industries leading recruitment software along with Linkedin CV submission. This is an ideal solution for recruitment agencies with options to develop the forms to your specific requirements."
    const agFactTitle5 = "Instant Online Quote"
    const agFactContent5 = "Allow your website visitors to receive an instant online quote for your products and services. The quotation can work out a price based on factors such as the user's location, age and buying preferences."
    const agFactTitle6 = "Spam Filtering"
    const agFactContent6 = "The Gravity Forms Spam Filtering Extension adds the most advanced spam filtering available anywhere to your forms. Combining the power of the Akismet spam identification plugin with Gravity Forms, we can create forms that are immune to spam submissions, while ensuring that real submissions are never lost."
    const wdAgTitle = "The Most Powerful Form Plugin for WordPress"
    const wdAgContent = "Gravity Forms is a WordPress plugin that allows us to build beautiful, professional, responsive Web forms that collect valuable contact information from your site visitors. Gravity Forms has full suite of add ons that we can customise and develop to your specific needs."
    const wdAgBtn = "VIEW MORE GRAVITY FORM ADD-ONS"
    return (
        <div>
            <PageTitle title="Gravity Forms Development"/>
            <WdAgency
                agFactTitle1={agFactTitle1}
                agFactContent1={agFactContent1}
                AgIcon1={ExtensionIcon}
                agFactTitle2={agFactTitle2}
                agFactContent2={agFactContent2}
                AgIcon2={MoneyIcon}
                agFactTitle3={agFactTitle3}
                agFactContent3={agFactContent3}
                AgIcon3={GroupIcon}
                agFactTitle4={agFactTitle4}
                agFactContent4={agFactContent4}
                AgIcon4={FindInPageIcon}
                agFactTitle5={agFactTitle5}
                agFactContent5={agFactContent5}
                AgIcon5={AccountTreeIcon}
                agFactTitle6={agFactTitle6}
                agFactContent6={agFactContent6}
                AgIcon6={BugReportIcon}
                title={wdAgTitle}
                content={wdAgContent}
                btn={wdAgBtn}
                count={6}
            />
            <WdDivider />
        </div>
    )
}

export default GravityForms
