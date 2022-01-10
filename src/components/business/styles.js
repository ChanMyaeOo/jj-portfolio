import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    business: {
        padding: '70px 0'
    },
    header: {
        fontSize: '52px',
        textAlign: 'center',
        color: '#212236'
    },
    content: {
        fontSize: '21px',
        textAlign: 'center',
        width: '70%',
        margin: '0 auto',
        lineHeight: '1.7rem',
        padding: '35px 0 60px 0',
        color: '#212236'
    },
    serviceWrap: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    icon: {
        fontSize: '95px',
        color: '#f64668',
        padding: '20px'
    },
    service: {
        boxShadow: '0px 0px 4px 0px rgb(0 0 0 / 30%) inset',
        maxWidth: '380px',
        borderRadius: '20px',
        background: '#fff'
    },
    serviceHeader: {
        fontSize: '24px',
        color: '#212236',
        padding: '0 20px',
        marginBottom: '15px'
    },
    serviceText: {
        fontSize: '18px',
        color: '#2a3950',
        padding: '0 20px',
        lineHeight: '1.5rem'
    },
    serviceBtn: {
        color: '#f64668',
        fontWeight: 'bold',
        textDecoration: 'none',
        display: 'block',
        padding: '25px',
        fontSize: '18px',
        "&:hover": {
            color: '#005'
        }
    },
    // Responsive Design
    [theme.breakpoints.down('md')]: {
        header: {
            fontSize: '34px'
        },
        serviceWrap: {
            flexDirection: 'column'
        },
        service: {
            maxWidth: '95%',
            margin: '15px auto'
        },
        icon: {
            fontSize: '95px'
        }
    },
    [theme.breakpoints.down('sm')]: {
        content: {
            width: '90%'
        },
        icon: {
            fontSize: '85'
        }
    },
    [theme.breakpoints.down('xs')]: {
       header: {
           fontSize: '32px'
       },
       content: {
           fontSize: '18px'
       },
       icon: {
           fontSize: '80px'
       }
    },
}));

export default useStyles;
