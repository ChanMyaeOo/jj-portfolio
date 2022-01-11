import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import emailjs from "emailjs-com";
import useStyles from "./styles";

const Newsletter = () => {
    const classes = useStyles();
    const YOUR_SERVICE_ID = "service_53hmu0s";
    const YOUR_TEMPLATE_ID = "template_i751bes";
    const YOUR_USER_ID = "user_UNPA8pOsbjeXCxQ9MmZC1";

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function sendMail(e) {
        e.preventDefault();

        emailjs
            .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_USER_ID)
            .then(
                (result) => {
                    setFormData({
                        user_name: "",
                        user_email: "",
                    });
                    alert("Success!");
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                    alert("Error");
                }
            );
    }
    return (
        <Grid item lg={4} md={4} sm={6} xs={12} className={classes.gridWrap}>
            <h3 className={classes.fNewsTitle}>Newsletter</h3>
            <form className={classes.fNewsForm} onSubmit={sendMail}>
                <input
                    type="text"
                    placeholder="Your name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    placeholder="Your e-mail address"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="submit"
                    value="SIGN UP"
                    className={classes.fNewsBtn}
                />
            </form>
        </Grid>
    );
};

export default Newsletter;
