import React from "react";
import { PageHeader, IconWrapper } from "../styles/index";
import awardIcon from "../asset/award.svg";

const Header = () => {
  return (
    <PageHeader>
        <IconWrapper>
          <img src={awardIcon} alt="award icon" />
        </IconWrapper>
        <h1>THE SHOPPIES</h1>
    </PageHeader>
  );
};

export default Header;
