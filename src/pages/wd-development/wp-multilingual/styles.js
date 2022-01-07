import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    
    wpMultiWrap: {
        display: 'flex',
        padding: '10px',
        width: '90%',
        margin: '0 auto',
        marginTop: '35px'
    },
    multiTitle: {
        fontSize: '52px',
        fontWeight: 'bold',
        color: '#212236',
        textAlign: 'center',
        marginBottom: '30px'
    },
    multiContent: {
        fontSize: '21px',
        color: '#212236',
        textAlign: 'center',
        lineHeight: '1.8rem',
        width: '90%',
        margin: '0 auto'
    },
    multiServiceContainer: {
        marginTop: '40px'
    },
    multiServiceWrap: {
        display: 'flex',
        marginTop: '40px'
    },
    multiIcon: {
        fontSize: '55px',
        color: '#2a3950',
        marginRight: '20px'
    },
    multiSubTitle: {
        fontSize: '24px',
        color: '#2a3950',
        fontWeight: 'bold'
    },
    multiCont1: {
        fontSize: '22px',
        color: '#f64668',
        fontWeight: 'bold',
        margin: '5px 0 13px 0'
    },
    multiCont2: {
        fontSize: '18px',
        lineHeight: '1.7rem'
    },
    multiImg: {
        width: '100%'
    },
    multiBtn: {
        textDecoration: 'none',
        padding: '12px 20px',
        background: '#f64668',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '15px',
        borderRadius: '20px',
        marginLeft: '90px',
        display: 'block',
        marginTop: '-60px',
        width: 'fit-content'
    },
    // Responsive Design
    [theme.breakpoints.down('md')]: {
        multiTitle: {
            fontSize: '34px'
        },
        multiServiceContainer: {
            marginTop: '5px'
        },
        multiServiceWrap: {
            marginTop: '20px'
        },
        multiImg: {
            width: '450px'
        },
        multiBtn: {
            marginTop: '10px',
            margin: '0 auto'
        }
    },
    [theme.breakpoints.down('sm')]: {
       wpMultiWrap: {
           flexDirection: 'column'
       },
       multiImg: {
           width: '80%',
           margin: '0 auto'
       },
    },
    [theme.breakpoints.down('xs')]: {
       multiTitle: {
            fontSize: '32px'
        },
        multiContent: {
            fontSize: '19px'
        },
        multiIcon: {
            fontSize: '45px'
        },
        multiSubTitle: {
            fontSize: '18px'
        },
        multiCont1: {
            fontSize: '19px'
        },
        multiCont2: {
            fontSize: '16px'
        },
        multiServiceWrap: {
            marginTop: '25px'
        },
        multiImg: {
            width: '100%',
            marginTop: '20px'
        },
    },
}));

export default useStyles;
