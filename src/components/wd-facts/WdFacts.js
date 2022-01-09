import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import WdFact from './wd-fact/WdFact'


const WdFacts = ({ factTitle1, factContent1, factTitle2, factContent2, factTitle3, factContent3, factTitle4, factContent4, factTitle5, factContent5, factTitle6, factContent6, factTitle7, factContent7, factTitle8, factContent8, title, content, factIcon1, factIcon2, factIcon3, factIcon4, factIcon5, factIcon6, factIcon7, factIcon8}) => {
    const classes = useStyles()
    return (
        <div className={classes.wdFactsWrap}>
            <h3 className={classes.wpFactsTitle}>{title}</h3>
            <p className={classes.wpFactsContent}>{content}</p>
            
            <Grid container>
                <WdFact FactIcon={factIcon1} factTitle={factTitle1} factContent={factContent1}/>
                <WdFact FactIcon={factIcon2} factTitle={factTitle2} factContent={factContent2}/>
                <WdFact FactIcon={factIcon3} factTitle={factTitle3} factContent={factContent3}/>
                <WdFact FactIcon={factIcon4} factTitle={factTitle4} factContent={factContent4}/>
                <WdFact FactIcon={factIcon5} factTitle={factTitle5} factContent={factContent5}/>
                <WdFact FactIcon={factIcon6} factTitle={factTitle6} factContent={factContent6}/>
                <WdFact FactIcon={factIcon7} factTitle={factTitle7} factContent={factContent7}/>
                <WdFact FactIcon={factIcon8} factTitle={factTitle8} factContent={factContent8}/>
            </Grid>
        </div>
    )
}

export default WdFacts
