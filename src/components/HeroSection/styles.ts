import styled from 'styled-components'

export const Hero = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px 24px;
`

export const HeroContent = styled.div`
  background: #ffffff;
  border: 2px solid #f97316;
  box-shadow: 9px 9px 0 #ffcf88;
  padding: clamp(28px, 5vw, 56px);
`

export const Eyebrow = styled.p`
  color: #f97316;
  font-family: Arial, sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  margin-bottom: 12px;
`

export const HeroTitle = styled.h1`
  max-width: 760px;
  font-size: clamp(2.2rem, 6vw, 5rem);
  line-height: 0.96;
  margin-bottom: 20px;
`

export const HeroText = styled.p`
  max-width: 720px;
  color: #6b4b2f;
  font-size: 1.15rem;
  line-height: 1.7;
`
