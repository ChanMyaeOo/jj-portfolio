import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wdFactsWrap: {
        backgroundColor: '#2a3950',
        padding: '60px 30px'
    },  
    wpFactsTitle: {
        fontSize: '52px',
        color: '#fff',
        textAlign: 'center',
        marginBottom: '25px'
    },
    wpFactsContent: {
        fontSize: '21px',
        color: '#fff',
        lineHeight: '1.5rem',
        width: '67%',
        margin: '0 auto',
        textAlign: 'center',
        marginBottom: '45px'
    },
    factBtn: {
        background: '#f64668',
        color: '#fff',
        textDecoration: 'none',
        padding: '10px 18px',
        textTransform: 'uppercase',
        fontSize: '15px',
        fontWeight: 'bold',
        borderRadius: '20px',
        display: 'block',
        width: 'fit-content',
        margin: '30px auto'
    },  

    // Responsive Design
    [theme.breakpoints.down('md')]: {
        wpFactsTitle: {
            fontSize: '34px'
        }
    },
    [theme.breakpoints.down('sm')]: {
       wpFactsContent: {
           width: '80%'
       }
    },
    [theme.breakpoints.down('sm')]: {
       wpFactsTitle: {
           fontSize: '32px'
       },
       wpFactsContent: {
           fontSize: '19px'
       }
    },
}));

export default useStyles;
