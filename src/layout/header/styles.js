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
        "& > div": {
            padding: "10px",
            color: "#f2f2f2",
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
    },

    navList: {
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& > li": {
            padding: "15px 30px",
            textTransform: "uppercase",
            cursor: 'pointer',
            "& > div": {
                display: "flex",
                alignItems: "center",
            },
        },
    },

    wordPressNav: {
        "&:hover": {
           "& $subNavList": {
               display: 'block'
           }
        }
    },

    subNavList: {
        position: "absolute",
        background: "#f1f1f1",
        listStyle: "none",
        marginLeft: "-20px",
        marginTop: "15px",
        borderRadius: '5px',
        minWidth: '200px',
        display: 'none',
        cursor: 'pointer',
        "& > li": {
            padding: "12px 20px",
            textTransform: 'none',
            cursor: 'pointer',
            "&:hover": {
                background: '#f64668',
                color: '#fff',
                cursor: 'pointer'
            }
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
    },

    headerMenuIconWrap: {
        marginTop: '15px'
    },

    headerMenuIcon: {
        display: 'none'
    },

    headerMenuCloseIcon: {
        display: 'none'
    },

    headerResMenu: {
        position: 'absolute',
        background: '#f2f2f2',
        listStyle: 'none',
        marginLeft: '-200px',
        minWidth: '250px',
        textTransform: 'uppercase',
        borderRadius: '5px',
        display: 'none',
        "& > li": {
            paddingTop: '10px',
            paddingLeft: '15px'
        },
        "& > li > div": {
            display: 'flex',
            alignItems: 'center'
        }
    },

    resSubNav: {
        listStyle: 'none',
        textTransform: 'none',
        display: 'none',
        "& > li": {
            padding: '5px 5px 5px 0'
        }
    },

    resWordPressNav: {
        "&:hover": {
            "& $resSubNav": {
                display: 'block'
            }
        }
    },

    // Responsive Design
    [theme.breakpoints.down("md")]: {
        navList: {
            display: 'none'
        },
        headerMenuIcon: {
            display: 'block'
        }
    },
    [theme.breakpoints.down('sm')]: {
        topLeftHeader: {
            "& > div": {
                padding: '5px 7px'
            }
        },
        topRightHeader: {
            "& > div": {
                padding: '5px'
            }
        }
    },
    [theme.breakpoints.down("xs")]: {
        // do something
    },
}));

export default useStyles;
