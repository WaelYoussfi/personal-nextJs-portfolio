import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

import {
    Container,
    Div1,
    Div2,
    Div3,
    NavLink,
    SocialIcons,
    Span,
} from "./HeaderStyles";

const Header = () => (
    <Container>
        <Div1>
            <a
                href="https://drive.google.com/drive/folders/1lwr6g69fYGFI9P-qarEHv3d0cb4ofbmn?usp=sharing"
                target="_blank"
                style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    marginBottom: "20px",
                }}
            >
                <BiUserCircle size="3rem" />
                <Span>Resume</Span>
            </a>
        </Div1>
        <Div2>
            <li>
                <Link href="#projects">
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#tech">
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#about">
                    <NavLink>About</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#contact">
                    <NavLink>Contact</NavLink>
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="https://github.com/WaelYoussfi" target="_blank">
                <AiFillGithub size="3rem"></AiFillGithub>
            </SocialIcons>
            <SocialIcons
                href="https://www.linkedin.com/in/wyoussfi/"
                target="_blank"
            >
                <AiFillLinkedin size="3rem"></AiFillLinkedin>
            </SocialIcons>
            <SocialIcons
                href="https://www.facebook.com/profile.php?id=100010481555834"
                target="_blank"
            >
                <AiFillFacebook size="3rem"></AiFillFacebook>
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;
