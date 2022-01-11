import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    
    gridWrap: {
        padding: '20px'
    },
    fNewsTitle: {
        fontSize: '22px',
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: '20px'
    },
    fNewsForm: {
        display: 'flex',
        flexDirection: 'column',
        "& > input": {
            height: '42px',
            padding: '5px',
            marginBottom: '10px'
        }
    },
    fNewsBtn: {
        background: '#f64668',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '15px',
        cursor: 'pointer',
        border: 'none',
        outline: 'none'
    },
    // Responsive Design
    [theme.breakpoints.down('md')]: {
        // do something
    },
    [theme.breakpoints.down('xs')]: {
       // do something
    },
}));

export default useStyles;
