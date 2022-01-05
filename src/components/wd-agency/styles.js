import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wdAgWrap: {
       display: 'flex',
       flexWrap: 'wrap',
       justifyContent: 'center'
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
