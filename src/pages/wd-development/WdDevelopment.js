import React from 'react'
import WdImg1 from '../../images/wdd1.webp'
import WdImg2 from '../../images/wdd2.webp'
import WdImg3 from '../../images/wdd3.png'
import WdImg4 from '../../images/wdd4.webp'
import Hero from '../../components/hero/Hero'

const WdDevelopment = () => {
    const title = "London WordPress Developers"
    const content = "WP Agency is an Award-Winning WordPress development agency based in London. Our WordPress developers build high-performing websites using customised theme and plugins. Over 14+ years of experience – WordPress API Integration, Bug Fixes, Hosting & Support."

    return (
        <div style={{ background: '#f2f2f2'}}>
            <Hero title={title} content={content} HeroImg1={WdImg1} HeroImg2={WdImg2} HeroImg3={WdImg3} HeroImg4={WdImg4}/>
        </div>
    )
}

export default WdDevelopment
