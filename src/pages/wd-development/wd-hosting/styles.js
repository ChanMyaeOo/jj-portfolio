import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wdHostingWrap: {
        padding: '75px 0'
    },
    hostingTitle: {
        fontSize: '52px',
        fontWeight: 'bold',
        color: '#212236',
        textAlign: 'center'
    },
    hostingContent: {
        fontSize: '21px',
        color: '#212236',
        textAlign: 'center',
        lineHeight: '1.8rem',
        width: '80%',
        margin: '0 auto',
        marginTop: '20px',
        marginBottom: '40px'
    },
    
    hostingWrap: {
        display: 'flex',
        backgroundColor: '#2a3950',
        width: '80%',
        margin: '0 auto'
    },
    wdHostings: {
        padding: '15px',
        "& > p": {
            width: '280px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px 10px',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '22px',
            cursor: 'pointer',
            margin: '5px 0',
            "&:hover": {
                backgroundColor: '#f64668'
            }
        }
    },
    wdHostingContent: {
        padding: '20px',
        "& p": {
            color: '#2a3950',
            fontSize: '19px',
            lineHeight: '1.7rem'
        }
    },
    wdHostingService: {
        backgroundColor: '#fff',
        padding: '20px'
    },
    // Responsive Design
    [theme.breakpoints.down('md')]: {
       hostingTitle: {
           fontSize: '34px'
       },
       hostingWrap: {
           width: '90%'
       }
    },
    [theme.breakpoints.down('sm')]: {
        hostingWrap: {
           width: '95%'
       },
       wdHostings: {
           "& > p": {
               width: '250px'
           }
       },
       hostingTitle: {
           fontSize: '32px'
       }
    },
    [theme.breakpoints.down('xs')]: {
       hostingWrap: {
           flexDirection: 'column'
       },
        wdHostings: {
           "& > p": {
               width: '95%'
           }
       },

    },
}));

export default useStyles;
