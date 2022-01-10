import React from 'react'
import PageTitle from '../../components/page-title/PageTitle'
import WdAgency from '../../components/wd-agency/WdAgency'
import ExtensionIcon from '@material-ui/icons/Extension';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import GroupIcon from '@material-ui/icons/Group';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import WorkIcon from '@material-ui/icons/Work';
import WdDivider from '../../components/wd-divider/WdDivider'



const JobManager = () => {
    const agFactTitle1 = "Job Applications Add-On"
    const agFactContent1 = "Candidates can apply to jobs through an application form, and employers can view and manage these job applications on their job dashboard. Employers can rate and comment on application forms, and organise them by status. Form fields can be added, edited and removed to suit your requirements."
    const agFactTitle2 = "Broadbean Integration"
    const agFactContent2 = "The Broadbean Job Manager Add-On is a WordPress plugin that, once installed and configured, allows job postings in Broadbean to appear in your WordPress website and for candidate applications received via your WordPress website to be tracked with applications received from other sources"
    const agFactTitle3 = "Job Alerts Add-On"
    const agFactContent3 = "Save time and effort by allowing registered users to create alerts. Users can create a job alert in a single click and receive new job postings via email daily, weekly or fortnightly based on a relevant keyword search. For example, a user could set up a weekly alert for all jobs in the category Finance Manager."
    const agFactTitle4 = "Bookmarks Add-On"
    const agFactContent4 = "With the bookmarks add-on, candidates can bookmark jobs and employers can bookmark resumes. Bookmarks can be given a note, making it easy to remember why you marked something for later."
    const agFactTitle5 = "LinkedIn Add-On"
    const agFactContent5 = "LinkedIn is a key part of our professional identity, a central hub for networking and showcasing profiles. In order to make applying as simple as possible, candidates can apply for a job directly from their LinkedIn profile, with no need to go through a separate application process."
    const agFactTitle6 = "Job Tags"
    const agFactContent6 = "The Jobs Tags add-on enables you to enrich your job descriptions with tags such as required skills, technologies the applicant should be proficient in and industry terms that relate to your job listing."
    const wdAgTitle = "Powerful Job Board Plugin for WordPress"
    const wdAgContent = "WP Job Manager is a lightweight plugin for adding job-board functionality to your WordPress site. It includes all the functionality you need to set up a job board including job listings, a hiring manager dashboard, and more."
    const wdAgBtn = "VIEW MORE WP JOBS MANAGER ADD-ONS"
    const btnLink = "https://wpjobmanager.com/add-ons/"
    return (
        <div>
            <PageTitle title="WP Jobs Manager Development"/>
            <WdAgency
                agFactTitle1={agFactTitle1}
                agFactContent1={agFactContent1}
                AgIcon1={ExtensionIcon}
                agFactTitle2={agFactTitle2}
                agFactContent2={agFactContent2}
                AgIcon2={RecentActorsIcon}
                agFactTitle3={agFactTitle3}
                agFactContent3={agFactContent3}
                AgIcon3={GroupIcon}
                agFactTitle4={agFactTitle4}
                agFactContent4={agFactContent4}
                AgIcon4={BookmarksIcon}
                agFactTitle5={agFactTitle5}
                agFactContent5={agFactContent5}
                AgIcon5={AccountTreeIcon}
                agFactTitle6={agFactTitle6}
                agFactContent6={agFactContent6}
                AgIcon6={WorkIcon}
                title={wdAgTitle}
                content={wdAgContent}
                btn={wdAgBtn}
                count={6}
                btnLink={btnLink}
                showAnchor={true}
            />
            <WdDivider />
        </div>
    )
}

export default JobManager
