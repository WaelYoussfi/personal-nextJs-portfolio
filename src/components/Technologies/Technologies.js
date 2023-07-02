import React from "react";
import { DiCode, DiFirebase, DiPhotoshop, DiReact } from "react-icons/di";
import { GrDocker } from "react-icons/gr";
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import {
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle,
} from "./TechnologiesStyles";
import { BiTestTube } from "react-icons/bi";

const Technologies = () => (
    <Section id="tech">
        <SectionDivider />
        <br />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            During my journey, I've tried and worked with a wide range of
            technologies in web, mobile and desktop development world. From
            Back-end to Front-end and Design.
        </SectionText>
        <List>
            <ListItem>
                <DiReact size="5rem" />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        React.js - Next.js - TailwindCSS - Material UI
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiCode size="5rem" />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Node.js - Firebase - GraphQL - REST APIs
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size="5rem" />
                <ListContainer>
                    <ListTitle>Database</ListTitle>
                    <ListParagraph>PostgreSQL - MongoDB</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiPhotoshop size="5rem" />
                <ListContainer>
                    <ListTitle>UI/UX</ListTitle>
                    <ListParagraph>Figma - Photoshop</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <GrDocker size="5rem" />
                <ListContainer>
                    <ListTitle>DevOps</ListTitle>
                    <ListParagraph>
                        Docker - Github actions - Gitlab CI
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem color="#fff">
                <BiTestTube size="5rem" />
                <ListContainer>
                    <ListTitle>Testing - Linting</ListTitle>
                    <ListParagraph>
                        Unit - Integration - E2E - Jest - Cypress - Playwright -
                        Eslint
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
