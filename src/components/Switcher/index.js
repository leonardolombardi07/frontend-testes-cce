import React from "react";
import Switch from "react-switch";
import { StyledLabel } from "./switcher.styled";

import { toggleTheme } from "../../redux/actions";
import { useSelector, connect } from "react-redux";

const Switcher = ({ toggleTheme }) => {
  const themeState = useSelector((state) => state.theme);

  return (
    <StyledLabel>
      <Switch
        onChange={() => {
          toggleTheme();
        }}
        checked={themeState.id === "DEFAULT_THEME" ? true : false}
        onColor="#EE9A00"
        offColor="#000"
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </StyledLabel>
  );
};

export default connect(null, { toggleTheme })(Switcher);
