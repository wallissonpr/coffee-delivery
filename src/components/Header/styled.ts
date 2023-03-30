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
export const HeaderShoppingCartTotal = styled.span`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  text-align: center;
  font-size: 0.7rem;
  line-height: 20px;
  top: 60px;
  transition: 1s;
`
