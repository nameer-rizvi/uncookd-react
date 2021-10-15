import React from "react";
import { useSelector } from "react-redux";
import { FooterNavContainer, FooterNavSpanContainer } from "./FooterStyled";
import { SiteLink } from "../Site";
import FooterSmall from "./FooterSmall";
import { ButtonResolver, SpanBracket } from "../Element";

function FooterNav() {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <FooterNavContainer
      items={SiteLink.array(isLoggedIn).map((link, index) =>
        link ? (
          <FooterSmall key={index}>
            <ButtonResolver resolve={link} $hoverUnderline>
              <SpanBracket $margin="2px">
                <FooterNavSpanContainer>
                  {SiteLink.label(link)}
                </FooterNavSpanContainer>
              </SpanBracket>
            </ButtonResolver>
          </FooterSmall>
        ) : null
      )}
    />
  );
}

export default FooterNav;
