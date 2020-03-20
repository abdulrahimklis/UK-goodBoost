import styled from 'styled-components';

export const Layout = styled.div`
  height: ${props => props.height ? props.height : ""};
  width: ${props => props.width ? props.width : ""};
  background: ${props => props.background ? props.background : "white"};
  display: ${props => props.display ? props.display : ""};
  align-items: ${props => props.alignItems ? props.alignItems : ""};
  justify-content: ${props => props.justifyContent ? props.justifyContent : ""};
  margin: ${props => props.margin ? props.margin : ""};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : ""};
`;

export const CustomButton = styled.button`
  background: ${props => props.background ? props.background : "orange"};
  height: ${props => props.height ? props.height : ""};
  width: ${props => props.width ? props.width : ""};
  font-size: ${props => props.fontSize ? props.fontSize : "1.5rem"};;
  text-transform: ${props => props.textTransform ? props.textTransform : "uppercase"};
  padding: ${props => props.padding ? props.padding : ""};
  border-radius: ${props => props.borderRadius ? props.borderRadius : ""};
  margin: ${props => props.margin ? props.margin : ""};
`;

export const CustomSpan = styled.span`
  text-align: ${props => props.textAlign ? props.textAlign : ""};
  font-size: ${props => props.fontSize ? props.fontSize : ""};
  margin: ${props => props.margin ? props.margin : ""};
  font-family: ${props => props.fontFamily ? props.fontFamily : 'Poppins, arial, sans-serif'};
  color: rgba(87, 87, 87, 1);
`;
