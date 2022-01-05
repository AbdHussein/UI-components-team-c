import styled from "styled-components";

interface ICardWrapper {
  variant?: string;
}

export const CardWrapper = styled.div<ICardWrapper>`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  overflow: hidden;
  min-width: 275px;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;

export const StyledCardMedia = styled.img`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  object-fit: cover;
`;

export const StyledCardContent = styled.div`
  padding: 16px;
`;

export const StyledCardActions = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`;

interface IStyledCollapse {
  isOpen: boolean;
}
export const StyledCollapse = styled.div<IStyledCollapse>`
  min-height: 0px;
  overflow: hidden;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
`;
