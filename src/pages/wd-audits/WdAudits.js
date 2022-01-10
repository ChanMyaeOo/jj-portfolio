import React from 'react'
import PageTitle from '../../components/page-title/PageTitle'
import WdDivider from '../../components/wd-divider/WdDivider'
import WdDevAudit from './wd-dev-audit/WdDevAudit'
import WdDesignAudit from './wd-design-audit/WdDesignAudit'
import MobileResAudit from './mobile-res-audit/MobileResAudit'
import ContentAudit from './content-audit/ContentAudit'
import SeoAudit from './seo-audit/SeoAudit'


const WdAudits = () => {
    
    return (
        <div>
            <PageTitle title="WordPress Website Audits"/>
            <WdDevAudit />
            <WdDesignAudit />
            <MobileResAudit />
            <ContentAudit />
            <SeoAudit />
            <WdDivider />
        </div>
    )
}

export default WdAudits
