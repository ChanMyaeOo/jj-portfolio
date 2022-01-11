import React from "react";
import { Link, NavLink } from "react-router-dom";
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
import './style.css'
import { HashLink } from 'react-router-hash-link';

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
        const openMenu = document.getElementById("mobile-open-menu");
        const closeMenu = document.getElementById("mobile-close-menu");
        resOverlay.style.display = "block";
        openMenu.style.display = "none";
        closeMenu.style.display = "block";
    };

    const handleMobileMenuClose = () => {
        const resOverlay = document.getElementById("mobile-nav");
        const openMenu = document.getElementById("mobile-open-menu");
        const closeMenu = document.getElementById("mobile-close-menu");
        resOverlay.style.display = "none";
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
    };

    // to handle header fixed on scroll
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        const headerElement = document.getElementById("header");
        // const resHeaderElement = document.getElementById("mobResMenuWrapper")
        if (scrolled > 300) {
            headerElement.classList.add(classes.fixedHeader);
            // resHeaderElement.classList.add(classes.fixedHeader)
        } else if (scrolled <= 300) {
            headerElement.classList.remove(classes.fixedHeader);
            // resHeaderElement.classList.remove(classes.fixedHeader)
        }
    };

    window.addEventListener("scroll", toggleVisible);

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

            <div className={classes.navbar} id="header">
                <Link to="/">
                    <img
                        src={HeaderLogo}
                        alt="header-logo"
                        className={classes.logoImg}
                    />
                </Link>

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

                    {/* for i pad view */}
                    <ul className={classes.headerResMenu} id="res-overlay">
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">our work</Link>
                        </li>
                        <li>
                            <Link to="/web-design">web design</Link>
                        </li>
                        <li className={classes.resWordPressNav}>
                            <Link to="/wordpress-development">
                                wordpress <AddIcon />
                            </Link>
                            <ul className={classes.resSubNav}>
                                <li><HashLink smooth to="/wordpress-development#wd-hosting">WordPress Hosting</HashLink></li>
                                <li><HashLink smooth to='/wordpress-development#plugins'>WordPress Plugins</HashLink></li>
                                <li><Link to='/wd-audits'>WordPress Audits</Link></li>
                            </ul>
                        </li>
                        <li className={classes.resWordPressNav}>
                            <Link to="/plugins">
                                plugins <AddIcon />
                            </Link>
                            <ul className={classes.resSubNav}>
                                <li><HashLink smooth to='/wordpress-development#api-integrations'>WordPress API Integrations</HashLink></li>
                                <li><HashLink smooth to='/wordpress-development#wd-multilingual'>WordPress Multilingual</HashLink></li>
                                <li><Link to="/job-manager-development">WP Jobs Manager Development</Link></li>
                                <li><Link to="/booking-plugins">WordPress Booking Plugins</Link></li>
                                <li><Link to="/gravity-forms">Gravity Forms Development</Link></li>
                            </ul>
                        </li>
                        <li style={{ paddingBottom: "15px" }}>
                            <Link to="/digital-marketing">seo & ppc</Link>
                        </li>
                    </ul>
                </div>

                {/* for desktop view */}
                <ul className={classes.navList}>
                    <li>
                        <NavLink to="/about" activeClassName="active">about</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">our work</NavLink>
                    </li>
                    <li>
                        <NavLink to="/web-design">web design</NavLink>
                    </li>
                    <li className={classes.wordPressNav}>
                        <NavLink to="/wordpress-development">
                            wordpress <AddIcon />
                        </NavLink>
                        <ul className={classes.subNavList}>
                            <HashLink smooth to='/wordpress-development#wd-hosting'><li>WordPress Hosting</li></HashLink>
                            <HashLink smooth to='/wordpress-development#plugins'><li>WordPress Plugins</li></HashLink>
                            <Link to='/wd-audits'><li>WordPress Audits</li></Link>
                        </ul>
                    </li>
                    <li className={classes.wordPressNav}>
                        <NavLink to="/plugins">
                            plugins <AddIcon />
                        </NavLink>
                        <ul className={classes.subNavList}>
                            <HashLink smooth to='/wordpress-development#api-integrations'><li>WordPress API Integrations</li></HashLink>
                            <HashLink smooth to='/wordpress-development#wd-multilingual'><li>WordPress Multilingual</li></HashLink>
                            <Link to="/job-manager-development"><li>WP Jobs Manager Development</li></Link>
                            <Link to="/booking-plugins"><li>WordPress Booking Plugins</li></Link>
                            <Link to='/gravity-forms'><li>Gravity Forms Development</li></Link>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/digital-marketing">seo & ppc</NavLink>
                    </li>
                </ul>

                <div className={classes.buttonWrap}>
                    <Link to="/contact" className={classes.navButton}>get a quote</Link>
                </div>
            </div>

            <Link to="/">
                <img
                    src={HeaderLogo}
                    alt="header logo"
                    className={classes.mobileHeaderLogo}
                />
            </Link>

            {/* for mobile view */}
            <ul className={classes.mobileNavList} id="mobile-nav">
                <li style={{ paddingTop: "3px", marginTop: "15px" }}>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/portfolio">Our Work</Link>
                </li>
                <li>
                    <Link to="/web-design">Web Design</Link>
                </li>
                <li className={classes.mobileWordpress}>
                    <Link to="/wordpress-development">
                        WordPress <ExpandMoreIcon />
                    </Link>
                    <ul className={classes.mobileSubNavList}>
                        
                        <li><HashLink smooth to="/wordpress-development#wd-hosting">WordPress Hosting</HashLink></li>
                        <li><HashLink smooth to="/wordpress-development#plugins">WordPress Plugins</HashLink></li>
                        <li style={{ paddingBottom: "10px" }}>
                            <Link to="wd-audits">WordPress Audits</Link>
                        </li>
                    </ul>
                </li>
                <li className={classes.mobileWordpress}>
                    <Link to="/plugins">
                        Plugins <ExpandMoreIcon />
                    </Link>
                    <ul className={classes.mobileSubNavList}>
                        <li><HashLink to="/wordpress-development#api-integrations">WordPress API Integrations</HashLink></li>
                        <li><HashLink to="/wordpress-development#wd-multilingual">WordPress Multilingual</HashLink></li>
                        <li><Link to="/job-manager-development">WP Jobs Manager Development</Link></li>
                        <li><Link to="/booking-plugins">WordPress Booking Plugins</Link></li>
                        <li style={{ paddingBottom: "10px" }}>
                            <Link to="/gravity-forms">Gravity Forms Development</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="digital-marketing/">SEO & PPC</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Get a Quote</Link>
                </li>
            </ul>
            <div className={classes.mobileMenu}>
                <a href="tel:09976742687" className={classes.callBtn}>
                    <PhoneIcon />
                    Call
                </a>

                <a href="mailto:jjportfolio1111@gmail.com" className={classes.emailBtn}>
                    <EmailIcon />
                    Email
                </a>

                <div>
                    <MenuIcon
                        id="mobile-open-menu"
                        className={classes.mobileOpenIcon}
                        onClick={handleMobileMenuOpen}
                    />
                    <CloseIcon
                        id="mobile-close-menu"
                        className={classes.mobileCloseIcon}
                        onClick={handleMobileMenuClose}
                    />
                    Menu
                </div>
            </div>
        </>
    );
};

export default Header;
