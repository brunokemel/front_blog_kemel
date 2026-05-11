import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const CarouselSection = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 16px 10px;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 0 24px 16px;
  }
`

export const CarouselFrame = styled.div<{ $accent: string }>`
  background: #ffffff;
  border: 1px solid ${({ $accent }) => $accent};
  box-shadow: 5px 5px 0 #ffe2bb;
  overflow: hidden;

  @media (min-width: ${breakpoints.desktop}) {
    box-shadow: 7px 7px 0 #ffcf88;
  }
`

export const Slide = styled.article`
  display: grid;
  gap: 18px;
  min-height: 300px;
  padding: 22px;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1.1fr) minmax(220px, 0.9fr);
    align-items: center;
    min-height: 260px;
    padding: 30px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    min-height: 300px;
    padding: 36px;
  }
`

export const SlideCopy = styled.div`
  display: grid;
  gap: 12px;
  align-content: center;
`

export const Eyebrow = styled.p`
  color: #f97316;
  font-family: Arial, sans-serif;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
`

export const Title = styled.h2`
  max-width: 720px;
  font-size: clamp(1.75rem, 5vw, 3.4rem);
  line-height: 1;
`

export const Description = styled.p`
  max-width: 660px;
  color: #6b4b2f;
  font-size: 1rem;
  line-height: 1.6;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.08rem;
  }
`

export const ActionButton = styled.button`
  width: fit-content;
  border: 0;
  background: #2d1f14;
  color: #ffffff;
  padding: 11px 16px;
  font-family: Arial, sans-serif;
  font-weight: 800;
  box-shadow: 4px 4px 0 #ffcf88;
`

export const BannerArt = styled.div`
  display: none;

  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    place-items: center;
  }
`

export const ArtWindow = styled.div<{ $accent: string }>`
  position: relative;
  width: min(100%, 310px);
  aspect-ratio: 1.25;
  background: #fff8ef;
  border: 2px solid ${({ $accent }) => $accent};
  box-shadow: 9px 9px 0 #ffe2bb;
  padding: 24px;
`

export const ArtBar = styled.span`
  display: block;
  width: 52%;
  height: 20px;
  background: #2d1f14;
  margin-bottom: 26px;
`

export const ArtLine = styled.span<{ $wide?: boolean }>`
  display: block;
  width: ${({ $wide }) => ($wide ? '82%' : '64%')};
  height: 12px;
  background: #ffd6a1;
  border: 1px solid #ffb65c;
  margin-bottom: 14px;
`

export const ArtStamp = styled.span<{ $accent: string }>`
  position: absolute;
  right: 22px;
  bottom: 20px;
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  background: ${({ $accent }) => $accent};
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
`

export const Controls = styled.div`
  display: grid;
  grid-template-columns: 42px 1fr 42px;
  align-items: center;
  gap: 12px;
  border-top: 1px dashed #ffc078;
  padding: 12px 14px;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 46px 1fr 46px;
    padding: 14px 20px;
  }
`

export const ArrowButton = styled.button`
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border: 1px solid #f97316;
  background: #fff8ef;
  color: #9a3412;
  font-family: Arial, sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1;

  @media (min-width: ${breakpoints.tablet}) {
    width: 46px;
    height: 46px;
  }
`

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 9px;
`

export const DotButton = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? '28px' : '11px')};
  height: 11px;
  border: 1px solid #f97316;
  background: ${({ $active }) => ($active ? '#f97316' : '#ffffff')};
  transition: width 0.2s ease, background 0.2s ease;
`
