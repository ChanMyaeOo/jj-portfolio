import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    stageWrap: {
        width: '95%',
        margin: '20px auto',
        padding: '10px 0 50px 0'
    },
    stageCount: {
        fontSize: '21px',
        color: '#f64668',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: '5px'
    },  
    stageTitle: {
        fontSize: '36px',
        color: '#212236',
        fontWeight: 'bold',
        marginBottom: '25px'
    },
    stageContent: {
        "& > p": {
            fontSize: '17px',
            color: '#2a3950',
            lineHeight: '1.5rem'
        }
    },  
    stageImg: {
        width: '100%'
    },
    btn: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: '14px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#f64668',
        width: 'fit-content',
        padding: '10px 15px',
        borderRadius: '20px',
        marginTop: '25px',
    },
    arrow: {
        fontSize: '15px',
        marginLeft: '5px'
    },

    // Responsive Design
    [theme.breakpoints.down('md')]: {
        stageCount: {
            fontSize: '18px'
        },
        stageTitle: {
            fontSize: '32px'
        },
        stageContent: {
            "& > p": {
                fontSize: '15px'
            }
        }
    },
    [theme.breakpoints.down('sm')]: {
       stageImg: {
           marginTop: '25px'
       }
    },
    [theme.breakpoints.down('xs')]: {
       // do something
    },
}));

export default useStyles;
