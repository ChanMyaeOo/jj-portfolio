import React from "react";
import ApartmentIcon from "@material-ui/icons/Apartment";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AddIcon from "@material-ui/icons/Add";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./styles";
import HeaderLogo from "../../images/header-logo.jpg";

const Header = () => {
    const classes = useStyles();

    const handleOpenMenu = () => {
        const resOverlay = document.getElementById("res-overlay");
        const openMenu = document.getElementById("open-menu");
        const closeMenu = document.getElementById("close-menu");
        resOverlay.style.display = "block";
        openMenu.style.display = "none";
        closeMenu.style.display = "block";
    };

    const handleCloseMenu = () => {
        const resOverlay = document.getElementById("res-overlay");
        const openMenu = document.getElementById("open-menu");
        const closeMenu = document.getElementById("close-menu");
        resOverlay.style.display = "none";
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
    };

    const handleMobileMenuOpen = () => {
        const resOverlay = document.getElementById("mobile-nav");
        const openMenu = document.getElementById("mobile-open-menu")
        const closeMenu = document.getElementById("mobile-close-menu")
        resOverlay.style.display = 'block'
        openMenu.style.display = 'none'
        closeMenu.style.display = 'block'
    }

    const handleMobileMenuClose = () => {
        const resOverlay = document.getElementById("mobile-nav");
        const openMenu = document.getElementById("mobile-open-menu")
        const closeMenu = document.getElementById("mobile-close-menu")
        resOverlay.style.display = 'none'
        openMenu.style.display = 'block'
        closeMenu.style.display = 'none'
    }

    return (
        <>
            <div className={classes.header}>
                <div className={classes.topLeftHeader}>
                    <div>
                        <ApartmentIcon className={classes.topLeftIcons} /> 20
                        Jerusalem Passage, London EC1V 4JP
                    </div>
                    <div>
                        <PhoneIcon className={classes.topLeftIcons} /> 020 7126
                        8370
                    </div>
                    <div>
                        <EmailIcon className={classes.topLeftIcons} />{" "}
                        info@wpagency.london
                    </div>
                </div>

                <div className={classes.topRightHeader}>
                    <div>
                        <FacebookIcon className={classes.topRightIcons} />
                    </div>
                    <div>
                        <TwitterIcon className={classes.topRightIcons} />
                    </div>
                    <div>
                        <LinkedInIcon className={classes.topRightIcons} />
                    </div>
                </div>
            </div>

            <div className={classes.navbar}>
                <img
                    src={HeaderLogo}
                    alt="header-logo"
                    className={classes.logoImg}
                />

                <div>
                    <div className={classes.headerMenuIconWrap}>
                        <MenuIcon
                            id="open-menu"
                            className={classes.headerMenuIcon}
                            onClick={handleOpenMenu}
                        />
                        <CloseIcon
                            id="close-menu"
                            className={classes.headerMenuCloseIcon}
                            onClick={handleCloseMenu}
                        />
                    </div>

                    <ul className={classes.headerResMenu} id="res-overlay">
                        <li>about</li>
                        <li>our work</li>
                        <li>web design</li>
                        <li className={classes.resWordPressNav}>
                            <div>
                                wordpress <AddIcon />
                            </div>
                            <ul className={classes.resSubNav}>
                                <li>WordPress Development</li>
                                <li>WordPress Hosting</li>
                                <li>WordPress Plugins</li>
                                <li>WordPress Audits</li>
                            </ul>
                        </li>
                        <li className={classes.resWordPressNav}>
                            <div>
                                plugins <AddIcon />
                            </div>
                            <ul className={classes.resSubNav}>
                                <li>WordPress API Integrations</li>
                                <li>WordPress Multilingual</li>
                                <li>WP Jobs Manager Development</li>
                                <li>WordPress Booking Plugins</li>
                                <li>Gravity Forms Development</li>
                            </ul>
                        </li>
                        <li style={{ paddingBottom: "15px" }}>seo & ppc</li>
                    </ul>
                </div>

                <ul className={classes.navList}>
                    <li>about</li>
                    <li>our work</li>
                    <li>web design</li>
                    <li className={classes.wordPressNav}>
                        <div>
                            wordpress <AddIcon />
                        </div>
                        <ul className={classes.subNavList}>
                            <li>WordPress Development</li>
                            <li>WordPress Hosting</li>
                            <li>WordPress Plugins</li>
                            <li>WordPress Audits</li>
                        </ul>
                    </li>
                    <li className={classes.wordPressNav}>
                        <div>
                            plugins <AddIcon />
                        </div>
                        <ul className={classes.subNavList}>
                            <li>WordPress API Integrations</li>
                            <li>WordPress Multilingual</li>
                            <li>WP Jobs Manager Development</li>
                            <li>WordPress Booking Plugins</li>
                            <li>Gravity Forms Development</li>
                        </ul>
                    </li>
                    <li>seo & ppc</li>
                </ul>

                <div className={classes.buttonWrap}>
                    <button className={classes.navButton}>get a quote</button>
                </div>
            </div>

            <img
                src={HeaderLogo}
                alt="header logo"
                className={classes.mobileHeaderLogo}
            />

            <ul className={classes.mobileNavList} id="mobile-nav">
                <li style={{ paddingTop: "10px" }}>Home</li>
                <li>Our Work</li>
                <li>Web Design</li>
                <li className={classes.mobileWordpress}>
                    <div>
                        WordPress <ExpandMoreIcon />
                    </div>
                    <ul className={classes.mobileSubNavList}>
                        <li>WordPress Development</li>
                        <li>WordPress Hosting</li>
                        <li>WordPress Plugins</li>
                        <li style={{ paddingBottom: '10px'}}>WordPress Audits</li>
                    </ul>
                </li>
                <li className={classes.mobileWordpress}>
                    <div>
                        Plugins <ExpandMoreIcon />
                    </div>
                    <ul className={classes.mobileSubNavList}>
                        <li>WordPress API Integrations</li>
                        <li>WordPress Multilingual</li>
                        <li>WP Jobs Manager Development</li>
                        <li>WordPress Booking Plugins</li>
                        <li style={{ paddingBottom: '10px'}}>Gravity Forms Development</li>
                    </ul>
                </li>
                <li>SEO & PPC</li>
                <li>About</li>
                <li>Get a Quote</li>
            </ul>
            <div className={classes.mobileMenu}>
                <div>
                    <PhoneIcon />
                    Call
                </div>

                <div>
                    <EmailIcon />
                    Email
                </div>

                <div>
                    <MenuIcon id="mobile-open-menu" className={classes.mobileOpenIcon} onClick={handleMobileMenuOpen} />
                    <CloseIcon id="mobile-close-menu" className={classes.mobileCloseIcon} onClick={handleMobileMenuClose} />
                    Menu
                </div>
            </div>
        </>
    );
};

export default Header;
