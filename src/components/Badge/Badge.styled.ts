import styled from "styled-components";
import { Avatar } from "../Avatar/Avatar.styled";

export const Badge = styled(Avatar)`
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  right: 0;
  /* top: 35px;
    left: 25px; */
  transform: translate(50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  z-index: 10;
  background: #ff1885;
  color: #f9f9f9;
  font-size: 8px;
`;
