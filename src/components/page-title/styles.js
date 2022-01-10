import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    titleWrap: {
        height: '200px',
        width: '100%',
        backgroundColor: '#2a3950',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "& > h3": {
            color: '#fff',
            fontSize: '52px',
            fontWeight: 'bold',
            textAlign: 'center'
        }
    },

    // Responsive Design
    [theme.breakpoints.down('md')]: {
        titleWrap: {
            "& > h3": {
                fontSize: '34px'
            }
        }
    },
    [theme.breakpoints.down('sm')]: {
        
    },
    [theme.breakpoints.down('xs')]: {
       // do something
    },
}));

export default useStyles;
