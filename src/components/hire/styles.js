import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    hire: {
        margin: '60px 0'
    },
    header: {
        fontSize: '52px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#212236',
        marginBottom: '30px'
    },
    headerContentWrap: {
        width: '95%',
        display: 'flex',
        justifyContent: 'space-around',
        margin: '0 auto',
        flexWrap: 'wrap'
    },
    headerContent: {
        display: 'flex',
        maxWidth: '400px',
        padding: '20px'
    },
    headerIcon: {
        fontSize: '50px',
        color: '#f64668',
        marginRight: '20px'
    },
    subHeader: {
        fontSize: '24px',
        marginBottom: '10px',
        fontWeight: 'bold',
        color: '#212236'
    },
    subContent: {
        fontSize: '18px',
        lineHeight: '1.5rem',
        color: '#2a3950',
    },

    // Responsive Design
    [theme.breakpoints.down('md')]: {
        header: {
            fontSize: '34px'
        }
    },
    [theme.breakpoints.down('sm')]: {
        headerContent: {
            maxWidth: '350px'
        },
        subContent: {
            textAlign: 'justify'
        }
    },
    [theme.breakpoints.down('xs')]: {
       // do something
    },
}));

export default useStyles;
