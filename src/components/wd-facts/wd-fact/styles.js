import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wdWrap: {
        padding: '25px',
        marginBottom: '20px'
    },  
    wdFactIcon: {
        fontSize: '55px',
        color: '#f64668'
    },
    wdTitle: {
        fontSize: '22px',
        color: '#fff',
        fontWeight: 'bold',
        margin: '20px 0 15px 0'
    },
    wdContent: {
        fontSize: '18px',
        color: '#fff',
        lineHeight: '1.5rem'
    },

    // Responsive Design
    [theme.breakpoints.down('sm')]: {
       wdFactIcon: {
           fontSize: '50px'
       }
    },
    [theme.breakpoints.down('xs')]: {
       wdFactIcon: {
           fontSize: '45px'
       }
    },
}));

export default useStyles;
