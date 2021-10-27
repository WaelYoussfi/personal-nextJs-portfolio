import React from "react";

import {
    Section,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
    <Section raw nopadding>
        <LeftSection>
            <SectionTitle main center>
                Elegantly Crafted <br />
                Web Experience
            </SectionTitle>
            <SectionText>
                Welcome to my Portfolio! My name is Wael and I'm a software
                engineering student. I love web development and I thrive in the
                ever evolving, complex yet attractive web and mobile
                development universe.
            </SectionText>
            <Button
                target="_blank"
                onClick={() =>
                    (window.location = "https://www.linkedin.com/in/wyoussfi/")
                }
            >
                Learn More
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;
