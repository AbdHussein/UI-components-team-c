import React from "react";
import { Link } from "react-router-dom";
import IconButton from "../IconButton";
import LeftArrow from "../IconButton/Icons/LeftArrow";
import Like from "../IconButton/Icons/Like";
import RightArrow from "../IconButton/Icons/RightArrow";
import UnLike from "../IconButton/Icons/UnLike";
import {
  StyledFooter,
  StyledFooterCenterContent,
  StyledFooterContent,
  StyledFooterLink,
  StyledLine,
} from "./style";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLine />
      <StyledFooterContent>
        <StyledFooterLink to={`/components/${"prev"}`}>
          <LeftArrow />
          {"prev"}
        </StyledFooterLink>
        <StyledFooterCenterContent>
          <p>Was this page helpful?</p>
          <div>
            <IconButton>
              <Like />
            </IconButton>
            <IconButton>
              <UnLike />
            </IconButton>
          </div>
        </StyledFooterCenterContent>
        <StyledFooterLink to={`/components/${"naxt"}`}>
          {"next"}
          <RightArrow />
        </StyledFooterLink>
      </StyledFooterContent>
    </StyledFooter>
  );
};

export default Footer;
