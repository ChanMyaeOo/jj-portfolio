import React from 'react'
import PageTitle from '../../components/page-title/PageTitle'
import Works from '../../components/works/Works'
import WdDivider from '../../components/wd-divider/WdDivider'

const Portfolio = () => {
    return (
        <div>
            <PageTitle title="WordPress Portfolio"/>
            <WdDivider />
            <Works />
        </div>
    )
}

export default Portfolio
