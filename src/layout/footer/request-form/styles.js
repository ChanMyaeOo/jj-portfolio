import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
        boxShadow: '10px 20px 30px 1px rgb(0 0 0 / 10%)',
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
        marginBottom: '20px',
        fontFamily: "Roboto, sans-serif"
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
    [theme.breakpoints.down('md')]: {
        // do something
    },
    [theme.breakpoints.down('xs')]: {
       quoteWrap: {
           padding: '20px'
       }
    },
}));

export default useStyles;
