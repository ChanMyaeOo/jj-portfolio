import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    hero: {
        background: '#2a3950',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px 0',
        "& > h1": {
            color: '#fff',
            fontSize: '70px',
            textAlign: 'center'
        },
        "& > p": {
            color: '#fff',
            fontSize: '20px',
            margin: '20px 0',
            width: '55%',
            textAlign: 'center',
            lineHeight: '1.8rem',
        }
    },
    heroBtnWrap: {
        margin: '30px 0 50px 0',
        display: 'flex'
    },
    arrowIcon: {
        fontSize: '24px',
        paddingLeft: '10px'
    },
    heroBtn1: {
        padding: '10px 16px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        borderRadius: '25px',
        border: 'none',
        outline: 'none',
        background: '#984063',
        color: '#fff',
        fontSize: '16px',
        margin: '0 25px',
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        cursor: 'pointer',
        textDecoration: 'none'
    },
    heroBtn2: {
        padding: '10px 16px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        borderRadius: '25px',
        border: 'none',
        outline: 'none',
        background: '#f64668',
        color: '#fff',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        cursor: 'pointer',
        textDecoration: 'none'
    },
    heroImgWrap: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '20px'
    },
    vendorImgWrap: {
        width: '95%',
        maxHeight: '65px',
        background: '#fff',
        marginTop: '-30px',
        borderRadius: '50px',
        padding: '0 15px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxShadow: '0px 0px 3px 0px #000'
    },
    vendorImg: {
        padding: '0 10px'
    },

    // Responsive Design
    [theme.breakpoints.down('md')]: {
        heroImg: {
            width: '220px'
        },
        hero: {
            "& > h1": {
                fontSize: '42px'
            },
            "& > p": {
                width: '80%'
            }
        },
        vendorImgWrap: {
            maxHeight: '50px'
        }
    },
    [theme.breakpoints.down('sm')]: {
        heroImg: {
            width: '160px'
        },
         vendorImgWrap: {
            maxHeight: '40px'
        }
    },
    [theme.breakpoints.down('xs')]: {
       heroImgWrap: {
           display: 'none'
       },
       vendorImgWrap: {
           display: 'none'
       },
       hero: {
           "& > p": {
               width: '95%',
               fontSize: '18px'
           }
       },
       heroBtnWrap: {
           flexDirection: 'column',
           alignItems: 'center',
           marginBottom: 0
       },
       heroBtn2: {
           marginTop: '25px'
       }
    },
}));

export default useStyles;
