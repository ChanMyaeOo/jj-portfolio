import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    experts: {
        backgroundColor: '#f3f3f3',
        padding: '80px 0'
    },
    header: {
        fontSize: '52px',
        textAlign: 'center',
        color: '#212236',
        marginBottom: '30px'
    },
    content: {
        fontSize: '21px',
        textAlign: 'center',
        color: '#212236',
        width: '70%',
        margin: '0 auto',
        lineHeight: '1.6rem',
        marginBottom: '35px'
    },
    about: {
        background: '#fff',
        padding: '25px',
        width: '95%',
        margin: '0 auto',
        boxShadow: '0px 0px 4px 0px rgb(0 0 0 / 30%) inset',
        borderRadius: '15px',
        "& > h2": {
            fontSize: '36px',
            color: '#212236',
            fontWeight: 'bold',
            marginBottom: '10px'
        },
        "& > p": {
            color: '#2a3950',
            fontSize: '19px',
            lineHeight: '1.5rem',
            padding: '10px 0'
        }
    },
    quote: {
        display: 'block',
        padding: '10px 15px',
        color: '#fff',
        backgroundColor: '#f64668',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        width: 'fit-content',
        textDecoration: 'none',
        borderRadius: '20px',
        margin: '20px 0'
    },
    // Responsive Design
    [theme.breakpoints.down('md')]: {
        header: {
            fontSize: '34px'
        },
        about: {
            "& > h2": {
                fontSize: '24px'
            }
        }
    },
    [theme.breakpoints.down('sm')]: {
        content: {
            width: '95%'
        }
    },
    [theme.breakpoints.down('xs')]: {
       header: {
           fontSize: '32px'
       },
       content: {
           fontSize: '18px'
       },
       about: {
           "& > p": {
               fontSize: '18px'
           }
       }
    },
}));

export default useStyles;
