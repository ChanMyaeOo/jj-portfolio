import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wdDivider: {
        width: "100%",
        height: "20px",
        backgroundColor: "#fff",
    },
    wdProcessWrap: {
        padding: "60px 0",
    },
    processTitle: {
        fontSize: "52px",
        color: "#212236",
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: "30px",
    },
    processContent: {
        fontSize: "21px",
        color: "#212236",
        textAlign: "center",
        lineHeight: "1.8rem",
        width: "90%",
        margin: "0 auto",
    },

    // Responsive Design
    [theme.breakpoints.down("md")]: {
        processTitle: {
            fontSize: "34px",
        },
    },
    [theme.breakpoints.down("xs")]: {
        processTitle: {
            fontSize: "32px",
        },
        processContent: {
            fontSize: "19px",
            lineHeight: "1.7rem",
        },
    },
}));

export default useStyles;
