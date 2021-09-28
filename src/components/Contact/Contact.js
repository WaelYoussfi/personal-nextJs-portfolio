import { useState } from "react";
import emailjs from "emailjs-com";
import { Box, Grid, TextField } from "@material-ui/core";
import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";

const inputConfig = {
    variant: "filled",
    fullWidth: true,
    size: "big",
    margin: "dense",
};

const Contact = () => {
    return (
        <Section id="contact">
            <SectionDivider />
            <br />
            <SectionTitle>Contact</SectionTitle>
            <Box sx={{ minWidth: "580px", marginBottom: "30px" }}>
                <Grid container spacing={2} columns={12}>
                    <Grid item xs={3}>
                        <TextField
                            required
                            id="full-name"
                            label="Full Name"
                            {...inputConfig}
                        ></TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="e-mail"
                            label="Your E-mail"
                            {...inputConfig}
                        ></TextField>
                    </Grid>

                    <Grid item xs={7}>
                        <TextField
                            id="subject"
                            label="Subject"
                            {...inputConfig}
                        ></TextField>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            required
                            id="text"
                            label="Text"
                            multiline
                            rows={4}
                            {...inputConfig}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12}></Grid>
                </Grid>
            </Box>
            <Button>Send</Button>
        </Section>
    );
};

export default Contact;
