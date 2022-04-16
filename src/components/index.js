import styled from "styled-components";

const transition = {
  transition: "all 0.3s",
};

const Wrapper = styled.div`
  background-color: #eeeeee;
  text-align: center;
  padding: 50px 10px 20px;
  user-select: none;
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Main = styled.div`
  background-color: #eeeeee;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`;

const Card = styled.div`
  ${transition}
  background-color: white;
  width: 150px;
  height: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  ${(props) => (props.color ? "border: 5px solid " + props.color : "")};
  ${(props) =>
    props.image ? "background-image:url(" + props.image + ")" : ""};
  &:hover {
    cursor: pointer;
  }
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.h1`
  color: ${(props) => (props.color ? props.color : "#333")};
  font-size: ${(props) => (props.size ? props.size + "px" : "16px")};
  cursor: ${(props) => (props.pointer ? "pointer" : "default")};
`;

const Button = styled.button`
  width: fit-content;
  background-color: white;
  border: 1px solid #199da3;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  background-color: ${(props) =>
    props.variant === "text" ? "transparent" : "#199da3"};
  color: ${(props) => (props.variant === "text" ? "#333" : "white")};
  margin: 5px;
  cursor: pointer;
  box-sizing: border-box;
`;

const Span = styled.span`
  ${transition}
  ${(props) => ({ ...props })}
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.between ? "space-between" : "space-around"};
`;

const Input = styled.input`
  width: 120px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9caebb;
  padding: 5px 10px;
  font-weight: bold;
  color: #333;
  margin: 20px;
  box-sizing: border-box;
  outline: none;
`;

export { Wrapper, Main, Card, Label, Button, Span, Flex, Input };
