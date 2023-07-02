import React from "react";
import Link from "next/link";

import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Copyright</LinkTitle>
                    <Link href="/#">
                        <LinkItem>&copy; Wael Youssfi</LinkItem>
                    </Link>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href="tel:+4917675957152">
                        +49 176 75957152
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>Quality comes first!</Slogan>
                </CompanyContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
