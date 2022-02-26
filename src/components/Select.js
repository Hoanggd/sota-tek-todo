import styled from "styled-components";

const Select = styled.select`
  font-size: 14px;
  padding: 0 8px;
  border: 1px solid #bbb;
  width: 100%;
  height: 36px;

  :focus {
    outline: none;
    border-color: #333;
  }
`;

export default Select;
