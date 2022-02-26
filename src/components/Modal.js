import React from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton";

function Modal({ isOpen, onClose, title = "Title", className, children }) {
  return isOpen ? (
    <div className={className} onClick={() => onClose?.()}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <h2>{title}</h2>
          <CloseButton onClick={() => onClose?.()} />
        </div>
        {children}
      </div>
    </div>
  ) : null;
}

export default styled(Modal)`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    background-color: white;
    width: 100%;
    max-width: 768px;
    margin: 0 20px;
    padding: 16px;

    .header {
      display: flex;
      justify-content: space-between;
    }

    h2 {
      margin-top: 6px;
    }
  }
`;
