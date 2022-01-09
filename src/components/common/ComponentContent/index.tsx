import React, { useMemo, useState } from "react";
import { useParams } from "react-router";
import { useTheme } from "styled-components";
import IconButton from "../IconButton";
import DarkThemeIcon from "../IconButton/Icons/DarkThemeIcon";
import AvatarContent from "./Content/AvatarContent";
import CardContentLayout from "./Content/CardContentLayout";
import DialogContent from "./Content/DialogContent";
import SkeletonContent from "./Content/SkeletonContent";
import TypographyContent from "./Content/TypographyContent";
import { Header, Wrapper } from "./Style";
import TableOfContent from "../../common/TableOfContent";
import AvatarTableOfContent from "../../common/TableOfContent/Avatar";
import LightThemeIcon from "../IconButton/Icons/LightThemeIcon";

const components = [
  { name: "card", component: <CardContentLayout key={"card"} /> },
  { name: "skeleton", component: <SkeletonContent key={"skeleton"} /> },
  { name: "dialog", component: <DialogContent key={"dialog"} /> },
  { name: "avatar", component: <AvatarContent key={"avatar"} /> },
  { name: "typeography", component: <TypographyContent key={"typeography"} /> },
];

const ComponentContent = ({
  toggleTheme,
}: {
  toggleTheme: (theme: string) => void;
}) => {
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
          <IconButton>
            {theme.type === "light" ? (
              <DarkThemeIcon
                fill={theme.colors.info}
                onClick={() => toggleTheme("dark")}
              />
            ) : (
              <LightThemeIcon
                fill={theme.colors.info}
                onClick={() => toggleTheme("light")}
              />
            )}
          </IconButton>
        </div>
      </Header>
      <Wrapper style={{ scrollBehavior: "smooth" }}>
        {components.map((item) => item.name === state && item.component)}
      </Wrapper>
      {/* <div style={{ width: "240px" }}>
        <TableOfContent content={AvatarTableOfContent} />
      </div> */}
    </div>
  );
};

export default ComponentContent;
