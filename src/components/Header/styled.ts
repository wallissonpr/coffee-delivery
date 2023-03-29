import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderNav = styled.nav`
  display: flex;
  gap: 0.75rem;
`
export const BaseHeaderNavBars = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
`
export const HeaderGeoLocation = styled(BaseHeaderNavBars)`
  gap: 4px;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const HeaderShoppingCart = styled(BaseHeaderNavBars)`
  background: ${(props) => props.theme['yellow-light']};

  a {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
