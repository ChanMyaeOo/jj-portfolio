import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wpContentWrap: {
        padding: '60px 0',
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
    designRes: {
        padding: '60px 0'
    },
    designResTitle: {
        fontSize: '52px',
        color: '#212236',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '40px'
    },
    designResMain: {
        fontSize: '21px',
        color: '#212236',
        textAlign: 'center',
        width: '60%',
        margin: '25px auto',
        lineHeight: '1.8rem'
    },
    designResSub: {
        fontSize: '18px',
        color: '#2a3950',
        width: '80%',
        margin: '0 auto',
        lineHeight: '1.5rem'
    },  
    // Responsive Design
    [theme.breakpoints.down('md')]: {
       wdTitle: {
           fontSize: '34px'
       },
       designResTitle: {
           fontSize: '34px'
       },
       designResMain: {
           width: '80%'
       }
    },
    [theme.breakpoints.down('sm')]: {
        designResMain: {
            width: '90%'
        },
        designResSub: {
            width: '90%'
        }
    },
    [theme.breakpoints.down('xs')]: {
       wdTitle: {
           fontSize: '32px'
       },
       wdContent: {
           fontSize: '19px',
           width: '85%'
       },
       designResTitle: {
           fontSize: '32px'
       },
       designResMain: {
           fontSize: '19px'
       },
       designResSub: {
           fontSize: '16px',
           width: '90%'
       }
    },
}));

export default useStyles;
