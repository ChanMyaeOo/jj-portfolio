import React, { useState } from "react";
import emailjs from "emailjs-com";
import useStyles from "./styles";

const RequestForm = () => {
    const classes = useStyles();
    const YOUR_SERVICE_ID = "service_53hmu0s";
    const YOUR_TEMPLATE_ID = "template_92th7x3";
    const YOUR_USER_ID = "user_UNPA8pOsbjeXCxQ9MmZC1";

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_phone: "",
        user_message: "",
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
                        user_phone: "",
                        user_message: "",
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
        <div className={classes.quoteWrap}>
            <h3 className={classes.quote}>Request a Quote</h3>
            <p className={classes.quoteContact}>
                Please leave details about your WordPress design and development
                project and we will contact you shortly.
            </p>
            <form className={classes.form} onSubmit={sendMail}>
                <input
                    type="text"
                    placeholder="Name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                />
                <input
                    required
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                />
                <input
                    required
                    type="text"
                    placeholder="Phone"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                />
                <textarea
                    required
                    placeholder="Message"
                    className={classes.quoteArea}
                    name="user_message"
                    value={formData.user_message}
                    onChange={handleChange}
                ></textarea>
                <input
                    type="submit"
                    value="SEND REQUEST"
                    className={classes.quoteBtn}
                />
            </form>
        </div>
    );
};

export default RequestForm;
