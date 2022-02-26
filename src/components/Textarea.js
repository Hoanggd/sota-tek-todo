import styled from 'styled-components'

const Textarea = styled.textarea`
  font-size: 14px;
  padding: 8px;
  border: 1px solid #bbb;
  font-family: sans-serif;
  width: 100%;
  min-height: 130px;

  :focus {
    outline: none;
    border-color: #333;
  }
`

export default Textarea