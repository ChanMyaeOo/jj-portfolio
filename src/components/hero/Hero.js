import React from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useStyles from "./styles";
import HeroImg1 from "../../images/hero1.png";
import HeroImg2 from "../../images/hero2.png";
import HeroImg3 from "../../images/hero3.png";
import HeroImg4 from "../../images/hero4.png";
import { ReactComponent as Vendor1 } from '../../images/wordpress.svg'
import { ReactComponent as Vendor2 } from '../../images/gravity.svg'
import { ReactComponent as Vendor3 } from '../../images/elementor.svg'
import { ReactComponent as Vendor4 } from '../../images/woocommerce.svg'
import { ReactComponent as Vendor5 } from '../../images/yoast.svg'
import { ReactComponent as Vendor6 } from '../../images/wp-engine-1.svg'
import { ReactComponent as Vendor7 } from '../../images/cloudflare-logo.svg'

const Hero = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.hero}>
                <h1>London WordPress Agency</h1>
                <p>
                    Strengthen your brand identity with a custom designed
                    WordPress website with plugins and external applications
                    integrated to increase functionality, promote your services
                    and generate sales leads.
                </p>
                <div className={classes.heroBtnWrap}>
                    <button className={classes.heroBtn1}>view our work <ArrowForwardIosIcon className={classes.arrowIcon}/></button>
                    <button className={classes.heroBtn2}>get a quote <ArrowForwardIosIcon className={classes.arrowIcon} /></button>
                </div>

                <div className={classes.heroImgWrap}>
                    <img src={HeroImg1} alt="website preview" className={classes.heroImg}/>
                    <img src={HeroImg2} alt="website preview" className={classes.heroImg}/>
                    <img src={HeroImg3} alt="website preview" className={classes.heroImg}/>
                    <img src={HeroImg4} alt="website preview" className={classes.heroImg}/>
                </div>
            </div>
            <div className={classes.vendorImgWrap}>
                <Vendor1 style={{ width: '145px'}} className={classes.vendorImg}/>
                <Vendor2 style={{ width: '145px'}} className={classes.vendorImg}/>
                <Vendor3 style={{ width: '145px'}} className={classes.vendorImg}/>
                <Vendor4 style={{ width: '145px'}} className={classes.vendorImg}/>
                <Vendor5 style={{ width: '145px'}} className={classes.vendorImg}/>
                <Vendor6 style={{ width: '145px'}} className={classes.vendorImg}/>
                <Vendor7 style={{ width: '125px'}} className={classes.vendorImg}/>
            </div>
        </>
    );
};

export default Hero;