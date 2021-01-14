import React from "react";
import PropTypes from "prop-types";
import { PageHeader, IconWrapper, Button } from "../styles";
import awardIcon from "../asset/award.svg";

const Header = ({ setUseDarkTheme, useDarkTheme }) => {
  return (
    <PageHeader>
        <IconWrapper>
          <img src={awardIcon} alt="award icon" />
        </IconWrapper>
        <h1>THE SHOPPIES</h1>
        <Button onClick={() => setUseDarkTheme(!useDarkTheme)}>
          <p>Theme</p>
        </Button>
    </PageHeader>
  );
};

Header.propTypes = {
  useDarkTheme: PropTypes.bool,
  setUseDarkTheme: PropTypes.func,
};


export default Header;
