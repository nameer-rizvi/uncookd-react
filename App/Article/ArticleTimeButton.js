import React from "react";
import { capitalize } from "simpul";
import { snakeCase } from "change-case";
import { useToggle } from "../../hooks";
import { Button, Time } from "../Element";

function ArticleTimeButton({ datekeyId, datekey, datetime, index, style }) {
  const event = datekey.replace(datekeyId, "").replaceAll("_", " ");

  const datestring = new Date(datetime).toLocaleString();

  const title = `${capitalize(event)} at ${datestring}.`;

  const name = snakeCase(index + " " + event);

  const toggle = useToggle();

  const onClick = () => toggle.change();

  const format = toggle.state ? "full" : "to";

  return (
    <Button title={title} name={name} onClick={onClick} style={style}>
      <Time datetime={datetime} format={format} event={event} />
    </Button>
  );
}

export default ArticleTimeButton;
