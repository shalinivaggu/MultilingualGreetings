import styled from 'styled-components'

export const GlobalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  width: 50%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`
export const Image = styled.img`
  width: 25%;

  @media (max-width: 768px) {
    width: 50%;
  }
`
