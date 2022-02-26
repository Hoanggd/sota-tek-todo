import styled from "styled-components";

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

Checkbox.defaultProps = {
  type: "checkbox",
};

export default Checkbox;
