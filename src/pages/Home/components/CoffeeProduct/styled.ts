import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
`
export const CoffeeCard = styled.div`
  width: 16rem;
  padding: 1.25rem;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
`

export const CoffeeCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    height: 7.5rem;
    margin-top: -3rem;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 999px;
    box-shadow: 0px 0px 10px 1px ${(props) => props.theme['base-title']};
  }

  span {
    margin-top: 0.75rem;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;

    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
  }

  h1 {
    margin-top: 1rem;
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const CoffeeCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 0.5rem;

  label {
    font-size: 0.75rem;
    margin-right: auto;
  }

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    padding: 0.5rem;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;

    :disabled {
      cursor: not-allowed;
      opacity: 70%;
    }
  }
`
export const CoffeeCardInput = styled.input`
  background-color: ${(props) => props.theme['base-button']};
  border: 0;
  width: 4rem;
  height: 2.5rem;
  text-align: center;
  border-radius: 8px;
`
