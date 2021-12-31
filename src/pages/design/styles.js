import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wpContentWrap: {
        padding: '60px 0'
    },
    wdTitle: {
        fontSize: '52px',
        color: '#212236',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '25px'
    },
    wdContent: {
        fontSize: '21px',
        color: '#212236',
        lineHeight: '1.7rem',
        textAlign: 'center',
        width: '70%',
        margin: '0 auto'
    },

    // Responsive Design
    [theme.breakpoints.down('md')]: {
       
    },
    [theme.breakpoints.down('sm')]: {
        
    },
    [theme.breakpoints.down('xs')]: {
       
    },
}));

export default useStyles;
