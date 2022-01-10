import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wdAgContainer: {
        padding: '60px 0',
        background: '#f2f2f2',
        marginTop: '20px'
    },
    wdAgWrap: {
       display: 'flex',
       flexWrap: 'wrap',
       justifyContent: 'center'
    },
    wdTitle: {
        fontSize: '52px',
        color: '#212236',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    wdContent: {
        fontSize: '21px',
        color: '#2a3950',
        width: '85%',
        margin: '35px auto',
        textAlign: 'center',
        lineHeight: '1.7rem'
    },
    wdBtn: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        textDecoration: 'none',
        fontSize: '21px',
        fontWeight: 'bold',
        color: '#f64668',
        marginBottom: '25px',
        width: 'fit-content',
        "&:hover": {
            color: '#2a3950'
        }
    },
    // Responsive Design
    [theme.breakpoints.down('md')]: {
        wdTitle: {
            fontSize: '34px'
        }
    },
    [theme.breakpoints.down('xs')]: {
       wdTitle: {
            fontSize: '32px'
        },
        wdContent: {
            fontSize: '19px'
        }
    },
}));

export default useStyles;
