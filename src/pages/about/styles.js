import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    aboutWrap: {
        boxShadow: '0px 0px 4px 0px rgb(0 0 0 / 30%) inset',
        padding: '25px',
        borderRadius: '20px',
        margin: '60px 20px',
        "& > h3": {
            fontSize: '36px',
            color: '#212236',
            fontWeight: 'bold',
            marginBottom: '10px'
        },
        "& > p": {
            fontSize: '18px',
            color: '#2a3950',
            lineHeight: '1.5rem'
        },
        "& > h4": {
            fontSize: '24px',
            color: '#212236',
            fontWeight: 'bold',
            marginBottom: '10px',
            marginTop: '20px'
        }
    },
    btnWrap: {
        margin: '40px 0 20px 0'
    },
    aboutWork: {
        padding: '10px 15px',
        background: '#984063',
        color: '#fff',
        textTransform: 'uppercase',
        borderRadius: '25px',
        textDecoration: 'none',
        marginRight: '40px',
        fontWeight: 'bold'
    },
    aboutQuote: {
        padding: '10px 15px',
        background: '#f64668',
        color: '#fff',
        textTransform: 'uppercase',
        borderRadius: '25px',
        textDecoration: 'none',
        fontWeight: 'bold'
    },

    // Responsive Design
    [theme.breakpoints.down('md')]: {
        aboutWrap: {
            "& > h3": {
                fontSize: '32px'
            }
        }
    },
    [theme.breakpoints.down('sm')]: {
        
    },
    [theme.breakpoints.down('xs')]: {
       aboutWrap: {
            "& > h3": {
                fontSize: '28px'
            }
        },
        btnWrap: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        aboutWork: {
            marginRight: '0',
            width: 'fit-content'
        },
        aboutQuote: {
            width: 'fit-content',
            marginTop: '15px'
        }
    },
}));

export default useStyles;
