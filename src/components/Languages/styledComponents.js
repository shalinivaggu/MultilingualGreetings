import styled from 'styled-components'

export const Button = styled.button`
  color: ${props => (props.active ? '#ffffff' : '#db1c48')};
  font-family: 'Roboto';
  background-color: ${props => (!props.active ? '#ffffff' : '#db1c48')};
  border: 1px solid #db1c48;
  border-radius: 20px;
  padding: 10px;
`
