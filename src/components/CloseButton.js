import React from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

function CloseButton({ className, ...rest }) {
  return (
    <button {...rest} className={className}>
      <MdClose />
    </button>
  );
}

export default styled(CloseButton)`
  width: 30px;
  height: 30px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
