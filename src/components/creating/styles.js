import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    
    creating: {
        width: '100%',
        backgroundColor: '#2a3950',
        padding: '80px 0'
    },
    header: {
        color: '#fff',
        fontSize: '52px',
        textAlign: 'center',
        marginBottom: '40px'
    },
    content: {
        fontSize: '21px',
        color: '#fff',
        textAlign: 'center',
        lineHeight: '1.6rem',
        width: '80%',
        margin: '0 auto',
        paddingBottom: '20px'
    },
    workBtn: {
        backgroundColor: '#f64668',
        color: '#fff',
        textTransform: 'uppercase',
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '10px 15px',
        borderRadius: '20px',
        display: 'block',
        margin: '0 auto',
        width: 'fit-content'
    },
    // Responsive Design
    [theme.breakpoints.down('md')]: {
        header: {
            fontSize: '34px'
        }
    },
    [theme.breakpoints.down('xs')]: {
       header: {
           fontSize: '32px'
       },
       content: {
           fontSize: '18px',
           width: '90%'
       }
    },
}));

export default useStyles;
