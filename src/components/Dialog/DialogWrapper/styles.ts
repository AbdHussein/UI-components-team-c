import styled from "styled-components";
import { Flex } from "../styles";

interface Props{
  fullScreen?: boolean,
  maxWidth?: string
}

const maxWidthHandler= (maxWidth?: string)=> {

  switch(maxWidth){
    case 'false': return 'auto'
    case 'xs': return '30%'
    case 'sm': return '40%'
    case 'md': return '50%'
    case 'lg': return '65%'
    case 'xl': return '80%'

  }
}

export const Wrapper= styled('div')<Props>`
  ${( {fullScreen} )=> !fullScreen && Flex };
  flex-direction: column;
  background-color: #383838;
  color: white;
  text-align: justify;
  padding: ${( {fullScreen} )=> fullScreen? '150px ': '50px' } ; ;
  width: ${( {fullScreen, maxWidth} )=> fullScreen? '100% ': maxWidth ?  maxWidthHandler(maxWidth) : '40%' } ;
  height: ${( {fullScreen} )=> fullScreen? '100vh ': 'auto' } ;
  z-index: 500;
  border-radius: ${( {fullScreen} )=> !fullScreen && '8px' };
`