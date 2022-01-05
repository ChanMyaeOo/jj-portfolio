import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    agWrap: {
        boxShadow: '0px 0px 4px 0px rgb(0 0 0 / 30%) inset',
        padding: '25px',
        width: '380px',
        margin: '20px'
    },
    agIcon: {
        fontSize: '55px',
        color: '#f64668'
    },
    agTitle: {
        fontSize: '24px',
        color: '#212236',
        fontWeight: 'bold',
        margin: '10px 0 20px 0'
    },
    agContent: {
        fontSize: '18px',
        color: '#2a3950',
        lineHeight: '1.6rem'
    },

    // Responsive Design
    [theme.breakpoints.down('md')]: {
        // do something
    },
    [theme.breakpoints.down('sm')]: {
       agWrap: {
           width: '90%'
       }
    },
}));

export default useStyles;
