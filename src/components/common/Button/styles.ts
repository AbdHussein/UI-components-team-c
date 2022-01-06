import styled from "styled-components";

export const CustomButton= styled.button`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  border: 2px solid gray;
  background-color: white;
  transition: all 0.2s;
  padding: 10px 32px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover{
    background-color:  rgba(232, 232, 232, 1);
    /* border: 2px solid black; */

  }
` 