import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footerTop: {
        backgroundColor: '#f4f4f4',
        display: 'flex',
        padding: '60px 25px',
    },
    touchWrap: {
        padding: '15px'
    },
    touchHeader: {
        fontSize: '36px',
        color: '#212236',
        marginBottom: '25px'
    },
    touchContact: {
        fontSize: '18px',
        color: '#2a3950',
        lineHeight: '1.5rem',
        marginBottom: '20px'
    },
    addressHeader: {
        fontSize: '22px',
        color: '#212236',
        marginBottom: '10px'
    },
    addressName: {
        fontSize: '17px',
        color: '#2a3950'
    },
    addressContact: {
        fontSize: '17px',
        lineHeight: '1.5rem',
        color: '#2a3950',
        marginBottom: '20px'
    },
    phone: {
        fontSize: '22px',
        color: '#212236',
        marginBottom: '5px'
    },
    phoneWrap: {
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center'
    },
    email: {
        fontSize: '22px',
        color: '#212236',
        marginBottom: '5px'
    },
    emailWrap: {
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center'
    },
    phoneSpan: {
        color: '#f64668',
        fontSize: '17px'
    },
    emailSpan: {
        color: '#f64668',
        fontSize: '17px'
    },
    phoneIcon: {
        color: '#2a3950',
        marginRight: '5px'
    },
    emailIcon: {
        color: '#2a3950',
        marginRight: '5px'
    },  

    gridWrap: {
        padding: '20px'
    },
    footerLocation: {
        padding: '20px'
    },

    footerBottom: {
        backgroundColor: '#2a3950',
        paddingTop: '60px'
    },
    fAboutTitle: {
        fontSize: '22px',
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: '10px'
    },
    fAboutContact: {
        color: '#fff',
        lineHeight: '1.5rem',
        marginBottom: '20px'
    },
    fAboutSchedule: {
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '17px',
        marginBottom: '7px'
    },
    fLocationTitle: {
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: '20px'
    },
    
    
    
    fHr: {
        border: 'none',
        height: '1px',
        background: '#f4f4f4'
    },
    fPolicy: {
        marginTop: '60px'
    },
    fPolicyWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        color: '#fff'
    },
    policyWrap: {
        "& > span": {
            padding: '0 6px'
        }
    },
    // Responsive Design
    [theme.breakpoints.down('sm')]: {
        footerTop: {
            flexDirection: 'column'
        },
        touchHeader: {
            fontSize: '30px'
        },
        footerLocation: {
            display: 'none'
        }
    },
    [theme.breakpoints.down('xs')]: {
       fPolicy: {
           marginBottom: '60px'
       },
       fPolicyWrap: {
           flexDirection: 'column'
       },
       copyright: {
           marginTop: '10px',
           paddingLeft: '6px'
       },
       touchHeader: {
           fontSize: '28px'
       }
    },
}));

export default useStyles;
