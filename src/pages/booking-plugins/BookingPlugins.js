import React from 'react'
import PageTitle from '../../components/page-title/PageTitle'
import WdAgency from '../../components/wd-agency/WdAgency'
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import GroupIcon from '@material-ui/icons/Group';
import WdDivider from '../../components/wd-divider/WdDivider'

const BookingPlugins = () => {
    const agFactTitle1 = "Class Booking"
    const agFactTitle2 = "Event Booking"
    const agFactTitle3 = "Room Booking"
    const wdAgTitle = "Online Scheduling Plugin for WordPress"
    const wdAgContent = "Online Scheduling plugins for WordPress make online booking, customer management and check-in simple for businesses of all sizes. WordPress booking plugins are are perfect for small businesses and service companies looking to start taking appointments online."
    const wdAgBtn = "VIEW THE START BOOKING PLUGIN"
    return (
        <div>
            <PageTitle title="WordPress Booking Plugins"/>
            <WdAgency
                agFactTitle1={agFactTitle1}
                AgIcon1={RecentActorsIcon}
                agFactTitle2={agFactTitle2}
                AgIcon2={EventAvailableIcon}
                agFactTitle3={agFactTitle3}
                AgIcon3={GroupIcon}
                title={wdAgTitle}
                content={wdAgContent}
                btn={wdAgBtn}
                count={3}
            />
            <WdDivider />
        </div>
    )
}

export default BookingPlugins
