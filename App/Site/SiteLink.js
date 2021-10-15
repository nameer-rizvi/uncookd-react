import { RouterConfigSite } from "../Router";
import { capitalCase } from "change-case";

const contact = "email_author";

const SiteLink = {
  array: (isLoggedIn) => [
    ...RouterConfigSite.map((SiteRoute) => SiteRoute.path.split("/site/")[1]),
    contact,
    isLoggedIn && "logout",
  ],
  label: (link) => (link === contact ? "Contact" : capitalCase(link)),
};

export default SiteLink;
