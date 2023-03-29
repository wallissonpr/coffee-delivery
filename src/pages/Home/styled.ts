import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const BannerSlogan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;

    width: 37rem;
    word-wrap: break-word;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    h1 {
      font-size: 2.5rem;
      width: 100%;
    }
  }
`

export const BannerImg = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    margin: 1rem 0;
    max-width: 90%;
  }
`
export const BannerListTrends = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.875rem;
    margin-bottom: 1.6rem;
  }

  @media screen and (max-width: 768px) {
    margin-right: auto;
    gap: 50%;
  }
`

export const CoffeeMenu = styled.div`
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    div {
      width: 100%;
      justify-content: center;
    }
  }
`

export const CoffeesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
