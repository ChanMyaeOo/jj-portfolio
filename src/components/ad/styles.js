import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    ad: {
        backgroundColor: '#002839',
        padding: '60px 0'
    },
    wpImg: {
        width: '260px',
        display: 'block',
        margin: '0 auto',
    },
    content: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        margin: '25px 0'
    },
    adBtn: {
        textDecoration: 'none',
        fontSize: '18px',
        padding: '10px 15px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        backgroundColor: '#002839',
        border: '1px solid #fff',
        display: 'block',
        margin: '0 auto',
        width: 'fit-content',
        borderRadius: '20px'
    },
    // Responsive Design
    [theme.breakpoints.down('md')]: {
        content: {
            fontSize: '24px'
        }
    },
    [theme.breakpoints.down('xs')]: {
       wpImg: {
           width: '200px'
       },
       content: {
           fontSize: '18px',
       },
       adBtn: {
           fontSize: '16px'
       }
    },
}));

export default useStyles;
