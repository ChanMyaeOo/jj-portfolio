import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    seoWrap: {
        background: '#f2f2f2',
        padding: '60px 0',
        "& > p": {
            fontSize: '18px',
            color: '#2a3950',
            lineHeight: '1.7rem',
            width: '80%',
            margin: '0 auto'
        }
    },
    seoTitle: {
        fontSize: '52px',
        color: '#212236',
        textAlign: 'center',
        marginBottom: '20px'
    },

    // Responsive Design
    [theme.breakpoints.down('md')]: {
        seoTitle: {
            fontSize: '34px'
        }
    },
    [theme.breakpoints.down('sm')]: {
       seoTitle: {
            fontSize: '32px'
        }
    },
    [theme.breakpoints.down('xs')]: {
       seoWrap: {
            "& > p": {
                width: '90%'
            }
        }
    },
}));

export default useStyles;
