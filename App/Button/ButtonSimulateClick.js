import { history } from "../../redux";

function ButtonSimulateClick({ onClick, to, replace, href }) {
  if (onClick) {
    onClick();
  } else if (to) {
    history.push(to);
  } else if (replace) {
    history.replace(replace);
  } else if (href) {
    window.location.href = href;
  }
}

export default ButtonSimulateClick;
