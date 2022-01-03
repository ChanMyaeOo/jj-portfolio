import React from 'react'
import { Grid } from '@material-ui/core'
import ContactsIcon from '@material-ui/icons/Contacts';
import useStyles from './styles'
import WdFact from './wd-fact/WdFact'


const WdFacts = () => {
    const classes = useStyles()
    return (
        <div className={classes.wdFactsWrap}>
            <h3 className={classes.wpFactsTitle}>We convert ideas into websites that work!</h3>
            <p className={classes.wpFactsContent}>Your website design is the most important aspect of your marketing campaign. It needs to be engaging, informative, and hold the attention of your visitors. We integrate many elements into your website design with 1,000's of components to choose from. These plugins and widgets can turn turn your website into an advanced lead generation website. All features are designed to be responsive for display on all mobile devices. and desktop computers.</p>
            
            <Grid container>
                <WdFact FactIcon={ContactsIcon} />
                <WdFact FactIcon={ContactsIcon} />
                <WdFact FactIcon={ContactsIcon} />
                <WdFact FactIcon={ContactsIcon} />
                <WdFact FactIcon={ContactsIcon} />
                <WdFact FactIcon={ContactsIcon} />
                <WdFact FactIcon={ContactsIcon} />
                <WdFact FactIcon={ContactsIcon} />
            </Grid>
        </div>
    )
}

export default WdFacts
