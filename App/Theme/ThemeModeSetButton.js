import React from "react";
import { useSelector } from "react-redux";
import ThemeMode from "./ThemeMode";
import { Button } from "../Element";

function ThemeModeSetButton(props) {
  const currentThemeMode = useSelector((state) => state.ui[ThemeMode.key]);

  const newThemeMode = ThemeMode.getNew(currentThemeMode);

  const newThemeName = newThemeMode + "_mode";

  const buttonProps = {
    name: newThemeName,
    onClick: ThemeMode.set,
    title: "Set the theme to '" + newThemeMode + "' mode.",
    ...props,
  };

  if (!buttonProps.children) buttonProps.svg = newThemeName;

  return <Button {...buttonProps} />;
}

export default ThemeModeSetButton;
