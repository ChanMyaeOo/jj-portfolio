import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    

    // Responsive Design
    [theme.breakpoints.down('md')]: {
        // do something
    },
    [theme.breakpoints.down('xs')]: {
       // do something
    },
}));

export default useStyles;
