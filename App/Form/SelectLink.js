import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ButtonSimulateClick } from "../Element";
import Select from "./Select";

function SelectLink({ url, options, style, ...rest }) {
  const { pathname, search } = useSelector((state) => state.router.location);

  if (!url) url = pathname + search;

  const [value, setValue] = useState(url);

  useEffect(() => {
    setValue(url);
  }, [url]);

  function onChange({ target: { value: newValue } }) {
    setValue(newValue);
    ButtonSimulateClick({ to: newValue });
  }

  const selectOptions = options.map((option) => ({
    label: option.label,
    value: option.to,
  }));

  return (
    <Select
      onChange={onChange}
      value={value}
      options={selectOptions}
      style={{ fontWeight: "bold", ...style }}
      {...rest}
    />
  );
}

export default SelectLink;
