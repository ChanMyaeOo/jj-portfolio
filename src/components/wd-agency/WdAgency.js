import React from "react";
import { Link } from "react-router-dom";
import AgencyFact from "./agency-fact/AgencyFact";
import useStyles from "./styles";

const WdAgency = ({
    count,
    title,
    content,
    btn,
    AgIcon1,
    AgIcon2,
    AgIcon3,
    AgIcon4,
    AgIcon5,
    AgIcon6,
    agFactTitle1,
    agFactContent1,
    agFactTitle2,
    agFactContent2,
    agFactTitle3,
    agFactContent3,
    agFactTitle4,
    agFactContent4,
    agFactTitle5,
    agFactContent5,
    agFactTitle6,
    agFactContent6,
    
}) => {
    const classes = useStyles();
    return (
        <div className={classes.wdAgContainer}>
            <h3 className={classes.wdTitle}>{title}</h3>
            <p className={classes.wdContent}>{content}</p>

            <Link to='/' className={classes.wdBtn}>
                {btn}
            </Link>

            <div className={classes.wdAgWrap}>
                {count === 6 && (
                    <>
                        <AgencyFact
                            AgIcon={AgIcon1}
                            agFactTitle={agFactTitle1}
                            agFactContent={agFactContent1}
                        />
                        <AgencyFact
                            AgIcon={AgIcon2}
                            agFactTitle={agFactTitle2}
                            agFactContent={agFactContent2}
                        />
                        <AgencyFact
                            AgIcon={AgIcon3}
                            agFactTitle={agFactTitle3}
                            agFactContent={agFactContent3}
                        />
                        <AgencyFact
                            AgIcon={AgIcon4}
                            agFactTitle={agFactTitle4}
                            agFactContent={agFactContent4}
                        />
                        <AgencyFact
                            AgIcon={AgIcon5}
                            agFactTitle={agFactTitle5}
                            agFactContent={agFactContent5}
                        />
                        <AgencyFact
                            AgIcon={AgIcon6}
                            agFactTitle={agFactTitle6}
                            agFactContent={agFactContent6}
                        />
                    </>
                )}

                {count === 3 && (
                    <>
                        <AgencyFact
                            AgIcon={AgIcon1}
                            agFactTitle={agFactTitle1}
                            agFactContent={agFactContent1}
                        />
                        <AgencyFact
                            AgIcon={AgIcon2}
                            agFactTitle={agFactTitle2}
                            agFactContent={agFactContent2}
                        />
                        <AgencyFact
                            AgIcon={AgIcon3}
                            agFactTitle={agFactTitle3}
                            agFactContent={agFactContent3}
                        />
                    </>
                )}

                {count === 2 && (
                    <>
                        <AgencyFact
                            AgIcon={AgIcon1}
                            agFactTitle={agFactTitle1}
                            agFactContent={agFactContent1}
                        />
                        <AgencyFact
                            AgIcon={AgIcon2}
                            agFactTitle={agFactTitle2}
                            agFactContent={agFactContent2}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default WdAgency;
