import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footerTop: {
        backgroundColor: '#f4f4f4',
        display: 'flex',
        padding: '60px 25px',
    },
    touchWrap: {
        padding: '15px'
    },
    touchHeader: {
        fontSize: '36px',
        color: '#212236',
        marginBottom: '25px'
    },
    touchContact: {
        fontSize: '18px',
        color: '#2a3950',
        lineHeight: '1.5rem',
        marginBottom: '20px'
    },
    addressHeader: {
        fontSize: '22px',
        color: '#212236',
        marginBottom: '10px'
    },
    addressName: {
        fontSize: '17px',
        color: '#2a3950'
    },
    addressContact: {
        fontSize: '17px',
        lineHeight: '1.5rem',
        color: '#2a3950',
        marginBottom: '20px'
    },
    phone: {
        fontSize: '22px',
        color: '#212236',
        marginBottom: '5px'
    },
    phoneWrap: {
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center'
    },
    email: {
        fontSize: '22px',
        color: '#212236',
        marginBottom: '5px'
    },
    emailWrap: {
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center'
    },
    phoneSpan: {
        color: '#f64668',
        fontSize: '17px'
    },
    emailSpan: {
        color: '#f64668',
        fontSize: '17px'
    },
    phoneIcon: {
        color: '#2a3950',
        marginRight: '5px'
    },
    emailIcon: {
        color: '#2a3950',
        marginRight: '5px'
    },  
    quote: {
        fontSize: '28px',
        color: '#212236'
    },
    quoteContact: {
        fontSize: '18px',
        color: '#2a3950',
        lineHeight: '1.5rem',
        margin: '20px 0'
    }, 
    quoteWrap: {
        backgroundColor: '#fff',
        boxShadoe: '10px 20px 30px 1px rgb(0 0 0 / 10%)',
        padding: '40px',
        borderRadius: '15px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        "& > input": {
            height: '42px',
            margin: '7px 0',
            padding: '5px',
        }
    },
    quoteArea: {
        margin: '7px 0',
        minHeight: '70px',
        minWidth: '100%',
        maxWidth: '540px',
        padding: '5px',
        marginBottom: '20px'
    },

    quoteBtn: {
        background: '#f64668',
        border: 'none',
        outline: 'none',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '15px',
    },
    // Responsive Design
    [theme.breakpoints.down('sm')]: {
        footerTop: {
            flexDirection: 'column'
        },
        touchHeader: {
            fontSize: '30px'
        }
    },
    [theme.breakpoints.down('xs')]: {
       // do something
    },
}));

export default useStyles;
