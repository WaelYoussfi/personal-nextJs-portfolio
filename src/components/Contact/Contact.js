import { useState } from "react";
import emailjs from "emailjs-com";

import { Box, Grid, TextField } from "@material-ui/core";
import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { makeStyles } from "@material-ui/styles";

const inputConfig = {
    variant: "filled",
    fullWidth: true,
    margin: "dense",
};
const useStyles = makeStyles({
    labelText: {
        color: "hsl(204, 23.8%, 95.9%)",
        fontFamily: "Space Grotesk,sans-serif",
        fontSize: "1.6rem",
    },
    inputText: {
        color: "hsl(204, 23.8%, 95.9%)",
        fontFamily: "Space Grotesk,sans-serif",
        fontSize: "1.6rem",
    },
});

const Contact = () => {
    const { labelText, inputText } = useStyles();
    return (
        <Section id="contact">
            <SectionDivider />
            <br />
            <SectionTitle>Contact</SectionTitle>
            <Box style={{ minWidth: "580px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <TextField
                            style={{ color: "white" }}
                            required
                            id="full-name"
                            label="Full Name"
                            {...inputConfig}
                            InputLabelProps={{ className: labelText }}
                            InputProps={{ className: inputText }}
                        ></TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="e-mail"
                            label="Your E-mail"
                            {...inputConfig}
                            InputLabelProps={{ className: labelText }}
                            InputProps={{ className: inputText }}
                        ></TextField>
                    </Grid>

                    <Grid item xs={7}>
                        <TextField
                            type="text"
                            id="subject"
                            label="Subject"
                            {...inputConfig}
                            InputLabelProps={{ className: labelText }}
                            InputProps={{ className: inputText }}
                        ></TextField>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            required
                            id="text"
                            label="Text"
                            multiline
                            rows={4}
                            InputLabelProps={{ className: labelText }}
                            InputProps={{ className: inputText }}
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
