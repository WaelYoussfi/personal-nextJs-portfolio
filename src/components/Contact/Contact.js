import { Box, Grid } from "@material-ui/core";
import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";

import InputText from "./InputStyle";
import { Controller, useForm } from "react-hook-form";
import Send from "./sendMail";

const Contact = () => {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => {
        Send();
    };
    return (
        <Section id="contact">
            <SectionDivider />
            <br />
            <SectionTitle>Contact</SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box style={{ minWidth: "580px" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Controller
                                name="fullname"
                                control={control}
                                render={({ field }) => (
                                    <InputText
                                        {...field}
                                        label={"Full Name"}
                                        required={true}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <InputText
                                        {...field}
                                        label={"E-mail"}
                                        required={true}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={7}>
                            <Controller
                                name="subject"
                                control={control}
                                render={({ field }) => (
                                    <InputText {...field} label={"Subject"} />
                                )}
                            />
                        </Grid>
                        <Grid item xs={7}>
                            <Controller
                                name="text"
                                control={control}
                                render={({ field }) => (
                                    <InputText
                                        {...field}
                                        rows={4}
                                        multiline={true}
                                        label={"Text"}
                                        required={true}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}></Grid>
                    </Grid>
                </Box>
                <Button type="submit">Send</Button>
            </form>
        </Section>
    );
};

export default Contact;
