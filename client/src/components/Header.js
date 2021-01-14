import React from "react";
import PropTypes from "prop-types";
import {
  PageHeader,
  IconWrapper,
  ToggleWrapper,
  ToggleButtonIcon,
  ToggleButton,
} from "../styles";
import awardIcon from "../asset/award.svg";

const Header = ({ setUseDarkTheme, useDarkTheme }) => {
  return (
    <PageHeader>
      <IconWrapper>
        <img src={awardIcon} alt="award icon" />
      </IconWrapper>
      <h1>THE SHOPPIES</h1>
      <ToggleWrapper>
        <ToggleButton
          id="themeToggle"
          type="checkbox"
          onClick={() => setUseDarkTheme(!useDarkTheme)}
        />
        <ToggleButtonIcon htmlFor="themeToggle" />
      </ToggleWrapper>
    </PageHeader>
  );
};

Header.propTypes = {
  useDarkTheme: PropTypes.bool,
  setUseDarkTheme: PropTypes.func,
};

export default Header;
