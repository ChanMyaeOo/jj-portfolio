import React, { useState, useEffect } from 'react'
import useStyles from './styles'

const WdHosting = () => {
    const classes = useStyles()
    const [clickCount, setClickcount] = useState(1);

    useEffect(() => {
        const classCount = document.querySelectorAll(".click");
        classCount[0].style.backgroundColor = "#f64668";
    }, [])
    const handleClick = (count, e) => {
        setClickcount(count);
        const classCount = document.querySelectorAll(".click");
        if (count === 1) {
            classCount[0].style.backgroundColor = "#f64668";
            classCount[1].style.backgroundColor = "#2a3950";
            classCount[2].style.backgroundColor = "#2a3950";
            classCount[3].style.backgroundColor = "#2a3950";
            classCount[4].style.backgroundColor = "#2a3950";
            classCount[5].style.backgroundColor = "#2a3950";
        }
        if (count === 2) {
            classCount[0].style.backgroundColor = "#2a3950";
            classCount[1].style.backgroundColor = "#f64668";
            classCount[2].style.backgroundColor = "#2a3950";
            classCount[3].style.backgroundColor = "#2a3950";
            classCount[4].style.backgroundColor = "#2a3950";
            classCount[5].style.backgroundColor = "#2a3950";
        }
        if (count === 3) {
            classCount[0].style.backgroundColor = "#2a3950";
            classCount[1].style.backgroundColor = "#2a3950";
            classCount[2].style.backgroundColor = "#f64668";
            classCount[3].style.backgroundColor = "#2a3950";
            classCount[4].style.backgroundColor = "#2a3950";
            classCount[5].style.backgroundColor = "#2a3950";
        }
        if (count === 4) {
            classCount[0].style.backgroundColor = "#2a3950";
            classCount[1].style.backgroundColor = "#2a3950";
            classCount[2].style.backgroundColor = "#2a3950";
            classCount[3].style.backgroundColor = "#f64668";
            classCount[4].style.backgroundColor = "#2a3950";
            classCount[5].style.backgroundColor = "#2a3950";
        }
        if (count === 5) {
            classCount[0].style.backgroundColor = "#2a3950";
            classCount[1].style.backgroundColor = "#2a3950";
            classCount[2].style.backgroundColor = "#2a3950";
            classCount[3].style.backgroundColor = "#2a3950";
            classCount[4].style.backgroundColor = "#f64668";
            classCount[5].style.backgroundColor = "#2a3950";
        }
        if (count === 6) {
            classCount[0].style.backgroundColor = "#2a3950";
            classCount[1].style.backgroundColor = "#2a3950";
            classCount[2].style.backgroundColor = "#2a3950";
            classCount[3].style.backgroundColor = "#2a3950";
            classCount[4].style.backgroundColor = "#2a3950";
            classCount[5].style.backgroundColor = "#f64668";
        }
    };
    return (
        <div className={classes.wdHostingWrap}>
            <h3 className={classes.hostingTitle}>WordPress Hosting & Support</h3>
            <p className={classes.hostingContent}>Fast & secure WordPress hosting for business websites with caching, global CDN, firewall, DDoS protection, SSL certificate, staging environment, daily backups & 1-click restore.</p>
            <div className={classes.hostingWrap}>
                <div className={classes.wdHostings}>
                    <p onClick={(e) => handleClick(1, e)} className="click"  >
                        Website Security
                    </p>
                    <p onClick={(e) => handleClick(2, e)} className="click" >
                        Caching & CDN
                    </p>
                    <p onClick={(e) => handleClick(3, e)} className="click" >
                        SSL Certificate
                    </p>
                    <p onClick={(e) => handleClick(4, e)} className="click"  >
                        Daily Backups
                    </p>
                    <p onClick={(e) => handleClick(5, e)} className="click" >
                        Code Optimisation
                    </p>
                    <p onClick={(e) => handleClick(6, e)} className="click" >
                        Image Optimisation
                    </p>
                </div>

                <div className={classes.wdHostingContent}>
                    {clickCount === 1 && (
                        <>
                            <div className={classes.wdHostingService}>
                                <p>Security is of utmost importance to our clients so we ensure WordPress installations are secured on multiple levels. We use enterprise-level hosting from WP Engine that detects threats and blocks attacks. </p>
                                <br/>
                                <p>Your website can be secured with multi-factor password authentication requiring a users mobile phone to gain access.</p>
                                <br/>
                                <p>We integrate WordPress websites with Cloudflare DNS to provide DDoS mitigation, Bot management and further performance and security enhancements.</p>
                            </div>
                        </>
                    )}

                    {clickCount === 2 && (
                        <>
                            <div className={classes.wdHostingService}>
                                <p>We configure all WordPress websites to work with advanced caching and a CDN to significantly reduce web page loading times. </p>
                                <br/>
                                <p>The CDN has several locations globally to deliver assets including image files to ensure international website visitors benefit from the performance enhancements.</p>          
                            </div>
                        </>
                    )}
                    

                     {clickCount === 3 && (
                        <>
                            <div className={classes.wdHostingService}>
                                <p>All WordPress websites we host include an SSL certificate. This ensures data transfer is encrypted between the website and the visitor. </p>
                                <br/>
                                <p>Google recommends all websites use an SSL certificate and will improve the rank of those that do. </p>
                                <br/>
                                <p>We can also import and existing SSL certificate or use a specific SSL certificate if required for a higher level of security.</p>
                            </div>
                        </>
                    )}

                    {clickCount === 4 && (
                        <>
                            <div className={classes.wdHostingService}>
                                <p>Your WordPress website is automatically back-up daily and copies are retained for at least 30 days.</p>
                                <br/>
                                <p>On demand backups can also be made which are useful if you need to make updates to plugins or add new functionality.</p>
                                <br/>
                                <p>Previous website backups can be restored within minutes from within the WP Engine dashboard. </p>
                                <br/>
                                <p>A staging and development server is also available which also provide daily backups. </p>
                            </div>
                        </>
                    )}

                    {clickCount === 5 && (
                        <>
                            <div className={classes.wdHostingService}>
                                <p>We optimise WordPress sites to ensure only the required JS and CSS files are loaded per page. </p>
                                <br/>
                                <p>Unused files are often automatically added by WordPress plugins and themes causing web page bloat and can significantly slow down your website.</p>
                                <br/>
                                <p>We identify those redundant files and prevent them from loading throughout the site. </p>
                                <br/>
                                <p>Code is further optimised by minifying and combining files which enhances loading times further.</p>
                            </div>
                        </>
                    )}

                    {clickCount === 6 && (
                        <>
                            <div className={classes.wdHostingService}>
                                <p>Images tend to make up the majority of a web page size and have the biggest impact on page loading times. </p>
                                <br/>
                                <p>We created several images sizes to ensure the correct size is derived to the device it is being viewed. This allows for smaller image file sizes to be delivered which can greatly speed up your website and reduce data usage.</p>
                                <br/>
                                <p>Images are also compressed with no visible loss of quality which can reduce file sizes by 50% or more. </p>
                                
                            </div>
                        </>
                    )}
                </div>

            </div>

        </div>
    )
}

export default WdHosting
