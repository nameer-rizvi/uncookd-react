import React from "react";
import { useSelector } from "react-redux";
import { Nav, ButtonResolver, Small } from "../Element";

function SiteAboutLinks() {
  const { isLoggedIn } = useSelector((state) => state.user);

  if (!isLoggedIn) {
    const NavLinks = [
      { resolve: "login" },
      { resolve: "signup", label: "sign up" },
      { resolve: "home", label: "read" },
    ].map(({ resolve, label }, index) => (
      <ButtonResolver $underline key={index} resolve={resolve}>
        {label || resolve}
      </ButtonResolver>
    ));

    return <Nav className="about-links" li="LI_3" items={NavLinks} />;
  } else return <Small>* * *</Small>;
}

export default SiteAboutLinks;
