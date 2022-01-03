import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "70%",
        margin: '0 auto',
        marginTop: '40px'
    },
    heading: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#212236'
    },
    accordion: {
        marginTop: '15px'
    },
    expandIcon: {
        color: '#212236'
    },
    faq: {
        backgroundColor: "#2a3950",
        marginTop: "20px",
        padding: "60px 0",
    },
    header: {
        fontSize: "52px",
        textAlign: "center",
        fontWeight: "bold",
        color: "#fff",
        marginBottom: "30px",
    },
    content: {
        fontSize: "21px",
        color: "#fff",
        textAlign: "center",
        width: "80%",
        margin: "0 auto",
        lineHeight: "1.5rem",
    },
    // Responsive Design
    [theme.breakpoints.down("md")]: {
        header: {
            fontSize: '34px'
        }
    },
    [theme.breakpoints.down("xs")]: {
        header: {
            width: '95%'
        },
        content: {
            width: '95%'
        },
        root: {
            width: '95%'
        }
    },
}));

export default useStyles;
