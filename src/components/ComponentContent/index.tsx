import React, { useMemo, useState } from "react";
import { useParams } from "react-router";
import { useTheme } from "styled-components";
import IconButton from "../common/IconButton";
import DarkThemeIcon from "../common/IconButton/Icons/DarkThemeIcon";
import AvatarContent from "./Content/AvatarContent";
import CardContentLayout from "./Content/CardContentLayout";
import DialogContent from "./Content/DialogContent";
import SkeletonContent from "./Content/SkeletonContent";
import TypographyContent from "./Content/TypographyContent";
import { Header, Wrapper } from "./Style";

const components = [
  { name: "card", component: <CardContentLayout /> },
  { name: "skeleton", component: <SkeletonContent /> },
  { name: "dialog", component: <DialogContent /> },
  { name: "avater", component: <AvatarContent /> },
  { name: "typeography", component: <TypographyContent /> },
];

const ComponentContent = () => {
  const [state, setstate] = useState<string>("");
  const theme = useTheme();

  const { name } = useParams();
  useMemo(() => setstate(name as string), [name]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "calc(100% - 240px)",
      }}
    >
      <Header>
        <div>
          new
          <IconButton>
            <DarkThemeIcon fill={theme.colors.info} />
          </IconButton>
        </div>
      </Header>
      <Wrapper>
        {components.map((item) => item.name === state && item.component)}
        <div style={{ width: "240px" }}>new</div>
      </Wrapper>
    </div>
  );
};

export default ComponentContent;
