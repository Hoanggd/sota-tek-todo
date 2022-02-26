import styled from 'styled-components'

const Button = styled.button`
  background-color: #5cb85c;
  color: #fff;
  font-size: 16px;
  padding: 8px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: .1s ease-in-out;
  width: 100%;

  :active {
    opacity: 0.7;
  }

  :focus {
    outline: 3px solid rgba(0,0,0,.1);
  }
`

export default Button