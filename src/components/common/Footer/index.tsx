import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
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

const components = ["card", "skeleton", "dialog", "avatar", "typeography"];

const Footer = () => {
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");
  const { name } = useParams();

  useEffect(() => {
    components.map((component, index) => {
      if (name === component) {
        setPrev(components[index - 1]);
        setNext(components[index + 1]);
      }
    });
  }, [name]);

  return (
    <StyledFooter>
      <StyledLine />
      <StyledFooterContent>
        {prev ? (
          <StyledFooterLink to={`/components/${prev}`}>
            <LeftArrow />
            {prev}
          </StyledFooterLink>
        ) : (
          <div />
        )}
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
        {next ? (
          <StyledFooterLink to={`/components/${next}`}>
            {next}
            <RightArrow />
          </StyledFooterLink>
        ) : (
          <div />
        )}
      </StyledFooterContent>
    </StyledFooter>
  );
};

export default Footer;
