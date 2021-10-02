import { Box, Grid, Snackbar } from "@material-ui/core";
import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";

import InputText from "./InputStyle";

import emailjs from "emailjs-com";
import Ids from "./emailJS";
import { useState, Fragment } from "react";

const Contact = () => {
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(Ids.serviceId, Ids.templateId, e.target, Ids.userId)
            .then(e.target.reset())
            .then(setOpen(true));
    };

    return (
        <Section id="contact">
            <SectionDivider />
            <br />
            <SectionTitle>Contact</SectionTitle>
            <form onSubmit={onSubmit}>
                <Box style={{ minWidth: "580px" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <InputText
                                name="sender_name"
                                label={"Full Name"}
                                required={true}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <InputText
                                name="sender_email"
                                label={"E-mail"}
                                required={true}
                                type={"email"}
                            />
                        </Grid>
                        <Grid item xs={7}>
                            <InputText name="subject" label={"Subject"} />
                        </Grid>
                        <Grid item xs={7}>
                            <InputText
                                rows={4}
                                name="message"
                                multiline={true}
                                label={"Text"}
                                required={true}
                            />
                        </Grid>
                        <Grid item xs={12}></Grid>
                    </Grid>
                </Box>
                <Button type="submit">Send</Button>
            </form>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Your message was successfully sent! We will reply soon"
            />
        </Section>
    );
};

export default Contact;
