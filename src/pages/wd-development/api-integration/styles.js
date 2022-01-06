import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    apiWrap: {
        padding: '60px 0'
    },
    apiTitle: {
        fontSize: '52px',
        color: '#212236',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '25px'
    },
    apiContent: {
        fontSize: '21px',
        color: '#212236',
        lineHeight: '1.8rem',
        textAlign: 'center',
        width: '80%',
        margin: '0 auto'
    },
    apiServiceWrap: {
        marginTop: '35px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '90%',
        margin: '0 auto'
    },
    apiService: {
        width: '530px',
        padding: '20px',
        display: 'flex',
        marginTop: '20px'
    },

    apiServiceIcon: {
        fontSize: '60px',
        marginRight: '15px',
        color: '#2a3950'
    },

    apiServiceTitle: {
        color: '#2a3950',
        fontSize: '24px',
        fontWeight: 'bold'
    },
    apiServiceSubTitle: {
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#f64668',
        margin: '12px 0'
    },
    apiServiceContent: {
        fontSize: '18px',
        color: '#000926',
        lineHeight: '1.5rem'
    },

    // Responsive Design
    [theme.breakpoints.down('md')]: {
        apiTitle: {
            fontSize: '34px'
        },
        apiService: {
            width: '90%'
        }
    },
    [theme.breakpoints.down('xs')]: {
       apiTitle: {
            fontSize: '32px'
        },
        apiContent: {
            fontSize: '19px'
        },
        apiService: {
            width: '100%'
        },
        apiServiceTitle: {
            fontSize: '18px'
        },
        apiServiceSubTitle: {
            fontSize: '19px'
        },
        apiServiceContent: {
            fontSize: '16px'
        },
        apiService: {
            padding: '5px'
        },
        apiServiceWrap: {
            width: '100%'
        },
        apiServiceIcon: {
            marginRight: '10px'
        }
    },
}));

export default useStyles;
