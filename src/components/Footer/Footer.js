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
                    <LinkItem href="tel:+21694272790">
                        +216 94 27 27 90
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
