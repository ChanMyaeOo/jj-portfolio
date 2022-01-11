import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        background: "#0f1d32",
        height: "45px",
    },
    topLeftHeader: {
        display: "flex",
        "& > div": {
            padding: "0px 20px",
            color: "#fff",
            display: "flex",
            alignItems: "center",
        },
    },
    topLeftIcons: {
        fontSize: "20px",
        marginRight: "5px",
        color: "#f64668",
    },
    topRightHeader: {
        display: "flex",
        alignItems: "center",
        "& > a": {
            padding: "10px",
            color: "#f2f2f2",
            textDecoration: 'none'
        },
    },
    topRightIcons: {
        fontSize: "20px",
    },

    logoImg: {
        width: "170px",
    },

    navbar: {
        display: "flex",
        justifyContent: "space-between",
        padding: "18px 10px",
        width: '100%'
    },

    navList: {
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& > li": {
            padding: "15px 30px",
            textTransform: "uppercase",
            cursor: "pointer",
            "& > a": {
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "#000",
                "&:hover": {
                    color: "#f64668",
                },
            },
        },
    },

    wordPressNav: {
        "&:hover": {
            "& $subNavList": {
                display: "block",
            },
        },
    },

    subNavList: {
        position: "absolute",
        background: "#f1f1f1",
        listStyle: "none",
        marginLeft: "-20px",
        marginTop: "15px",
        borderRadius: "5px",
        minWidth: "200px",
        display: "none",
        cursor: "pointer",
        "& > a": {
            padding: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            color: "#000",
            textTransform: "none",
            fontWeight: "400",
            borderBottom: "1px solid #ddd",
            "&:hover": {
                backgroundColor: "#f64668",
                color: "#fff",
            },
        },
    },

    buttonWrap: {
        display: "flex",
        alignItems: "center",
    },

    navButton: {
        borderRadius: "30px",
        padding: "10px 15px",
        border: "none",
        outline: "none",
        background: "#f64668",
        color: "#f2f2f2",
        fontWeight: "bold",
        height: "fit-content",
        cursor: "pointer",
        textTransform: "uppercase",
        textDecoration: "none",
        fontSize: "15px",
    },

    headerMenuIconWrap: {
        marginTop: "15px",
    },

    headerMenuIcon: {
        display: "none",
    },

    headerMenuCloseIcon: {
        display: "none",
    },

    headerResMenu: {
        position: "absolute",
        background: "#f2f2f2",
        listStyle: "none",
        marginLeft: "-200px",
        minWidth: "250px",
        textTransform: "uppercase",
        borderRadius: "5px",
        display: "none",
        "& > li": {
            paddingTop: "10px",
            paddingLeft: "15px",
        },
        "& > li > a": {
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#000",
        },
    },

    resSubNav: {
        listStyle: "none",
        textTransform: "none",
        display: "none",
        "& > li": {
            padding: "5px 5px 5px 0",
            "& > a": {
                textDecoration: "none",
                color: "#000",
            },
        },
    },

    resWordPressNav: {
        "&:hover": {
            "& $resSubNav": {
                display: "block",
            },
        },
    },

    fixedHeader: {
        zIndex: "1400",
        position: "fixed",
        top: 0,
        background: "#fff",
        boxShadow: "0px 2px 2px rgba(0,0,0,0.5)",
        maxWidth: '1280px'
    },

    mobileMenu: {
        display: "none",
        zIndex: "1000",
    },

    mobileHeaderLogo: {
        display: "none",
    },

    mobileNavList: {
        boxShadow: "0px 0px 4px 0px rgb(0 0 0 / 30%) inset",
        position: "fixed",
        bottom: 0,
        right: 0,
        marginBottom: "80px",
        marginRight: "20px",
        background: "#f2f2f2",
        minWidth: "200px",
        listStyle: "none",
        paddingLeft: "15px",
        paddingRight: "15px",
        display: "none",
        zIndex: "1000",
        "& > li": {
            minHeight: "40px",
            "& > a": {
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "#000",
            },
        },
    },

    mobileWordpress: {
        "&:hover": {
            "& $mobileSubNavList": {
                display: "block",
            },
        },
    },

    mobileSubNavList: {
        display: "none",
        "& > li": {
            listStyle: "none",
            // padding: '4px 0',
            lineHeight: "1.9rem",
            "& > a": {
                textDecoration: "none",
                color: "#000",
            },
        },
    },

    mobileCloseIcon: {
        display: "none",
    },
    callBtn: {
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#fff",
        textDecoration: "none",
    },
    emailBtn: {
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#fff",
        textDecoration: "none",
    },

    // Responsive Design
    [theme.breakpoints.down("md")]: {
        navList: {
            display: "none",
        },
        headerMenuIcon: {
            display: "block",
        },
    },
    [theme.breakpoints.down("sm")]: {
        header: {
            display: "none",
        },
        topLeftHeader: {
            "& > div": {
                padding: "5px 7px",
            },
        },
        topRightHeader: {
            "& > a": {
                padding: "5px",
            },
        },
        navButton: {
            fontSize: "14px",
        },
    },
    [theme.breakpoints.down("xs")]: {
        header: {
            display: "none",
        },
        navbar: {
            display: "none",
        },
        mobileMenu: {
            position: "fixed",
            bottom: 0,
            width: "100%",
            display: "flex",
            background: "#f64668",
            justifyContent: "space-around",
            "& > div": {
                padding: "5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "#fff",
            },
        },
        mobileHeaderLogo: {
            width: "170px",
            display: "block",
            margin: "0 auto",
            padding: "10px",
        },
    },
}));

export default useStyles;
