import styled from 'styled-components'

const Input = styled.input`
  font-size: 14px;
  padding: 0 8px;
  border: 1px solid #bbb;
  width: 100%;
  font-family: sans-serif;
  min-height: 36px;

  :focus {
    outline: none;
    border-color: #333;
  }
`

export const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 10px;;
  display: block;
`

export const ErrorMessage = styled.p`
  font-size: 14px;
  color: red;
  margin: 5px 0 0 0;
`

export default Input