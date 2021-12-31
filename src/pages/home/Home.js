import React from 'react'
// import useStyles from './styles'
import Hero from '../../components/hero/Hero'
import Business from '../../components/business/Business'
import Creating from '../../components/creating/Creating'
import Experts from '../../components/experts/Experts'
import Hire from '../../components/hire/Hire'
import Ad from '../../components/ad/Ad'
import Faq from '../../components/faq/Faq'
import HeroImg1 from "../../images/hero1.png";
import HeroImg2 from "../../images/hero2.png";
import HeroImg3 from "../../images/hero3.png";
import HeroImg4 from "../../images/hero4.png";

const Home = () => {
    const title = "London WordPress Agency"
    const content = "Strengthen your brand identity with a custom designed WordPress website with plugins and external applications integrated to increase functionality, promote your services and generate sales leads."
    return (
        <div>
            <div style={{ background: '#f2f2f2'}}>
                <Hero title={title} content={content} HeroImg1={HeroImg1} HeroImg2={HeroImg2} HeroImg3={HeroImg3} HeroImg4={HeroImg4}/>
                <Business />
            </div>
            <Creating />
            <Experts />
            <Hire />
            <Faq />
        </div>
    )
}

export default Home
